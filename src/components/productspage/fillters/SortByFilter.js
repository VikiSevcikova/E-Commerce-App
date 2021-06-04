import React, { useState } from "react";

const SortByFilter = (props) => {
  const [radio, setRadio] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="fillterContainer">
        <div className="sortByContainer">
          <input
            checked={radio === "priceLowtoHigh"}
            style={{ display: "inline" }}
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
            style={{ display: "inline" }}
            type="radio"
            id="priceHightoLow"
            value="priceHightoLow"
            onChange={(e) => {
              setRadio(e.target.value);
            }}
            onClick={() => {
              props.setup();
              setIsClicked(true);
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
