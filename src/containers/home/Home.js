import React from 'react';
import banner from '../../assets/banner.png';
import women from '../../assets/women.jpg';
import men from '../../assets/men.jpg';
import onsideimage from '../../assets/onsideimage.jpg';
import ProductCard from '../../components/productCard/ProductCard';

const Home = () => {

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="p-2 d-flex flex-column justify-content-end justify-content-md-center align-items-center" 
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: "cover",
                        height: "90vh"}}>
                    <h1 className="display-5 fw-bold text-uppercase">Title</h1>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-dark btn-lg px-4 text-uppercase">Shop</button>
                    </div>
                </div>
            </div>
           

            <div className="container my-3">
                <div className="d-flex flex-row justify-content-between mb-3">
                    <h4 className="fw-bold text-uppercase">Category 1</h4>
                    <a className="link-dark fw-bold" href="#">View all</a>
                </div>
         
                <div className="row">
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                </div>
            </div>

            <div className="p-2 d-flex flex-row" >
                <div className="col-6">
                    <img className="img-fluid" src={onsideimage}/>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="display-5 fw-bold text-uppercase">Title</h1>
                    <button type="button" className="btn btn-dark btn-lg px-4 text-uppercase">Shop</button>
                </div>
            </div>

            <div className="container my-3">
                <div className="d-flex flex-row justify-content-between mb-3">
                    <h4 className="fw-bold text-uppercase">Category 1</h4>
                    <a className="link-dark fw-bold" href="#">View all</a>
                </div>
         
                <div className="row">
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                </div>
            </div>

            <div className="row p-2">
                <div className="col-md-6">
                    <div className="col-md-12 p-4 gap-2 d-flex flex-column justify-content-end justify-content-md-center align-items-center align-items-md-end" style={{
                        backgroundImage: `url(${women})`,
                        backgroundSize: "cover",
                        height: "90vh"}}>
                        <h1 className="display-5 fw-bold text-uppercase text-light">Women</h1>
                        <button type="button" className="btn btn-light btn-lg fw-bold px-4 text-uppercase">Shop</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="col-md-12 p-4 gap-2 d-flex flex-column justify-content-end justify-content-md-center align-items-center align-items-md-start" style={{
                        backgroundImage: `url(${men})`,
                        backgroundSize: "cover",
                        height: "90vh"}}>
                        <h1 className="display-5 fw-bold text-uppercase text-light">Men</h1>
                        <button type="button" className="btn btn-light btn-lg fw-bold px-4 text-uppercase">Shop</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;