import React from "react";
import "../scss/Product.scss";
import Products from "../components/products/Products";

const ProductsPage = (props) => {
  return (
    <>
      <Products props={props}/>
    </>
  );
};

export default ProductsPage;
