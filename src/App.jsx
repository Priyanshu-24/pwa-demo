import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Biometric from "./components/Biometric";
import BookImpelment from "./sarvamitra-listing/BookImplement";
import Booked from "./sarvamitra-listing/Booked";
import DetailsPage from "./sarvamitra-listing/DetailsPage";
import LandingPage from "./sarvamitra-listing/LandingPage";
import Layout from "./components/Layout";
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
            path="/implements/:id"
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
            path="/implement/:id/book"
            element={
              <Layout>
                <BookImpelment />
              </Layout>
            }
          />
          <Route
            path="/implement/:id/booked"
            element={
              <Layout>
                <Booked />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
