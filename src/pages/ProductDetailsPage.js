import React from "react";
import { Container, Row, Col, Image, Accordion, Card } from "react-bootstrap";

import product from '../assets/product1.jpg';

import ProductDetailsForm from "../components/ProductDetailsForm";

import "../scss/ProductDetailsPage.scss";

const ProductDetailsPage = () => {
    
return (
    <Container className="py-2">
        <Row className="px-0 mx-0">
            <Col md={6}>
                <Image fluid src={product}></Image>
                <Accordion defaultActiveKey="0" className="mt-3">
                    <Card color="light" border="light">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Description
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Col>

            <ProductDetailsForm/>
        </Row>
    </Container>
  );
}

export default ProductDetailsPage;
