import React from "react";

import "./scss/App.scss";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/signin' exact component={SignInPage}/>
            <Route path='/product-details' exact component={ProductDetailsPage}/>
          </Switch>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
