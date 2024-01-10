import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Biometric from "./components/Biometric";
import DetailsPage from "./sarvamitra-listing/DetailsPage";
import LandingPage from "./sarvamitra-listing/LandingPage";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/implements/:id" element={<DetailsPage />} />
        <Route path="/biometric" element={<Biometric />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
