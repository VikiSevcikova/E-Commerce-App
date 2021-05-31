import React from "react";
import "./scss/App.scss";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./containers/home/Home";
import Footer from "./components/footer/Footer";
import SignInPage from "./pages/SignInPage";

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
