import React, { useState, useEffect } from "react";
import "../../scss/Product.scss";
import Products from "./Products";

const ProductsPage = () => {
  const [sample, setSample] = useState();

  const handleCallback = (childData) => {
    setSample(childData);
    console.log(childData);
  };

  return (
    <>
      <Products parentCallback={handleCallback} />
    </>
  );
};

export default ProductsPage;
