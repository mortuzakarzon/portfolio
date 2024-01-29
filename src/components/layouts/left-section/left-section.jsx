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
          Hello. I’m a freelance Front-end Developer.
        </h2>
        <h3 className='heading-tertiary '>
          My name is Mortuza Karzon. I enjoy working closely with design teams to faithfully translate
          their designs right down to the last pixel. Daily, you'll find me
          using modern frontend technologies.  Technical Right now you can find me hacking away primarily with React, GraphQL, Netflify, React and in general anything JavaScript, HTML and CSS related.
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