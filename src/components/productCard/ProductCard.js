import React from 'react';
import product from '../../assets/product1.jpg';
import {FaPlusSquare} from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = () => {

    return(
        <div className="col-md-3">
            <div class="card border-0" style={{width: "100%"}} href="#">
                <div className="product-image" >
                    <a href="#">
                        <img src={product} class="card-img-top rounded-0" alt="p1"/>
                    </a>
                    <div className="quick-add-overlay rounded py-2 px-2">
                        <h6 className="text-uppercase fw-bold">Quick Add</h6>
                        <button className="btn p-0" type="button"><FaPlusSquare/></button>
                    </div>
                </div>
               
                <div class="card-body px-0 mx-0">
                    <a href="#" class="card-text text-decoration-none link-dark d-flex flex-row justify-content-between">
                        <h6>Title of the product</h6>
                        <h6 className="fw-bold">$20.00 CAD</h6>
                    </a>
                </div>
            </div>
        </div>             
     
    );
}

export default ProductCard;