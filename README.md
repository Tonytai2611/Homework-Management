# Homework Bulletin Board (Vite + React + Tailwind)

This is a small example app that implements a friendly classroom-themed Homework Bulletin Board.

Features:
- Class selection page
- Homework chalkboard per class
- Add/Edit/Remove homework items (simple prompts)
- Add student (simple prompt)
- Announcement editable via prompt

Quick start:

1. Install dependencies

```bash
cd d:/Homework-Management
npm install
```

2. Run dev server

```bash
npm run dev
```

Open the URL shown by Vite (usually http://localhost:5173)

Notes: tailwind needs to be processed by PostCSS. The project uses Vite + Tailwind via PostCSS.
Google Admin Login Setup
------------------------
1. Create an OAuth 2.0 Client ID in Google Cloud Console (type: Web application). Add `http://localhost:5173` to your authorized origins for local dev.
2. Copy the Client ID and replace the placeholder in `src/main.jsx`: set `GOOGLE_CLIENT_ID = "YOUR_CLIENT_ID.apps.googleusercontent.com"`.

Security notes
- This is a front-end-only demo; the admin check is based on the email decoded from Google's credential token and stored in `localStorage`. For a production app, always validate tokens server-side before granting sensitive access.
