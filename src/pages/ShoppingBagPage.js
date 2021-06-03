import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ShoppingBagItem from "../components/ShoppingBagItem";

const ShoppingBag = ({bag, setBag}) => {
    console.log(bag);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        setTotal(
            bag.reduce((a, b) => a + (b.price * b.quantity), 0)
        )
    },[bag]);
console.log(total);
  return (
    <>
         <Container>
            <Row>
                <Col>
                    <h2 className="text-uppercase text-center">Shopping Bag</h2>
                </Col>
            </Row>

            <Row className="bg-light py-2 border text-uppercase">
                <Col xs={8}>Item</Col>
                <Col xs={2} className="text-center">Quantity</Col>
                <Col xs={2} className="text-center">Subtotal</Col>
            </Row>
            {bag && bag.map((item) => 
                <ShoppingBagItem key={item.id} item={item} bag={bag} setBag={setBag}/>
            )}
            <Row className="py-2 border fw-bold text-uppercase d-flex justify-content-end">
                <Col xs={2}>Total</Col>
                <Col xs={2} className="text-center">${total} CAD</Col>
            </Row>
            <Row className="d-flex justify-content-end my-3">
                <Col xs={4}>
                    <Button variant="dark" block>Checkout</Button>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default ShoppingBag;
