import React from "react";

// -> props.onSortOrderChange("price-asc" / "price-desc")

const SortByFilter = ({ order, onSortOrderChange }) => {
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
