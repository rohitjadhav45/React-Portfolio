import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "FastPay",
    info: "Fastpay help people to transfer money with smart way.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "CryptoBase",
    info: "Fastpay help people to transfer money with smart way.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Developed Fiitness sports web",
    info: "Fastpay help people to transfer money with smart way.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "SpringVale Dental Clinic",
    info: "Fastpay help people to transfer money with smart way.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "University website",
    info: "Fastpay help people to transfer money with smart way.",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "This is my portfolio items",
    info: "Fastpay help people to transfer money with smart way.",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-light">&lt; /My Recent Work &gt;</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, info }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <h5>{info}</h5>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
