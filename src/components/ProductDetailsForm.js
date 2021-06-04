import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, ToggleButton, Form } from "react-bootstrap";

import "../scss/ProductDetailsPage.scss";
import QuantityButtons from "./QuantityButtons";

const ProductDetailsForm = ({product, bag, setBag}) => {
    const [quantity, setQuantity] = useState(0);
    const [sizes, setSizes] = useState(null);
    const [size, setSize] = useState(null);

    useEffect(()=>{
        getSizes();
    },[]);

    const getSizes = async () => {
        const url = `https://e-commerce-api.belzaondrej.com/products/sizes`;
        try {
          var response = await axios.get(url);
          setSizes(response.data);
        } catch (error) {
          console.error(error);
        }
    }

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //add item to bag
        const productToAdd = {id:`${product.id}-${size}`, name: product.name, previewImage: product.previewImage, price: product.price, size: size, quantity: quantity};
        if(!size || quantity <= 0) return;
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
    
return (
    <>
        <Form onSubmit={handleSubmit} className="sticky-top px-3">
            <h2 className="mb-3 fw-bold">{product.name}</h2>
            <h2 className="mb-3">${product.price} CAD</h2>

            <h5>Select Size:</h5>
            <ButtonGroup className="mb-3">
                {sizes && sizes.map((s) => {
                    let availability = {};
                    availability.disabled = product.stock.some(st => st.size === s && st.quantity < 20) ? true : false;
                    return (
                        <ToggleButton
                            key={s}
                            id={`size-${s}`}
                            type="radio"
                            variant="outline-dark"
                            className="rounded me-1"
                            name="size"
                            value={s}
                            checked={size === s}
                            onChange={handleSizeChange}
                            {...availability}
                        >
                            {s}
                        </ToggleButton>
                    )
                })}
            </ButtonGroup>

            <h5>Quantity:</h5>
            <QuantityButtons quantity={quantity} setQuantity={setQuantity}/>

            <Button type="submit" variant="dark" size="lg">ADD TO BAG</Button>
        </Form>
    </>
  );
}

export default ProductDetailsForm;
