import "./App.css";

import Location from "./components/Location";
import NotificationPage from "./components/NotificationPage";
import React from "react";

function App() {
  return (
    <div className="container">
      <Location />
      <NotificationPage />
    </div>
  );
}

export default App;
