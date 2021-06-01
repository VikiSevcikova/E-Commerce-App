import React from 'react';
import product from '../../assets/product1.jpg';
import './ProductCard.css';
import { Col, Button, Card, ButtonToolbar } from "react-bootstrap";

const ProductCard = () => {

    return(
        <Col md={3}>
            <Card className="border-0" style={{width: "100%"}} href="#">
                <div className="product-image" >
                    <a href="#">
                        <Card.Img variant="top" className="card-img-top rounded-0" src={product} alt="p1"/>
                    </a>
                    <div className="quick-add-overlay rounded py-2 px-2">
                        <h6 className="text-uppercase fw-bold">Quick Add</h6>
                        <ButtonToolbar className="text-center well">
                            <Button type="button" variant="outline-dark" size="sm" className="me-1">XS</Button>
                            <Button type="button" variant="outline-dark" size="sm" className="me-1">S</Button>
                            <Button type="button" variant="outline-dark" size="sm" className="me-1">M</Button>
                            <Button type="button" variant="outline-dark" size="sm" className="me-1">L</Button>
                            <Button type="button" variant="outline-dark" size="sm">XL</Button>
                        </ButtonToolbar>
                       
                    </div>
                </div>
               
                <Card.Body className="px-0 mx-0">
                    <a href="#" className="card-text text-decoration-none link-dark d-flex flex-row justify-content-between">
                        <h6>Title of the product</h6>
                        <h6 className="fw-bold">$20.00 CAD</h6>
                    </a>
                </Card.Body>
            </Card>
        </Col>             
     
    );
}

export default ProductCard;