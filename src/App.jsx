// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/Terms";
// import { SWUpdateNotification } from "./components/SWUpdateNotification/SWUpdateNotification";
import InstallPrompt from "./components/InstallPrompt/InstallPrompt";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      {/* <SWUpdateNotification /> */}

      {/* 👇 Instalar PWA en móviles */}
      <InstallPrompt />
    </>
  );
}

export default App;
