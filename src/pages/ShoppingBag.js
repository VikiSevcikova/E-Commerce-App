import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ShoppingBagItem from "../components/ShoppingBagItem";

const ShoppingBag = ({bag, setBag}) => {

  return (
    <>
         <Container>
            <Row>
                <Col>
                    <h2 className="text-uppercase text-center">Shopping Bag</h2>
                </Col>
            </Row>

            <Row>
                <Col xs={6} className="text-uppercase">Item</Col>
                <Col xs={3} className="text-uppercase">Quantity</Col>
                <Col xs={3} className="text-uppercase">Subtotal</Col>
            </Row>
            <ShoppingBagItem/>
            <Row>
                <Col xs={6}></Col>
                <Col xs={3}>Total</Col>
                <Col xs={3}>Price</Col>
            </Row>
        </Container>
    </>
  );
}

export default ShoppingBag;
