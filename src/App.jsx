import "./App.css";

import Camera from "./components/Camera";
import Location from "./components/Location";
import NotificationPage from "./components/NotificationPage";
import React from "react";

function App() {
  return (
    <div className="container">
      <Location />
      <NotificationPage />
      <Camera />
    </div>
  );
}

export default App;
