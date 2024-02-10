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

            Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.

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

            Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.

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

            Skilled in developing hybrid backend using Node, express, mongodb, firebase, npm, graphql.

          </div>
        </div>

      </div>



    </div>
  </div>)

}


export default Expertise;