import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useAuth } from "../auth/AuthProvider";

/**
 * AdminLogin component
 * - shows a Google login button
 * - decodes credential JWT to get email
 * - only allows ADMIN_EMAIL to be set as admin
 */
const AdminLogin = () => {
  const { isAdmin, adminEmail, loginAsAdmin, logout } = useAuth();

  const handleSuccess = (credentialResponse) => {
    try {
      const token = credentialResponse?.credential;
      if (!token) return alert('No credential returned from Google');
      const decoded = jwt_decode(token);
      const email = decoded?.email || decoded?.upn || decoded?.sub || null;
      if (!email) {
        alert('Unable to read email from credential');
        return;
      }

      const ok = loginAsAdmin({ email, token });
      if (!ok) {
        alert('This Google account is not authorized to be admin.');
      }
    } catch (err) {
      console.error('Google login decode error', err);
      alert('Login failed');
    }
  };

  const handleError = (err) => {
    console.error('GoogleLogin error', err);
    alert('Login error');
  };

  if (isAdmin) {
    return (
      <div className="flex items-center gap-2">
        <div className="text-sm">Admin: <strong>{adminEmail}</strong></div>
        <button onClick={logout} className="px-3 py-1 rounded bg-red-500 text-white">Admin Logout</button>
      </div>
    );
  }

  return (
    <div>
      <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
};

export default AdminLogin;
