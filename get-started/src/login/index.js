import React from "react";
import SignIn from "./../components/signIn/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./../components/signUp/";

const Login = (props) => {
  return (
    <>
      <Container
        className="d-flex align-items-center  justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100 mb-10" style={{ maxWidth: "400px" }}>
          <SignIn />
        </div>
      </Container>
    </>
  );
};

export default Login;
