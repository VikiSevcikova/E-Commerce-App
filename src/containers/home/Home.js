import React from 'react';
import banner from '../../assets/banner.png';
import women from '../../assets/women.jpg';
import men from '../../assets/men.jpg';
import onsideimage from '../../assets/onsideimage.jpg';
import ProductCard from '../../components/productCard/ProductCard';
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Home = () => {

    return(
        <Container fluid>
            <Row>
                <Col className="d-flex flex-column justify-content-end justify-content-md-center align-items-center p-5" 
                    style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: "cover",
                        height: "90vh"}}>
                    <h1 className="display-5 fw-bold text-uppercase">Title</h1>
                    <Button variant="dark" size="lg" type="button" className="px-4 text-uppercase">Shop</Button>
                </Col>
            </Row>

            <Container className="my-3">
                <div className="d-flex flex-row justify-content-between mb-3">
                    <h4 className="fw-bold text-uppercase">Category 1</h4>
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
                    <h1 className="display-5 fw-bold text-uppercase">Title</h1>
                    <Button variant="dark" size="lg" type="button" className="px-4 text-uppercase">Shop</Button>
                </Col>
            </Row>

            <Container className="my-3">
                <div className="d-flex flex-row justify-content-between mb-3">
                    <h4 className="fw-bold text-uppercase">Category 1</h4>
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