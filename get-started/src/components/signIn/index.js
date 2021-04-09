import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./../signUp/style.css";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";

export default function SignIn() {
  return (
    <>
      <div className="card text-center" style={{ border: "#fffff" }}>
        <div className="card-body">
          <Card.Body>
            <Link className="signUp" to="/signup">
              Sign Up
            </Link>
            <Link className="login" to="/login">
              Log In
            </Link>
            <h5 className="text-center mt-4 mb-4 head">Welcome Back!</h5>

            <Form id="form-d">
              <Form.Group id="email">
                <span className="icon-s">
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
                  //onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  //user={user}
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
                  //onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  //user={user}
                />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label class="form-check-label" for="defaultCheck1">
                    Remember Me
                  </label>
                  <Link className="forget" to="/forgetPassword">
                    Forget Password?
                  </Link>
                </div>
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
            Don't have an account yet?
            <Link className="log" to="/signup">
              Sign up Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
