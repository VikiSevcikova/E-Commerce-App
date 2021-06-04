import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRegHandPeace,
  FaSearch,
  FaUserAlt,
  FaShoppingBag,
} from "react-icons/fa";
import SearchPage from "./SearchPage";

import "./Navbar.css";
import { propTypes } from "react-bootstrap/esm/Image";

const Navbar = ({ bag }) => {
  const [search, setSearch] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-2">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <FaRegHandPeace />
            Brand
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-uppercase"
            id="navbarText"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="women"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Women
                </a>
                <ul
                  className="dropdown-menu multi-column columns-2 border-0"
                  aria-labelledby="women"
                >
                  <div className="row gx-0 justify-content-center">
                    <div className="col-sm-2">
                      <ul className="multi-column-dropdown">
                        <li>
                          <a href="#">crop tops</a>
                        </li>
                        <li>
                          <a href="#">t-shirts & tops</a>
                        </li>
                        <li>
                          <a href="#">hoodies & jackets</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-2">
                      <ul className="multi-column-dropdown">
                        <li>
                          <a href="#">bottoms & leggings</a>
                        </li>
                        <li>
                          <a href="#">shorts</a>
                        </li>
                        <li>
                          <a href="#">sports bras</a>
                        </li>
                        <li>
                          <a href="#">swimwear</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="men"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Men
                </a>
                <ul
                  className="dropdown-menu multi-column columns-2 border-0"
                  aria-labelledby="men"
                >
                  <div className="row gx-0 justify-content-center">
                    <div className="col-sm-2">
                      <ul className="multi-column-dropdown">
                        <li>
                          <a href="#">t-shirts & tops</a>
                        </li>
                        <li>
                          <a href="#">tanks</a>
                        </li>
                        <li>
                          <a href="#">stringers</a>
                        </li>
                        <li>
                          <a href="#">hoodies & jackets</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-2">
                      <ul className="multi-column-dropdown">
                        <li>
                          <a href="#">tracksuits</a>
                        </li>
                        <li>
                          <a href="#">bottoms & joggers</a>
                        </li>
                        <li>
                          <a href="#">shorts</a>
                        </li>
                        <li>
                          <a href="#">swimwear</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav ms-20">
              <li
                className="nav-item"
                onClick={() => {
                  if (search === true) {
                    setSearch(false);
                  } else {
                    setSearch(true);
                  }
                }}
              >
                <a className="nav-link">
                  <FaSearch className="searchBtn" />
                </a>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  <FaUserAlt />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shopping-bag" className="nav-link shopping-bag">
                  <FaShoppingBag />
                  {bag.length > 0 && <div className="items">{bag.length}</div>}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {search && <SearchPage search={search} setSearch={setSearch} />}
    </>
  );
};

export default Navbar;
