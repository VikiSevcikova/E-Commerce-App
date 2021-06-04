import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../productCard/ProductCard";
import ProductsFilter from "./fillters/ProductsFiltter";
import { Button, Row, Container } from "react-bootstrap";

const Products = (props) => {
  //set useState to undefined first.
  const [fetchedData, setFetchedData] = useState();
  const [sortedData, setSortedData] = useState();
  const [visible, setVisible] = useState(20);

  // "price-asc", "price-desc" or null
  // null -> original order
  const [productOrder, setProductOrder] = useState(null);

  const SeeMore = () => {
    setVisible(visible + 20);
  };

  useEffect(() => {
    axios.get("https://e-commerce-api.belzaondrej.com/products").then((api) => {
      setFetchedData(api.data);
      setSortedData(api.data);
    });
  }, []);

  useEffect(() => {
    if (Array.isArray(fetchedData)) {
      const sorted = [...fetchedData];

      switch (productOrder) {
        case "price-asc":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          sorted.sort((a, b) => b.price - a.price);
          break;
      }
      setSortedData(sorted);
    }
  }, [fetchedData, productOrder]);

  return (
    <>
      <ProductsFilter
        order={productOrder}
        onSortOrderChange={(order) => {
          // "price-asc" or "price-desc"
          setProductOrder(order);
        }}
      />

      <Container>
        <Row>
          {sortedData &&
            sortedData
              .slice(0, visible)
              .map((p, i) => <ProductCard product={p} key={i} />)}
        </Row>
      </Container>

      {sortedData && visible < sortedData.length && (
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
