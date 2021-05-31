import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import LogInAccountContainer from "../components/LogInAccountContainer";
import LogIn from "../components/LogIn";
import CreateAccount from "../components/CreateAccount";

import "../scss/SignIn.scss";

function SignInPage() {
  const [isLogInHovered, setLogInHovered] = useState(true);
  const [isSignUpHovered, setSignUpHovered] = useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <LogInAccountContainer />
        </Col>
      </Row>
      <Row>
        <Col>
          <LogIn
            isHovered={isLogInHovered}
            onMouseOver={() => {
              setLogInHovered(true);
              setSignUpHovered(false);
            }}
          />
        </Col>
        <Col>
          <CreateAccount
            isHovered={isSignUpHovered}
            onMouseOver={() => {
              setLogInHovered(false);
              setSignUpHovered(true);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SignInPage;
