import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#a" className="footer__logo">
       Rohit Jadhav
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/rohit-jadhav-845126229/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/rohitjadhav45">
          <AiOutlineGithub />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Designed By Rohit Jadhav</small>
      </div>
    </footer>
  );
};

export default Footer;
