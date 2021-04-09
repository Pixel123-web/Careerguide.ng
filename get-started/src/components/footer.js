import React, { useState } from "react";
import loginImg from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "MDB-react";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>The url of the page goes here.</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Link 1</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <i class="fa fa-copyright" aria-hidden="true">
            2021-2025 Youths and Career
          </i>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
