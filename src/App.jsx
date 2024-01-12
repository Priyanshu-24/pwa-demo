import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Biometric from "./components/Biometric";
import BookImpelment from "./sarvamitra-listing/BookImplement";
import Booked from "./sarvamitra-listing/Booked";
import DetailsPage from "./sarvamitra-listing/DetailsPage";
import LandingPage from "./sarvamitra-listing/LandingPage";
import Layout from "./components/Layout";
import MyBooking from "./sarvamitra-listing/MyBooking";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route
            path="/implement/:sm/:equipment"
            element={
              <Layout>
                <DetailsPage />
              </Layout>
            }
          />
          <Route
            path="/biometric"
            element={
              <Layout>
                <Biometric />
              </Layout>
            }
          />
          <Route
            path="/implement/:sm/:equipment/book"
            element={
              <Layout>
                <BookImpelment />
              </Layout>
            }
          />
          <Route
            path="/implement/:sm/:equipment/booked"
            element={
              <Layout>
                <Booked />
              </Layout>
            }
          />
          <Route
            path="/my-bookings"
            element={
              <Layout>
                <MyBooking />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
