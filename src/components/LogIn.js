import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../scss/SignIn.scss";

const LogIn = (props) => {
  const content = (
    <>
      <form>
        <Row>
          <Col>
            <input
              className="forms"
              type="text"
              placeholder="Email Address"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              className="forms"
              type="Password"
              placeholder="Password"
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="forms" variant="dark" type="submit">
              LOG IN
            </Button>
          </Col>
        </Row>
      </form>
      <div>
        <p className="forgotPW">Forgot your password?</p>
      </div>
      <div>
        <p className="or">or</p>
      </div>
      <div>
        <img
          className="google-btn"
          src="image/btn_google_signin_dark_normal_web@2x.png"
          alt="sign-in-with-google"
        />
      </div>
    </>
  );
  return (
    <>
      <div className="mouseover" onMouseOver={props.onMouseOver}>
        <Container>
          <div
            className={`SignIn-wrapper ${
              props.isHovered ? "bgStyleHovered" : "bgStyle"
            }`}
          >
            {content}
          </div>
        </Container>
      </div>
      ;
    </>
  );
};

export default LogIn;
