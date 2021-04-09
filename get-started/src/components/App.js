//import logo from "./logo.svg";
import "../App.css";
import style from "../components/NavBar/style.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepages";
import Registration from "../registration";
import Login from "../login";

import Universities from "../components/universities/Universities";
import Scholarship from "./Scholarship";
import Virtual from "./Virtual_tour";
//import WorkWithUs from "./../components/WorkWithUs";
import NavBar from "../components/NavBar/index";
//import NavBar from "./../components/WorkWithUs/NavBar";

function App() {
  return (
    <>
      {/* <div className="header-section">
        <WorkWithUs />
      </div> */}
      <div className="header-section">
        <NavBar />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/signup" component={Registration} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </>

    //import "../App.css";
    //import Footer from "./footer";
    //import { Container } from "react-bootstrap";
    //import SignUp from "./signUp";
    //import Header from "./Header";
    //import WorkWithUs from "./WorkWithUs";

    // function App() {
    //   return (
    //     <>
    //       <WorkWithUs />
    //     </>

    /*<div className="header-section">
      <Header></Header>
    </div>*/

    /* <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <SignUp />
      </div>
    </Container> 
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{marginBottom: "20px" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <SignUp />
        </div>

      </Container>
      <Container
      style={{ marginTop: "70px" }}
      >      <div>
          <Footer />
        </div>

      </Container> 
    </>*/
    //import "../App.css";
    /*import { Container } from "react-bootstrap"; */
  );
}

export default App;
