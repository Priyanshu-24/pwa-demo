import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./sarvamitra-listing/LandingPage";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
