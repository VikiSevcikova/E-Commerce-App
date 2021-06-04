import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SizeFilter = () => {
  const [checkedXs, setCheckedXs] = useState(false);
  const [checkedS, setCheckedS] = useState(false);
  const [checkedM, setCheckedM] = useState(false);
  const [checkedL, setCheckedL] = useState(false);
  const [checkedXl, setCheckedXl] = useState(false);

  return (
    <>
      {checkedXs ? (
        <Button
          className="sizeButton"
          variant="dark"
          onClick={() => {
            setCheckedXs(false);
          }}
        >
          XS
        </Button>
      ) : (
        <Button
          className="sizeButton sizeButtonDefault"
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
          }}
          onClick={() => {
            setCheckedXs(true);
          }}
        >
          XS
        </Button>
      )}
      {checkedS ? (
        <Button
          className="sizeButton"
          variant="dark"
          onClick={() => {
            setCheckedS(false);
          }}
        >
          S
        </Button>
      ) : (
        <Button
          className="sizeButton"
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
          }}
          onClick={() => {
            setCheckedS(true);
          }}
        >
          S
        </Button>
      )}
      {checkedM ? (
        <Button
          className="sizeButton"
          variant="dark"
          onClick={() => {
            setCheckedM(false);
          }}
        >
          M
        </Button>
      ) : (
        <Button
          className="sizeButton"
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
          }}
          onClick={() => {
            setCheckedM(true);
          }}
        >
          M
        </Button>
      )}
      {checkedL ? (
        <Button
          className="sizeButton"
          variant="dark"
          onClick={() => {
            setCheckedL(false);
          }}
        >
          L
        </Button>
      ) : (
        <Button
          className="sizeButton"
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
          }}
          onClick={() => {
            setCheckedL(true);
          }}
        >
          L
        </Button>
      )}
      {checkedXl ? (
        <Button
          className="sizeButton"
          variant="dark"
          onClick={() => {
            setCheckedXl(false);
          }}
        >
          XL
        </Button>
      ) : (
        <Button
          className="sizeButton"
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            color: "black",
          }}
          onClick={() => {
            setCheckedXl(true);
          }}
        >
          XL
        </Button>
      )}
    </>
  );
};

export default SizeFilter;
