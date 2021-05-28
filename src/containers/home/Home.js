import React from 'react';
import banner from '../../assets/banner.jpg';
import ProductCard from '../../components/productCard/ProductCard';

const Home = () => {

    return(
        <div className="container-fluid">
            <div className="d-flex flex-column justify-content-end justify-content-md-center align-items-center" 
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    height: "90vh"}}>
                <h1 className="display-5 fw-bold text-uppercase">Title</h1>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-dark btn-lg px-4 text-uppercase">Shop</button>
                </div>
            </div>

            <div className="container">
                <div className="d-flex flex-row justify-content-between mt-5 mb-3">
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
        </div>
    );
}

export default Home;