import React from 'react';
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import banner from '../assets/banner.png';
import women from '../assets/women.jpg';
import men from '../assets/men.jpg';
import onsideimage from '../assets/onsideimage.jpg';

import ProductCard from '../components/productCard/ProductCard';

const Home = () => {

    return(
        <Container fluid>
            <Row className="justify-content-center" style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: "cover",
                        height: "90vh"}}>
                <Col md={4} className="d-flex flex-column text-center justify-content-end justify-content-md-center align-items-end align-items-md-center p-5">
                    <h1 className="fw-bold text-uppercase">Purpose</h1>
                    <p className="fw-bold text-uppercase">Find your why and you will find a way to make it happen.</p>
                    <Button variant="dark" size="lg" type="button" className="px-4 text-uppercase">Shop</Button>
                </Col>
            </Row>

            <Container className="my-4">
                <div className="d-flex flex-row justify-content-between mb-3">
                    <h4 className="fw-bold text-uppercase">bottoms & leggings</h4>
                    <a className="link-dark fw-bold" href="#">View all</a>
                </div>
                <Row>
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                </Row>
            </Container>

            <Row className="p-2 align-items-center" >
                <Col md={6}>
                    <Image fluid src={onsideimage}/>
                </Col>
                <Col md={6} className="text-center">
                    <h3 className="fw-bold text-uppercase">Join Us</h3>
                    <p className="fw-bold text-uppercase">To get all the member exclusives.</p>
                    <Button href="#" variant="dark" size="lg" type="button" className="px-4 text-uppercase">SIGN IN</Button>
                </Col>
            </Row>

            <Container className="my-4">
                <div className="d-flex flex-row justify-content-between mb-3">
                    <h4 className="fw-bold text-uppercase">Hoodies & jackets</h4>
                    <a className="link-dark fw-bold" href="#">View all</a>
                </div>
         
                <Row>
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                   <ProductCard/>
                </Row>
            </Container>

            <Row className="p-2">
                <Col md={6} className="mt-2">
                    <Col md={12} className="d-flex flex-column justify-content-end align-items-end p-4 gap-2" style={{
                        backgroundImage: `url(${women})`,
                        backgroundSize: "cover",
                        height: "90vh"}}>
                        <h1 className="display-5 fw-bold text-uppercase text-light">Women</h1>
                        <Button variant="light" size="lg" type="button" className="fw-bold px-4 text-uppercase">Shop</Button>
                    </Col>
                </Col>
                <Col md={6} className="mt-2">
                        <Col md={12} className="text-start p-4 gap-2" style={{
                            backgroundImage: `url(${men})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "90vh"}}>
                            <h1 className="display-5 fw-bold text-uppercase text-light">Men</h1>
                            <Button variant="light" size="lg" type="button" className="fw-bold px-4 text-uppercase">Shop</Button>
                        </Col>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;