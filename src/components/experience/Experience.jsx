import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="text-light">&lt; /What Skills I Have &gt;</h5>
      <h2>My Expeerience</h2>
      <div className="container experience__container">
        <div className="ecperience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>HTML5</h4>
            <small className='text-light'> Experience</small>
           </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS3</h4>
            <small className='text-light'> Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScripst</h4>
            <small className='text-light'> Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Bootstrap 5</h4>
            <small className='text-light'> Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS 3</h4>
            <small className='text-light'> Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React JS</h4>
            <small className='text-light'> Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Redux</h4>
            <small className='text-light'> Experience</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Redux Tolkit</h4>
            <small className='text-light'> Intermediate</small>
            </div>
            </article>
          </div>

        </div>

{/*  END OF FRONTEND */}

        <div className="ecperience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'> Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Next JS</h4>
            <small className='text-light'> Beginner</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>SQL</h4>
            <small className='text-light'> Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Mongo DB</h4>
            <small className='text-light'> Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Tailwind CSS</h4>
            <small className='text-light'> Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Azure</h4>
            <small className='text-light'> Beginner</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Solidity</h4>
            <small className='text-light'> Intermediate</small>
            </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Next JS</h4>
            <small className='text-light'> Intermediate</small>
            </div>
            </article>
          </div>

        
          </div>
      </div>
      </section>
  )
}

export default Experience