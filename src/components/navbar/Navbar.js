import React from 'react';
import { FaRegHandPeace, FaUserAlt, FaShoppingBag } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#"><FaRegHandPeace/>Brand</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="category1" role="button" data-bs-toggle="dropdown" aria-expanded="false">CATEGORY 1</a>
                            <ul className="dropdown-menu multi-column columns-3" aria-labelledby="category1">
                                <div className="row gx-0 justify-content-center">
                                    <div className="col-sm-2">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-2">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-2">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="category2" role="button" data-bs-toggle="dropdown" aria-expanded="false">CATEGORY 2</a>
                            <ul className="dropdown-menu multi-column columns-3" aria-labelledby="category2">
                                <div className="row gx-0 justify-content-center">
                                    <div className="col-sm-2">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-2">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-2">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="category3" role="button" data-bs-toggle="dropdown" aria-expanded="false">CATEGORY 3</a>
                            <ul className="dropdown-menu multi-column columns-3" aria-labelledby="category3">
                                <div className="row gx-0 justify-content-center">
                                    <div className="col-sm-2">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-2">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-2">
                                        <ul className="multi-column-dropdown">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav ms-20">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FaUserAlt/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><FaShoppingBag/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar;