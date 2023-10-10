import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
// eslint-disable-next-line no-lone-blocks
{
  /*import aaa from "../../assets/aaa.png"; */
}

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">&lt; /I'm Developer &gt;</h5>
        <h1>Rohit Jadhav!</h1>

        <h5 className="text-light-text">&#123; React Js Developer &#125;</h5>

        <CTA />
        <p className="welcometext">
          " Welcome to my portfolio! I am digital-craftsman and a coder who
          creates things with languages I have immense interest in coding and
          creating responsive web applications, please check out my recent
          projects and skill-set to know me better.."
        </p>
        <HeaderSocials />

        <div className="mee">{/*<img src={aaa} alt="mee" />*/}</div>

        <a href="#contact" className="scroll__down">
          Scroll Down -&gt;
        </a>
      </div>
    </header>
  );
};

export default Header;
