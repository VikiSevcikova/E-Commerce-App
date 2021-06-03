import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import QuantityButtons from "./QuantityButtons";

const ShoppingBagItem = ({ item, bag, setBag }) => {
  const [quantity,setQuantity] = useState(item.quantity);
     
    useEffect(()=>{
        if(quantity === 0){
            setBag(bag.filter(i => i.id !== item.id));
        }else{
            setBag(bag.map(i => {
                if(i.id === item.id){
                    return {
                        ...i, quantity: quantity
                    }
                }
                return i;
            }));
        }
        console.log(bag)
    }, [quantity]);

  return (
    <>
        <Row className="py-2 border">
            <Col xs={4} md={8}>
                <Row>
                    <Col md={4}>
                        <Image width="100%" src={item.previewImage}/>
                    </Col>
                    <Col md={8}>
                        <p>{item.name}</p>
                        <p>{item.size}</p>
                        <p>${item.price} CAD</p>
                    </Col>
                </Row>
            </Col>
            <Col xs={4} md={2} className="d-flex justify-content-center align-items-center">
              <QuantityButtons quantity={quantity} setQuantity={setQuantity}/>
            </Col>
            <Col xs={4} md={2} className="d-flex justify-content-center align-items-center">${item.price * quantity} CAD</Col>
        </Row>
    </>
  );
}

export default ShoppingBagItem;
