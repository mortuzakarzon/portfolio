function Contact() {

  return (
    <div className="section-contact">

      <h2 className="Heading heading-secondary">&#60;Contact /&#62;</h2>
      <h3>RESULTS DRIVEN DESIGN AND DEVELOPEMENT.</h3>
      <div className="contact">
        <div className="contact-text-box">
          <form action="#">
            <div className="contact-form">
              <div className="mobile-contact">
                <input id="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="mobile-contact">
                <input id="email" type="email" placeholder="me@example.com" required />
              </div>

              <div className="full-width">
                <textarea className="myTextarea" name="myTextarea" rows="10" defaultValue="Your message goes here." />
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}


export default Contact;