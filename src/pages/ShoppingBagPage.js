import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ShoppingBagItem from "../components/ShoppingBagItem";

const ShoppingBag = ({ bag, setBag }) => {
  const [total, setTotal] = useState(0);
  //get the total price of the items in the bag
  useEffect(() => {
    setTotal(bag.reduce((a, b) => a + b.price * b.quantity, 0));
  }, [bag]);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="text-uppercase text-center my-3">Shopping Bag</h2>
          </Col>
        </Row>
        {bag.length === 0 ? (
          <Row>
            <h5>Your bag is currently empty.</h5>
          </Row>
        ) : (
          <>
            <Row className="bg-light py-2 border text-uppercase">
              <Col md={4} lg={8}>
                Item
              </Col>
              <Col md={4} lg={2} className="text-center">
                Quantity
              </Col>
              <Col md={4} lg={2} className="text-center">
                Subtotal
              </Col>
            </Row>
            {bag.map((item) => (
              <ShoppingBagItem
                key={item.id}
                item={item}
                bag={bag}
                setBag={setBag}
              />
            ))}
            <Row className="py-2 border fw-bold text-uppercase d-flex justify-content-end">
              <Col md={4} lg={2}>
                Total
              </Col>
              <Col md={4} lg={2} className="text-center">
                ${total} CAD
              </Col>
            </Row>
            <Row className="d-flex justify-content-end my-3">
              <Col md lg={2}>
                <Button variant="dark" className="w-100">
                  Checkout
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default ShoppingBag;
