import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Card, ButtonToolbar } from "react-bootstrap";

import './ProductCard.css';

const ProductCard = ({ product, bag, setBag }) => {
    const sizes = [
        { name: 'XS', value: 'xs' },
        { name: 'S', value: 's' },
        { name: 'M', value: 'm' },
        { name: 'L', value: 'l' },
        { name: 'XL', value: 'xl' },
    ];

    const addToBag = (e) => {
        e.preventDefault();
        const productToAdd = {name: product.name, price: product.price, size: e.target.value, quantity: 1};
        setBag([...bag, productToAdd]);
    }
    
    return(
        <Col lg={6} xl={3}>
            <Card className="border-0" style={{width: "100%"}} href="#">
                <div className="product-image" >
                    <Link to={`/products/${product.id}`}>
                        <Card.Img variant="top" className="card-img-top rounded-0" src={product.previewImage} alt="p1"/>
                    </Link>
                    <div className="quick-add-overlay rounded py-2 px-2">
                        <h6 className="text-uppercase fw-bold">Quick Add</h6>
                        <ButtonToolbar className="text-center well">
                            {sizes.map((s)=>
                                <Button onClick={addToBag} type="button" variant="outline-dark" size="sm" className="me-1" value={s.value}>{s.name}</Button>
                            )}
                        </ButtonToolbar>
                    </div>
                </div>
               
                <Card.Body className="px-0 mx-0">
                    <Link to={`/products/${product.id}`} className="card-text text-decoration-none link-dark d-flex flex-row justify-content-between">
                        <h6>{product.name}</h6>
                        <h6 className="fw-bold">${product.price} CAD</h6>
                    </Link>
                </Card.Body>
            </Card>
        </Col>             
     
    );
}

export default ProductCard;
