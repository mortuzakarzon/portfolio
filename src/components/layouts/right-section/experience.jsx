import { useState } from "react";

const experiencesData = [
  {
    position: "Front End Engineer",
    company: "Freelancer.com",
    linkname: "Freelancer.com Profile",
    period: "2020- Present",
    location: "California, United States (Remote)",
    url: "https://www.freelancer.com/u/creativeleads",
    description: "Experienced web app craftsman dedicated to transforming ideas into seamless, intuitive user experiences. With a passion for clean code and a keen eye for design, I bring efficiency and elegance to every project."
  },
  {
    position: "Web App Developer",
    company: "Oriole",
    linkname: "Company Profile",
    period: "2024-Present",
    location: "Khulna, Bangladesh",
    url: "https://www.facebook.com/OrioleNetwork/",
    description: "As a skilled software alchemist, I specialize in forging intuitive web experiences. With a fusion of precision coding and creative flair, I bring your ideas to life with seamless functionality and captivating design."
  },


];

function Experiences() {
  const [openIndex, setOpenIndex] = useState(null);


  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };



  return (
    <div className="section-experiences" id="experiences">
      <h2 className="Heading heading-secondary">&#60;Professional Experiences /&#62;</h2>
      <h3 className="heading-tertiary">FAITHFULL AND HARDWORKING.</h3>

      {experiencesData.map((experience, index) => (
        <div className="experience-item" key={index}>
          <div className="experience-heading">
            <div className="position-company">{experience.position} @ {experience.company}</div>
            <div className="experience-period">{experience.period}</div>
            <div className="expand">
              <span className="expand-button" onClick={() => handleToggle(index)}>
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
          </div>

          <div className={`experience-content ${openIndex === index ? "open fade-in" : "fade-out hide"}`}>
            <div className="location">
              <span>{experience.location} | </span>
              <span className="linkname">
                <a href={experience.url} target="_blank" rel="noopener noreferrer">
                  {experience.linkname}
                </a>
              </span>
            </div>

            <div className="description">
              <p>{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experiences;
