import React, { useEffect, useState } from "react";
import "../../scss/SearchPage.scss";
import { FaTimes } from "react-icons/fa";
import ProductCard from "../productCard/ProductCard";
import { Button, Row, Container } from "react-bootstrap";
import axios from "axios";

const SearchPage = ({ search, setSearch }) => {
  const [query, setQuery] = useState();
  const [fetchedData, setFetchedData] = useState();
  const [checkSubmit, isCheckSubmit] = useState(null);
  const [visible, setVisible] = useState(20);

  const SeeMore = () => {
    setVisible(visible + 20);
  };

  const fetchProductQuery = async (name) => {
    try {
      const api = `https://e-commerce-api.belzaondrej.com/products/search?q=${name}`;
      //console.log(api);
      const fetchData = await axios.get(api);

      console.log(fetchData);
      if (fetchData.status === 404)
        throw new Error(`Invalid name.(${fetchData.status})`);

      setFetchedData(fetchData.data);
      console.log(fetchedData);
      console.log(fetchData);
      // fetchData.json().then((data) => {
      //   setFetchedOneData(data);
      //   console.log(data);

      //   // setFetchedOneData((fetchedOneData) => {
      //   //   fetchedOneData = [1, 2, 3, 4, 5];
      //   // });
      //   // localStorage.setItem("pokemonValue", JSON.stringify(data));
      //   // let pokemonValue = JSON.parse(localStorage.getItem("pokemonValue"));
      //   // const firstFunc = async function () {
      //   //   await fetchSpeciesDetail(pokemonValue);
      //   // };
      //   // const secondFunc = async function () {
      //   //   await window.open("pokemon-info.html");
      //   // };
      //   // const allFunc = async function () {
      //   //   await firstFunc();
      //   //   await secondFunc();
      //   // };
      //   // allFunc();
      // });
    } catch (err) {
      alert(`Something went wrong. ${err.message}`);
    }
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

  return (
    <>
      <div className="searchContainer">
        <div className="search">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await fetchProductQuery(query);
              //setSearch(false);
              isCheckSubmit(true);
              {
                setTimeout(() => {
                  console.log("array", fetchedData);
                }, 50);
              }
            }}
          >
            <input
              onChange={saveInputText}
              type="text"
              placeholder="Search for products"
            ></input>
          </form>
          <div
            className="closeBtn"
            onClick={() => {
              setSearch(false);
            }}
          >
            <FaTimes />
          </div>
        </div>
      </div>
      {fetchedData && isCheckSubmit && (
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
    </>
  );
};
export default SearchPage;
