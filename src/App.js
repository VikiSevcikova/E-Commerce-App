import React from "react";
import "./scss/App.scss";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/navbar/footer/Footer";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <SignInPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
