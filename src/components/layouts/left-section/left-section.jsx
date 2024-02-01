import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faSquareFacebook, faSquareXTwitter, faLinkedin, } from '@fortawesome/free-brands-svg-icons';

function LeftSection() {

  return (<div className="left-section">
    <div className="section-hero">
      <div className='section-nav'>
        <div className="nav">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <div className="menu">
            <li>
              <a href="#.co">home</a>
            </li>
            <li>
              <a href="#.co">about</a>
            </li>
            <li>
              <a href="#.co">cursos</a>
            </li>
            <li>
              <a href="#.co">blog</a>
            </li>
            <li>
              <a href="#.co">contact</a>
            </li>

          </div>
        </div>
      </div>

      <div className="hero-text-box">
        <h2 className='heading heading-primary'>
          Hello. I’m a Full Stack Web App Craftsman.
        </h2>
        <h3 className='sub-title'>
          My name’s Mortuza. I am  a passionate engineer for intuitive experiences and I craft web app using modern front end and backend technogies.
        </h3>

        <button className='btn btn--outline'>Let's Start Work Together</button>



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