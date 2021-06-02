import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const ShoppingBagItem = ({}) => {

  return (
    <>
        <Row>
            <Col xs={6}>
                <Row>
                    <Col xs={4}>
                        <Image width="100%" />
                    </Col>
                    <Col xs={8}>
                        <p>Title</p>
                        <p>Title</p>
                        <p>Title</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={3}>Quantity</Col>
            <Col xs={3}>Subtotal</Col>
        </Row>
           
    </>
  );
}

export default ShoppingBagItem;
