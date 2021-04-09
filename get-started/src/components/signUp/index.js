import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.css";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";

export default function SignUp() {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    if (user.password !== user.passwordConfirm) {
      const err = ["password Don't match"];
      setUser({ errors: err });
      return;
    }
  };

  const payload = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    passwordConfirm: user.passwordConfirm,
    errors: [],
  };

  const sendPost = () => {
    axios
      .post("https://sh6-userdb.herokuapp.com/createuser.php", payload)
      .then(console.log(Response));
  };

  return (
    <>
      <div class="card text-center">
        <div class="card-body">
          <Card.Body>
            <Link className="signUp" to="/signup">
              Sign Up
            </Link>
            <Link className="login" to="/login">
              Log In
            </Link>
            <h4 className="text-center mt-4 mb-4 head">Get Started</h4>

            <Form onSubmit={sendPost} id="form-d">
              <Form.Group id="fullname">
                <span class="icon-s">
                  <svg
                    xmlns="http://www.w3.org/3000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </span>
                <Form.Control
                  id="input"
                  className="mb-4"
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  required
                  placeholder="Enter your fullname"
                  user={user}
                />
              </Form.Group>
              <Form.Group id="username">
                <span class="icon-s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </span>
                <Form.Control
                  id="input"
                  className="mb-4"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  required
                  placeholder="Enter your Username"
                  user={user}
                />
              </Form.Group>
              <Form.Group id="email">
                <span class="icon-s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                  </svg>
                </span>
                <Form.Control
                  id="input"
                  className=" mb-4"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  user={user}
                />
              </Form.Group>
              <Form.Group id="password">
                <span class="icon-s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-lock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                </span>
                <Form.Control
                  id="input"
                  className=" mb-4"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  user={user}
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <span class="icon-s">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-lock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                  </svg>
                </span>
                <Form.Control
                  id="input"
                  className=" mb-4"
                  type="password"
                  name="passwordConfirm"
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password "
                  user={user}
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{ backgroundColor: "#0A1650" }}
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
          <div className="w-100 div-log text-center ">
            Already have an account?
            <Link className="log" to="/login">
              Log In
            </Link>
          </div>
        </div>
        <div className="or">OR</div>
        <footer>
          <h6 className="foot">Continue With</h6>
          <span className="social">
            <a href="https://mail.google.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-google ba-6x"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a href="https://facebook.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-facebook ba-6x"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
          </span>
        </footer>
      </div>
    </>
  );
}
