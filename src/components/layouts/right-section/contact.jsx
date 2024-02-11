import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isSend, setIsSend] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSend(true);
    emailjs.sendForm('service_gvmua9f', 'template_4jby6sp', form.current, 'xQV4uCGoN1J0LUvY-')
      .then((result) => {
        console.log(result);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="section-contact" id='contact'>
      <h2 className="Heading heading-secondary">&#60;Contact /&#62;</h2>
      <h3 className="heading-tertiary">LET’S TALK.
      </h3>
      <div className="contact">
        <div className="contact-text-box">
          <form ref={form} onSubmit={handleSubmit}>
            {
              isSend ? (
                <p>Your Message sent Successfully. You will get a confirmation email.</p>
              ) : (<>
                <div className="contact-form">
                  <div className="mobile-contact">
                    <input name="from_name" type="text" placeholder="Your Name" required />
                  </div>
                  <div className="mobile-contact">
                    <input name="reply_to" type="email" placeholder="me@example.com" required />
                  </div>
                  <div className="full-width">
                    <textarea className="myTextarea" name="message" rows="10" placeholder="Share your thoughts, ideas, or just say hello!" />
                  </div>

                </div>
                <button type="submit" className="btn btn--full" value="Send" >Let's Talk </button>
              </>
              )
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
