import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { auth, rtdb, rtdbSet, rtdbSubscribe } from "../firebase";

// Allowed admin emails. Add or update emails here.
const ADMIN_EMAILS = [
  "tantaitruong2611@gmail.com",
  "leotruong2412@gmail.com"
];

const normalizeEmail = (email) => (email || "").trim().toLowerCase();

const allowedEmailSet = new Set(ADMIN_EMAILS.map(normalizeEmail).filter(Boolean));

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const adminUnsubRef = useRef(null);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      setError(null);

      if (adminUnsubRef.current) {
        adminUnsubRef.current();
        adminUnsubRef.current = null;
      }

      if (firebaseUser && rtdb) {
        const emailAllowed = allowedEmailSet.has(normalizeEmail(firebaseUser.email));
        if (!emailAllowed) {
          setIsAdmin(false);
          setError(new Error("Tài khoản Google này không nằm trong whitelist."));
          setLoading(false);
          try {
            await signOut(auth);
          } catch (signErr) {
            console.warn("Không thể đăng xuất sau khi từ chối quyền", signErr);
          }
          return;
        }

        try {
          await rtdbSet(`/admins/${firebaseUser.uid}`, {
            email: firebaseUser.email,
            updatedAt: Date.now(),
          });
        } catch (err) {
          console.warn("Không ghi được admin flag", err);
        }

        adminUnsubRef.current = rtdbSubscribe(`/admins/${firebaseUser.uid}`, (val) => {
          setIsAdmin(Boolean(val));
          setLoading(false);
        });
      } else {
        setIsAdmin(false);
        setLoading(false);
      }
    }, (err) => {
      console.error("Auth state error", err);
      setError(err);
      setUser(null);
      setIsAdmin(false);
      setLoading(false);
    });

    return () => {
      unsubscribe && unsubscribe();
      if (adminUnsubRef.current) {
        adminUnsubRef.current();
        adminUnsubRef.current = null;
      }
    };
  }, []);

  const signInWithGoogle = async () => {
    if (!auth) throw new Error("Firebase Auth chưa được cấu hình");
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user" || err.code === "auth/popup-blocked") {
        await signInWithRedirect(auth, provider);
        return;
      }
      setLoading(false);
      setError(err);
      throw err;
    }
  };

  const logout = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
    } finally {
      setIsAdmin(false);
      setUser(null);
    }
  };

  const value = useMemo(() => ({
    user,
    isAdmin,
    loading,
    error,
    signInWithGoogle,
    logout,
  }), [user, isAdmin, loading, error]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export default AuthProvider;
