import React from 'react'
import './about.css'
// import abd from '../../assets/'
import abd from "../../assets/about-me.jpeg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
    <h5 className="text-light">&lt; /Get to Know &gt;</h5>
    <h2>About Me</h2>
    <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={abd} alt="About "/> 
      </div>

    </div>
    <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
        <FaAward className="about__icon"/>
          <h5>Experince</h5>
          <small>&#123; 1+ Years Working&#125;</small>

        </article>
        <article className="about__card">
        <FiUsers className="about__icon"/>
          <h5>Clients</h5>
          <small>&#123; 10+ Worldwide &#125;</small>

        </article>
        <article className="about__card">
        <VscFolderLibrary className="about__icon"/>
          <h5>Projects</h5>
          <small>&#123; 20+ Completed Projects &#125;</small>

        </article>
      </div>

      <p>
      Software engineer with excellent problem solving skills and ability to perform well in a team passionate about coding and I have honed data driven decision making and attention to detailed skills while being proficient in creating interactive experiences and functional interfaces using JavaScript, React.Js, Bootstrap and HTML5/CSS3.</p>
          <a href='#contact' className="btn btn-primary"> Let's Talk  </a>
      </div>
    </div>
    </section>
  )
}

export default About