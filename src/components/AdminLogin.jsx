import React from "react";
import { useAuth } from "../auth/AuthProvider";
import { auth as firebaseAuth } from "../firebase";

/**
 * AdminLogin component
 * - shows a Google login button
 * - decodes credential JWT to get email
 * - only allows ADMIN_EMAIL to be set as admin
 */
const AdminLogin = () => {
  const { isAdmin, user, loading, error, signInWithGoogle, logout } = useAuth();
  const [busy, setBusy] = React.useState(false);

  const handleFirebaseSignIn = async () => {
    if (!firebaseAuth) return alert("Firebase Auth chưa được cấu hình");
    try {
      setBusy(true);
      await signInWithGoogle();
    } catch (err) {
      console.error("Firebase sign-in failed", err);
      alert(err.message || "Google sign-in thất bại");
    } finally {
      setBusy(false);
    }
  };

  if (isAdmin) {
    return (
      <div className="flex items-center gap-2">
        <div className="text-sm">Admin: <strong>{user?.email}</strong></div>
        <button onClick={logout} className="px-3 py-1 rounded bg-red-500 text-white">Admin Logout</button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center sm:items-end">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <button
          onClick={handleFirebaseSignIn}
          disabled={loading || busy}
          className="px-3 py-1 rounded bg-blue-600 text-white disabled:opacity-60"
        >
          {busy || loading ? "Đang đăng nhập..." : "Sign in with Google"}
        </button>
        <div className="text-xs text-gray-500 mt-2 sm:mt-0 sm:ml-3">
          <span className="hidden sm:inline">Chỉ giáo viên whitelist mới có quyền.</span>
        </div>
      </div>
      {error && <p className="text-xs text-red-500 mt-2">{error.message}</p>}
    </div>
  );
};

export default AdminLogin;
