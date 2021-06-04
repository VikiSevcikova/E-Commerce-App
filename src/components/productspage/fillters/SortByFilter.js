import React, { useState } from "react";

// props.setup()
// -> props.onSortOrderChange("price-asc" / "price-desc")

const SortByFilter = ({ order, onSortOrderChange }) => {
  // const [radio, setRadio] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="fillterContainer">
        <div className="sortByContainer">
          <input
            checked={order === "price-asc"}
            style={{ display: "inline" }}
            type="radio"
            id="priceLowtoHigh"
            onChange={(e) => {
              if (e.currentTarget.checked) {
                // ascendant / descendant

                onSortOrderChange("price-asc");
              }
            }}
          ></input>
          <label htmlFor="priceLowtoHigh">Price: Low to High</label>
        </div>
        <div className="sortByContainer">
          <input
            checked={order === "price-desc"}
            style={{ display: "inline" }}
            type="radio"
            id="priceHightoLow"
            onChange={(e) => {
              if (e.currentTarget.checked) {
                onSortOrderChange("price-desc");
              }
            }}
          ></input>
          <label htmlFor="priceHightoLow">Price: High to Low</label>
        </div>
      </div>
    </>
  );
};

export default SortByFilter;

// <div className="sortByContainer">
//           <input
//             checked={radio === "relevance"}
//             style={{ display: "inline" }}
//             type="radio"
//             id="relevance"
//             value="relevance"
//             onChange={(e) => {
//               setRadio(e.target.value);
//             }}
//           ></input>
//           <label htmlFor="relevance">Relevance</label>
//         </div>
//         <div className="sortByContainer">
//           <input
//             checked={radio === "newest"}
//             style={{ display: "inline" }}
//             type="radio"
//             id="newest"
//             value="newest"
//             onChange={(e) => {
//               setRadio(e.target.value);
//             }}
//           ></input>
//           <label htmlFor="newest">Newest</label>
//         </div>
