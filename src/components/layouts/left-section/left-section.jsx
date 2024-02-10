import React from 'react';
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faSquareFacebook, faSquareXTwitter, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import Navigation from './navigation';
function LeftSection() {

  return (<div className="left-section">
    <div className="section-hero">
      <Navigation />

      <div className="hero-text-box">
        <h2 className='heading heading-primary'>
          Hello. I’m a Full Stack Web App Craftsman.
        </h2>
        <h3 className='sub-title'>
          My name’s Mortuza. I am  a passionate engineer for intuitive experiences and I craft web app using modern front end and backend technogies.
        </h3>
        <HashLink
          to="#contact"
          className="main-nav-link js-scroll-trigger"
        >
          <button className='btn btn--outline'>

            Let's Start Work Together



          </button>
        </HashLink>


      </div>
      <div className="social-media">
        <p className='social-title'>Find me Here:</p>
        <div className='social-icon'>
          <span className='icon'><FontAwesomeIcon icon={faSquareGithub} /></span>
          <span className='icon'><FontAwesomeIcon icon={faLinkedin} /></span>
          <span className='icon'><FontAwesomeIcon icon={faSquareFacebook} /></span>
          <span className='icon'><FontAwesomeIcon icon={faSquareXTwitter} /></span>
        </div>
      </div>



    </div>


  </div>)
}

export default LeftSection;