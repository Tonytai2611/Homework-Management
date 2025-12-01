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
  const [debug, setDebug] = React.useState(null);

  const handleSuccess = (credentialResponse) => {
    try {
      const token = credentialResponse?.credential;
      if (!token) {
        console.warn('No credential returned from Google', credentialResponse);
        alert('No credential returned from Google');
        return;
      }
      const decoded = jwt_decode(token);
      console.log('Decoded credential:', decoded);
      const email = decoded?.email || decoded?.upn || decoded?.sub || null;
      if (!email) {
        console.warn('Unable to read email from credential', decoded);
        alert('Unable to read email from credential');
        return;
      }

      setDebug({ decoded, email });

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
   <div className="flex flex-col items-center sm:items-end">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        <div className="text-xs text-gray-500 mt-2 sm:mt-0 sm:ml-3">
          {/* <span className="inline sm:hidden">Admin only</span> */}
          <span className="hidden sm:inline">Only admin can login.</span>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
