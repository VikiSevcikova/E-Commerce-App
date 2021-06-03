import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Card, ButtonToolbar } from "react-bootstrap";

import '../../scss/ProductCard.scss';

const ProductCard = ({ product, bag, setBag }) => {
    const sizes = [
        { name: 'XS', value: 'XS' },
        { name: 'S', value: 'S' },
        { name: 'M', value: 'M' },
        { name: 'L', value: 'L' },
        { name: 'XL', value: 'XL' },
    ];

    const addToBag = (e) => {
        e.preventDefault();
        const size = e.target.value;
        const productToAdd = {id:`${product.id}-${size}`, name: product.name, previewImage: product.previewImage, price: product.price, size: e.target.value, quantity: 1};
        if(bag.some((b) => b.id === `${product.id}-${size}`)){
            setBag(bag.map(i => {
                if(i.id === `${product.id}-${size}`){
                    return {
                        ...i, quantity: i.quantity + 1
                    }
                }
                return i;
            }));
        
        }else{
            setBag([...bag, productToAdd]);
        }
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
                                <Button key={s.value} onClick={addToBag} type="button" variant="outline-dark" size="sm" className="me-1" value={s.value}>{s.name}</Button>
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
