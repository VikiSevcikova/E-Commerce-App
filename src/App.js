import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect, useState } from "react";

import "./scss/App.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProductsPage from "./components/productspage/ProductsPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import "./scss/App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShoppingBag from "./pages/ShoppingBagPage";

function App() {
  const [bag, setBag] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem('bag') === null){
      localStorage.setItem('bag', JSON.stringify(bag));
    }else{
      setBag(JSON.parse(localStorage.getItem('bag')));
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('bag', JSON.stringify(bag));
  },[bag]);

  return (
    <>
      <Router>
        <div className="App">
          <Navbar bag={bag} />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Home {...props} bag={bag} setBag={setBag} />}
            />
            <Route path="/signin" exact component={SignInPage} />
            <Route
              path="/products/:id"
              exact
              render={(props) => (
                <ProductDetailsPage {...props} bag={bag} setBag={setBag} />
              )}
              routerProps={":id"}
            />
            <Route
              path="/shopping-bag"
              exact
              render={(props) => (
                <ShoppingBag {...props} bag={bag} setBag={setBag} />
              )}
            />
            <Route path="/allproducts/" exact component={ProductsPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
