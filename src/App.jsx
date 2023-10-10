import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
// import Sample from "./components/samplecomponent/Sample";
// import FetchingData from "./components/samplecomponent/FetchingData";
// import PostData from "./components/samplecomponent/PostData";
// import EmployeeCard from "./components/samplecomponent/EmployeeCard";
// import Node from "./components/samplecomponent/Node";
// import Interview from "./Interview/Interview";
/// import Looping from "./components/samplecomponent/Looping";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
