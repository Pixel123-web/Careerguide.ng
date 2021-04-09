import React from "react";
import Header from "../../components/Header";
import MainSection1 from "../../components/MainSection1";
import MainSection2 from "../../components/MainSection2";
//import Landing from "./Landing";
//import Directory from "../../components/Directives/";

const Homepage = (props) => {
  return (
    <section className="directory">
      <Header />
      <MainSection1 />
      <MainSection2 />
    </section>
  );
};

export default Homepage;
