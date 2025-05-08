import React from 'react';
import { HashLink } from "react-router-hash-link";

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
          <ul>
            <li className="tooltip">
              <a href="https://github.com/mortuzakarzon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                <span className="tooltip-text">GitHub</span>
              </a>
            </li>
            <li className="tooltip">
              <a href="https://www.linkedin.com/in/mortuzakarzon/" target="_blank" rel="noopener noreferrer" >
                <i className="fab fa-linkedin"></i>
                <span className="tooltip-text">Linkedin</span>
              </a>
            </li>
            <li className="tooltip">
              <a href="https://twitter.com/KarzonMort81250" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
                <span className="tooltip-text">Twitter</span>
              </a>

            </li>
            <li className="tooltip">
              <a href="https://edabit.com/user/KrbPyz8jFE5rrzZEp" target="_blank" rel="noopener noreferrer">
                <i className="fab fas fa-brain"></i>
                <span className="tooltip-text">Edabit</span>
              </a>

            </li>
            {/* <li>
              <a href="https://edabit.com/user/KrbPyz8jFE5rrzZEp" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-book"></i>
              </a>
            </li> */}
          </ul>
        </div>

      </div>



    </div>


  </div>)
}

export default LeftSection;