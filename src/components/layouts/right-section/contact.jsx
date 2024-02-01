import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gvmua9f', 'template_4jby6sp', form.current, 'xQV4uCGoN1J0LUvY-')
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className="section-contact">

      <h2 className="Heading heading-secondary">&#60;Contact /&#62;</h2>
      <h3 className="heading-tertiary">RESULTS DRIVEN DESIGN AND DEVELOPEMENT.</h3>
      <div className="contact">
        <div className="contact-text-box">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="contact-form">
              <div className="mobile-contact">
                <input name="user_name" type="text" placeholder="Your Name" required />
              </div>
              <div className="mobile-contact">
                <input name="user_email" type="email" placeholder="me@example.com" required />
              </div>

              <div className="full-width">
                <textarea className="myTextarea" name="message" rows="10" defaultValue="Your message goes here." />
              </div>
            </div>

            <button type="submit" className="btn btn--full" value="Send" >Send </button>
          </form>
        </div>
      </div>

    </div>
  )
}


export default Contact;