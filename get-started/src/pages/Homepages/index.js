import React from "react";
import Header from "../../components/Header";
import MainSection1 from "../../components/MainSection1";
import MainSection2 from "../../components/MainSection2";
import Footer from "../../components/WorkWithUs/Footer";
import Landing from "../../components/Landing";
//import Landing from "./Landing";
//import Directory from "../../components/Directives/";

const Homepage = (props) => {
  return (
    <section className="directory">
      <Header />
      <MainSection1 />
      <MainSection2 />
      <Landing />
      <Footer />
    </section>
  );
};

export default Homepage;
