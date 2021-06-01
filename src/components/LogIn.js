import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../scss/SignIn.scss";

const LogIn = (props) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleChange = (e) => {
    switch (e.target.name) {
      case "loginEmail":
        setLoginEmail(e.target.value);
        break;
      case "loginPassword":
        setLoginPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const login = (e) => {
    e.preventDefault();

    const url = "https://e-commerce-api.belzaondrej.com/users/login";

    const loginFormData = {
      email: loginEmail,
      password: loginPassword,
    };

    const params = {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: loginFormData,
      method: "POST",
    };

    fetch(url, params)
      .then((data) => {
        return data.json();
      })
      .then((res) => console.log("Logged in."))
      .catch((error) => {
        alert("Sorry, wrong password or email.");
        console.log(error);
      });
  };

  const content = (
    <>
      <form onSubmit={login}>
        <Row>
          <Col>
            <input
              className="forms"
              type="email"
              name="loginEmail"
              placeholder="Email Address"
              onChange={handleChange}
            ></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              className="forms"
              type="password"
              name="loginPassword"
              placeholder="Password"
              onChange={handleChange}
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
        <p className="forgotPw">Forgot your password?</p>
      </div>
      <div>
        <p className="or">or</p>
      </div>
      <div>
        <img
          className="googleBtn"
          src="image/btn_google_signin_dark_normal_web@2x.png"
          alt="sign-in-with-google"
        />
      </div>
    </>
  );
  return (
    <>
      <div onMouseOver={props.onMouseOver}>
        <Container>
          <div
            className={`signInWrapper ${
              props.isHovered ? "bgStyleHovered" : "bgStyle"
            }`}
          >
            {content}
          </div>
        </Container>
      </div>
    </>
  );
};

export default LogIn;
