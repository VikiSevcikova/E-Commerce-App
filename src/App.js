import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";

import "./scss/App.scss";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import "./scss/App.scss";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/signin' exact component={SignInPage}/>
          </Switch>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
