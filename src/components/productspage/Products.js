import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../productCard/ProductCard";
import ProductsFilter from "./fillters/ProductsFiltter";
import { Button } from "react-bootstrap";

const Products = (props) => {
  //set useState to undefined first.
  const [fetchedData, setFetchedData] = useState();
  const [sortedData, setSortedData] = useState();
  const [visible, setVisible] = useState(20);

  const SeeMore = () => {
    setVisible(visible + 20);
  };

  const fetchData = () => {
    return new Promise(async (resolve, reject) => {
      const api = await axios.get(
        "https://e-commerce-api.belzaondrej.com/products"
      );

      setFetchedData(api.data);
      resolve(api.data);
    });
  };

  const sortLowtoHighFunc = (data) => {
    const sortLowtoHigh = data.sort((a, b) => {
      return b.price - a.price;
    });

    console.log("low to high", sortLowtoHigh);
    setSortedData(sortLowtoHigh);
  };

  const setup = async () => {
    const data = await fetchData();
    console.log("data", data);
    sortLowtoHighFunc(data);
  };
  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      <ProductsFilter setup={setup} />
      {sortedData &&
        sortedData.slice(0, visible).map((p) => <ProductCard product={p} />)}
      {fetchedData && visible < fetchedData.length && (
        <div className="seeMoreButtonContainer">
          <Button className="seeMoreButton" variant="dark" onClick={SeeMore}>
            See more
          </Button>
        </div>
      )}
    </>
  );
};
export default Products;
