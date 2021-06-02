import React from "react";
import { Container, Row } from "react-bootstrap";

import ProductCard from "./productCard/ProductCard";


const RowOfProducts = ({category, isHomePage}) => {
    
return (
    <Container className="my-4">
        <div className={`d-flex flex-row ${isHomePage ? "justify-content-between" : "justify-content-center"} mb-3`}>
            <h4 className="fw-bold text-uppercase">{category}</h4>
            {isHomePage && <a className="link-dark fw-bold" href="#">View all</a>}
        </div>
        <Row className="px-0 mx-0">
            <ProductCard id="3ff1af05-3027-484f-bd93-9f77d81ccef6"/>
            <ProductCard id="3ff1af05-3027-484f-bd93-9f77d81ccef6"/>
            <ProductCard id="3ff1af05-3027-484f-bd93-9f77d81ccef6"/>
            <ProductCard id="3ff1af05-3027-484f-bd93-9f77d81ccef6"/>
        </Row>
    </Container>    
  );
}

export default RowOfProducts;
