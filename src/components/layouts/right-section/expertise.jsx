import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUncharted, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';


function Expertise() {

  return (<div className="section-expertise" id="expertise">
    <h2 className="Heading heading-secondary">&#60;My Expertise /&#62;</h2>
    <h3 className="heading-tertiary">RESULTS DRIVEN DESIGN AND DEVELOPEMENT.</h3>

    <div className="expertise-items">
      <div className="expertise-item">
        <div className="item-title">
          <span className='icon software-icon'><FontAwesomeIcon icon={faUncharted} /></span>
          <h3 className='heading skill-heading'>Software Development</h3>
        </div>

        <div className="item-description">
          <div className='description-text'>

            Proficient in functional and OOP, specializing in JavaScript and TypeScript.

          </div>
        </div>

      </div>


      <div className="expertise-item">
        <div className="item-title">
          <span className='icon software-icon'><FontAwesomeIcon icon={faReact} /></span>
          <h3 className='heading skill-heading'>Frontend Dev(REACT)</h3>
        </div>

        <div className="item-description">
          <div className='description-text'>

            Passionate about UI/UX, with 4+ years in HTML, CSS, JS, React, Redux, next.

          </div>
        </div>

      </div>
      <div className="expertise-item">
        <div className="item-title">
          <span className='icon software-icon'><FontAwesomeIcon icon={faNodeJs} /></span>
          <h3 className='heading skill-heading'>Backend Dev(NODE)</h3>
        </div>

        <div className="item-description">
          <div className='description-text'>

            Skilled in Node, Express, MongoDB, Firebase, superbase, npm, and GraphQL.

          </div>
        </div>

      </div>



    </div>
  </div>)

}


export default Expertise;