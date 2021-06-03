import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton, Form } from "react-bootstrap";

import "../scss/ProductDetailsPage.scss";
import QuantityButtons from "./QuantityButtons";

const ProductDetailsForm = ({product, bag, setBag}) => {
    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState(null);

    const sizes = [
        { name: 'XS', value: 'XS' },
        { name: 'S', value: 'S' },
        { name: 'M', value: 'M' },
        { name: 'L', value: 'L' },
        { name: 'XL', value: 'XL' },
    ];

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //add items to bag
        const productToAdd = {id:`${product.id}-${size}`, name: product.name, previewImage: product.previewImage, price: product.price, size: size, quantity: quantity};
        if(size && quantity > 0){
            if(bag.some((b) => b.id === `${product.id}-${size}`)){
                setBag(bag.map(i => {
                    if(i.id === `${product.id}-${size}`){
                        return {
                            ...i, quantity: i.quantity + quantity
                        }
                    }
                    return i;
                }));
            
            }else{
                setBag([...bag, productToAdd]);
            }
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
            <QuantityButtons quantity={quantity} setQuantity={setQuantity}/>

            <Button type="submit" variant="dark" size="lg">ADD TO BAG</Button>
        </Form>
    </>
  );
}

export default ProductDetailsForm;
