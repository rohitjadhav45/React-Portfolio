import React from 'react'   
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const  form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_423vpeh', 'template_0504dyv', form.current, '6O3Ed8z-ST0IXxIK4')
    e.target.reset()
    
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  function navigateToWhatsApp() {
    var phoneNumber = '9022609521';
    var message = 'Hello, how can I help you?';
    
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(phoneNumber) + '&text=' + encodeURIComponent(message);
    
    window.open(whatsappUrl, '_blank');
  }
  return (
    <section id="contact">
      <h5 className="text-light">&lt; /Get In Touch &gt;</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>jadhavrp4510@gmail.com</h5>
        <a href='mailto:jadhavrp4510@gmail.com' target="_blank" rel='noreferrer'>Send a messsage</a>
        </article>
        <article className="contact__option">
          <BsLinkedin className='contact__option-icon'/>
        <h4>LinkedIn</h4>
        {/* <h5>kartik97gaikwad@gmail.com</h5> */}
        <a href='https://www.linkedin.com/in/rohit-jadhav-845126229/' target="_blank" rel='noreferrer'>Send a messsage</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+91-9022609521</h5>
        <a href='#' onClick={navigateToWhatsApp} target="_blank" rel='noreferrer'>Send a messsage</a>
        
        </article>
        </div>

        {/*********END OF CONTACTOPTIONS***** */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your email' required/>
          <textarea name="message"  rows="7" placeholder='Your email' required></textarea>
          <button type='submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact