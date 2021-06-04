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
    // nanika wo suru
    // sort

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

    // -----

    // //新しい配列を作成
    // const copied = [...fetchedData];
    // //参照しているだけ。
    // const referred = fetchedData;

    // const foo = [1, 2, 3];
    // const bar = foo;

    // foo.push(4);

    // foo // => [1,2,3,4]
    // bar // => [1,2,3,4]

    // const foo = [1,2,3];
    // const bar = [...foo];

    // foo.push(4);

    // foo  // [1,2,3,4]
    // bar  // [1,2,3]
  }, [fetchedData, productOrder]);

  // const sortLowtoHighFunc = (data) => {
  //   const sortLowtoHigh = data.sort((a, b) => {
  //     return b.price - a.price;
  //   });

  //   console.log("low to high", sortLowtoHigh);
  //   setSortedData(sortLowtoHigh);
  // };

  // const setup = async () => {
  //   const data = await fetchData();
  //   console.log("data", data);
  //   sortLowtoHighFunc(data);
  // };
  // useEffect(() => {
  //   setup();
  // }, []);

  console.log(sortedData);

  return (
    <>
      <ProductsFilter
        order={productOrder}
        onSortOrderChange={(order) => {
          console.log(order); // "price-asc" or "price-desc"

          setProductOrder(order);
        }}
      />

      <Container>
        <Row>
          {sortedData &&
            sortedData
              .slice(0, visible)
              .map((p) => <ProductCard product={p} />)}
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
