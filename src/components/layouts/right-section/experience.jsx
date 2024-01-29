import { useState } from "react";


const experiencesData = [
  {
    position: "Web application Developer",
    company: "Saimon Global Ltd",
    period: "2019- 2020",
    location: "Dhaka",
    website: "www.saimon.com",
    description: "Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK."

  },

]

function Experiences() {
  const [isOpen, setIsOpen] = useState(false);


  const handleToggle = (e) => {
    setIsOpen(isOpen => !isOpen);
    e.preventDefault();
  }

  return (<div className="section-experiences">
    <h2 className="Heading heading-secondary">&#60;Professional Experiences /&#62;</h2>
    <h3>RESULTS DRIVEN DESIGN AND DEVELOPEMENT.</h3>
    <div className="experience-item">
      <div className="experience-heading">
        <div className="position-company">
          Software Engineer @ Saimon Global Ltd
        </div>
        <div className="experience-period">
          2019 - Present
        </div>

        <div className="expand">
          {
            isOpen ? (<span className="expand-button" onClick={handleToggle}>-</span>) : (<span className="expand-button" onClick={handleToggle}>+</span>)
          }


        </div>
      </div>

      <div className={`experience-content ${isOpen ? "open" : "hide"}`}>
        <div className="location">
          <span>Dhaka, Bangladesh </span>
          <span> saimonglobal.com</span>
        </div>

        <div className="description">
          <p>
            Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK.
          </p>
        </div>

        <div className="skills">
          <span>Javascript</span>
        </div>
      </div>
    </div>



  </div>)

}

export default Experiences;