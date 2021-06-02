import React, { useState } from "react";

const SortByFilter = () => {
  const [radio, setRadio] = useState(false);

  // const sortByLowtoHigh = () => {
  //   const indexValue = pokemons.sort((a, b) =>
  //     b.id > a.id ? 1 : a.id > b.id ? -1 : 0
  //   );
  //   renderFilteredPokemons(indexValue);
  // };

  return (
    <>
      <div className="fillterContainer">
        <div className="sortByContainer">
          <input
            checked={radio === "relevance"}
            type="radio"
            id="relevance"
            value="relevance"
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          ></input>
          <label htmlFor="relevance">Relevance</label>
        </div>
        <div className="sortByContainer">
          <input
            checked={radio === "newest"}
            type="radio"
            id="newest"
            value="newest"
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          ></input>
          <label htmlFor="newest">Newest</label>
        </div>
        <div className="sortByContainer">
          <input
            checked={radio === "priceLowtoHigh"}
            type="radio"
            id="priceLowtoHigh"
            value="priceLowtoHigh"
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          ></input>
          <label htmlFor="priceLowtoHigh">Price: Low to High</label>
        </div>
        <div className="sortByContainer">
          <input
            checked={radio === "priceHightoLow"}
            type="radio"
            id="priceHightoLow"
            value="priceHightoLow"
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          ></input>
          <label htmlFor="priceHightoLow">Price: High to Low</label>
        </div>
      </div>
    </>
  );
};

export default SortByFilter;
