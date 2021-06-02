import React, { useState, useEffect } from "react";
import "../../scss/Product.scss";
import Products from "./Products";
import ProductsFilter from "./fillters/ProductsFiltter";

const ProductsPage = () => {
  const [sample, setSample] = useState();

  const handleCallback = (childData) => {
    setSample(childData);
    console.log(childData);
    console.log(sample);
  };

  return (
    <>
      <ProductsFilter />
      <Products parentCallback={handleCallback} />
    </>
  );
};

export default ProductsPage;
