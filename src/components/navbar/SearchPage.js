import React, { useEffect, useState, useCallback } from "react";
import "../../scss/SearchPage.scss";
import { FaTimes } from "react-icons/fa";
import ProductCard from "../productCard/ProductCard";
import { Button, Row, Container } from "react-bootstrap";
import axios from "axios";
import _ from "lodash";

const SearchPage = ({ search, setSearch }) => {
  const [query, setQuery] = useState();
  const [fetchedData, setFetchedData] = useState();
  const [checkSubmit, isCheckSubmit] = useState(null);
  const [visible, setVisible] = useState(20);
  const [word, setWord] = useState();

  useEffect(() => {
    console.log("fetched data changed", fetchedData);
  }, [fetchedData]);

  const SeeMore = () => {
    setVisible(visible + 20);
  };

  const fetchProductQuery = async (name) => {
    try {
      const api = `https://e-commerce-api.belzaondrej.com/products/search?q=${name}`;

      const fetchData = await axios.get(api);

      if (fetchData.status === 404)
        throw new Error(`Invalid name.(${fetchData.status})`);

      setFetchedData(fetchData.data);
    } catch (err) {
      alert(`Something went wrong. ${err.message}`);
    }
  };

  // const handleChange = (e) => {
  //   setCategory(e.target.value);
  //   setWord("");
  //   //setMeanings([]);
  // };

  const deb = useCallback(
    _.debounce((text) => fetchProductQuery(text), 1000),
    []
  );

  const handleText = (text) => {
    deb(text);
  };

  // if (search === true) {
  //   document.body.style.backgroundColor = "green";
  // } else if (search === false) {
  //   console.log(search);
  //   document.body.style.backgroundColor = "white";
  // }

  // const searchProduct = (e) => {
  //   console.log(e.target.value);
  //   //form.addEventListener("submit", (e) => {
  //   //localStorage.clear();
  //   e.preventDefault();
  //   // fetchOneProduct(input.value.toLowerCase());
  //   // });
  // };
  // searchProduct();

  const saveInputText = (e) => {
    setQuery(() => e.target.value);
  };

  const sample = () => {
    console.log("hi");
  };

  return (
    <>
      <div className="searchContainer">
        <div className="search">
          <form>
            <input
              onChange={(e) => {
                //handleChange(e);
                handleText(e.target.value);
              }}
              type="text"
              placeholder="Search for products"
            ></input>
          </form>
          {/* {fetchedData && <>{fetchedData.map((p) => p.name)}</>} */}
          <div
            className="closeBtn"
            onClick={() => {
              setSearch(false);
            }}
          >
            <FaTimes />
          </div>
        </div>
        {fetchedData && (
          <div>
            <Container>
              <Row>
                {fetchedData.slice(0, visible).map((p, i) => (
                  <ProductCard product={p} key={i} />
                ))}
              </Row>
            </Container>
            {visible < fetchedData.length && (
              <div className="seeMoreButtonContainer">
                <Button
                  className="seeMoreButton"
                  variant="dark"
                  onClick={SeeMore}
                >
                  See more
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default SearchPage;
