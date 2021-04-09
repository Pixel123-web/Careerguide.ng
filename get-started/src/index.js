import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";
import "./components/universities/index.css";
import "./components/NavBar/style.css";
import App from "./components/App";

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
