import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./containers/home/Home";
import SignInPage from "./pages/SignInPage";
import "./scss/App.scss";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <div className="wrapper">
          <SignInPage />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
