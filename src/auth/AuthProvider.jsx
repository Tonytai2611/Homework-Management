import React, { createContext, useContext, useEffect, useState } from "react";

const ADMIN_EMAIL = "tantaitruong2611@gmail.com";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("hb_auth");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.isAdmin && parsed?.email) {
          setIsAdmin(true);
          setAdminEmail(parsed.email);
          setToken(parsed.token || null);
        }
      }
    } catch (e) {
      console.error("Auth restore error", e);
    }
  }, []);

  const loginAsAdmin = ({ email, token }) => {
    if (email === ADMIN_EMAIL) {
      setIsAdmin(true);
      setAdminEmail(email);
      setToken(token || null);
      localStorage.setItem("hb_auth", JSON.stringify({ isAdmin: true, email, token }));
      return true;
    }
    // Deny non-admin
    setIsAdmin(false);
    setAdminEmail(null);
    setToken(null);
    localStorage.removeItem("hb_auth");
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setAdminEmail(null);
    setToken(null);
    localStorage.removeItem("hb_auth");
  };

  return (
    <AuthContext.Provider value={{ isAdmin, adminEmail, token, loginAsAdmin, logout }}>
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
