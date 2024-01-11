import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Biometric from "./components/Biometric";
import BookImpelment from "./sarvamitra-listing/BookImplement";
import Booked from "./sarvamitra-listing/Booked";
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
        <Route path="/implement/:id/book" element={<BookImpelment />} />
        <Route path="/implement/:id/booked" element={<Booked />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
