import React from "react";
import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div className="wrapper">
      <SignInPage />
    </div>
  );
}

export default App;
