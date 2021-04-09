import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";
import "./components/index.css";
import App from "./components/App";
<<<<<<< HEAD
import "./components/index.css";

import "bootstrap/dist/css/bootstrap.css";
=======
>>>>>>> 45d24045be2b49c90a867002aa90b7919a22d884

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
