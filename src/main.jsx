import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import "./styles/index.css";
import { AuthProvider } from "./auth/AuthProvider";

// NOTE: Replace with your Google OAuth client ID when deploying
const GOOGLE_CLIENT_ID = "746431102984-dcvs2ct686p5cahu4g32h3rca4anl9eu.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
