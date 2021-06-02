import React, { useState } from "react";
import { Col, Button, ButtonToolbar, ButtonGroup, ToggleButton, Form } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

import "../scss/ProductDetailsPage.scss";

const ProductDetailsForm = ({product}) => {
    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState(null);

    const sizes = [
        { name: 'XS', value: 'xs' },
        { name: 'S', value: 's' },
        { name: 'M', value: 'm' },
        { name: 'L', value: 'l' },
        { name: 'XL', value: 'xl' },
      ];

    const handleSizeChange = (e) => {
        setSize(e.target.value);
        console.log(e.target.value);
    }

    const handlePlusQuantityChange = () => {
        setQuantity(quantity + 1);
    }

    const handleMinusQuantityChange = () => {
        if(quantity > 0) setQuantity(quantity - 1);
    }

    const handleSubmit = () => {
        //add items to cart
        if(quantity > 0){

        }
    }
    
return (
    <>
        <Form onSubmit={handleSubmit} className="sticky-top px-3">
            <h2 className="mb-3 fw-bold">{product.name}</h2>
            <h2 className="mb-3">${product.price} CAD</h2>

            <h5>Select Size:</h5>
            <ButtonGroup className="mb-3">
                {sizes.map((s) => (
                <ToggleButton
                    key={s.value}
                    id={`size-${s.value}`}
                    type="radio"
                    variant="outline-dark"
                    className="rounded me-1"
                    name="size"
                    value={s.value}
                    checked={size === s.value}
                    onChange={handleSizeChange}
                >
                    {s.name}
                </ToggleButton>
                ))}
            </ButtonGroup>

            <h5>Quantity:</h5>
            <ButtonToolbar className="mb-3 text-center align-items-center well">
                <Button onClick={handleMinusQuantityChange} value="minus" type="button" variant="outline-dark" size="sm" className="me-3"><FaMinus/></Button>
                <h4 className="my-0">{quantity}</h4>
                <Button onClick={handlePlusQuantityChange} value="plus" type="button" variant="outline-dark" size="sm" className="ms-3"><FaPlus/></Button>
            </ButtonToolbar>

            <Button type="submit" variant="dark" size="lg">ADD TO CART</Button>
        </Form>
    </>
  );
}

export default ProductDetailsForm;
