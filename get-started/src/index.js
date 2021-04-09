import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/index.css";

import "bootstrap/dist/css/bootstrap.css";

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
