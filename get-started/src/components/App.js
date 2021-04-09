//import logo from "./logo.svg";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepages";
import Registration from "../registration";
import Login from "../login";

import NavBar from "./NavBar";

function App() {
  return (
    <>
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
  );
}

export default App;
