import React, { useState } from "react";

const ColorFilter = () => {
  const [checkedRed, setCheckedRed] = useState(false);
  const [checkedBlue, setCheckedBlue] = useState(false);
  const [checkedYellow, setCheckedYellow] = useState(false);
  const [checkedBlack, setCheckedBlack] = useState(false);
  const [checkedWhite, setCheckedWhite] = useState(false);
  const [checkedGreen, setCheckedGreen] = useState(false);
  const [checkedPurple, setCheckedPurple] = useState(false);

  return (
    <>
      <div className="fillterContainer">
        {checkedRed ? (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="red"
              id="red"
              onClick={() => {
                setCheckedRed(false);
              }}
            ></input>
            <label className="checkbox checkboxRed" htmlFor="red">
              Red
            </label>
          </div>
        ) : (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="red"
              id="red"
              onClick={() => {
                setCheckedRed(true);
              }}
            ></input>
            <label className="checkbox checkboxRed" htmlFor="red">
              Red
            </label>
          </div>
        )}
        {checkedBlue ? (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="blue"
              id="blue"
              onClick={() => {
                setCheckedBlue(false);
              }}
            ></input>
            <label className="checkbox checkboxBlue" htmlFor="blue">
              Blue
            </label>
          </div>
        ) : (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="blue"
              id="blue"
              onClick={() => {
                setCheckedBlue(true);
              }}
            ></input>
            <label className="checkbox checkboxBlue" htmlFor="blue">
              Blue
            </label>
          </div>
        )}
        {checkedYellow ? (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="yellow"
              id="yellow"
              onClick={() => {
                setCheckedYellow(false);
              }}
            ></input>
            <label className="checkbox checkboxYellow" htmlFor="yellow">
              Yellow
            </label>
          </div>
        ) : (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="yellow"
              id="yellow"
              onClick={() => {
                setCheckedYellow(true);
              }}
            ></input>
            <label className="checkbox checkboxYellow" htmlFor="yellow">
              Yellow
            </label>
          </div>
        )}
        {checkedBlack ? (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="black"
              id="black"
              onClick={() => {
                setCheckedBlack(false);
              }}
            ></input>
            <label className="checkbox checkboxBlack" htmlFor="black">
              Black
            </label>
          </div>
        ) : (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="black"
              id="black"
              onClick={() => {
                setCheckedBlack(true);
              }}
            ></input>
            <label className="checkbox checkboxBlack" htmlFor="black">
              Black
            </label>
          </div>
        )}
        {checkedWhite ? (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="white"
              id="white"
              onClick={() => {
                setCheckedWhite(false);
              }}
            ></input>
            <label className="checkbox checkboxWhite" htmlFor="white">
              White
            </label>
          </div>
        ) : (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="white"
              id="white"
              onClick={() => {
                setCheckedWhite(true);
              }}
            ></input>
            <label className="checkbox checkboxWhite" htmlFor="white">
              White
            </label>
          </div>
        )}
        {checkedGreen ? (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="green"
              id="green"
              onClick={() => {
                setCheckedGreen(false);
              }}
            ></input>
            <label className="checkbox checkboxGreen" htmlFor="green">
              Green
            </label>
          </div>
        ) : (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="green"
              id="green"
              onClick={() => {
                setCheckedGreen(true);
              }}
            ></input>
            <label className="checkbox checkboxGreen" htmlFor="green">
              Green
            </label>
          </div>
        )}
        {checkedPurple ? (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="purple"
              id="purple"
              onClick={() => {
                setCheckedPurple(false);
              }}
            ></input>
            <label className="checkbox checkboxPurple" htmlFor="purple">
              Purple
            </label>
          </div>
        ) : (
          <div className="sizeButton">
            <input
              type="checkbox"
              name="purple"
              id="purple"
              onClick={() => {
                setCheckedPurple(true);
              }}
            ></input>
            <label className="checkbox checkboxPurple" htmlFor="purple">
              Purple
            </label>
          </div>
        )}
      </div>
    </>
  );
};

export default ColorFilter;
