import { useState } from "react";

const experiencesData = [
  {
    position: "Web App Craftsman",
    company: "Upwork",
    period: "2023- Present",
    location: "California, United States (Remote) |",
    website: "www.upwork.com",
    description: "Experienced web app craftsman dedicated to transforming ideas into seamless, intuitive user experiences. With a passion for clean code and a keen eye for design, I bring efficiency and elegance to every project."
  },
  {
    position: "Software Alchemist",
    company: "Oriole",
    period: "2024-Present",
    location: "Khulna, Bangladesh",
    website: "www.oriolekhulna.com",
    description: "As a skilled software alchemist, I specialize in forging intuitive web experiences. With a fusion of precision coding and creative flair, I bring your ideas to life with seamless functionality and captivating design."
  },

  {
    position: "Front end developer",
    company: "Freelancer.com",
    period: "2022- 2023",
    location: "Sydney, Australia(Remote) |",
    website: "www.freelancer.com",
    description: "Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK."
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
      <h3 className="heading-tertiary">RESULTS DRIVEN DESIGN AND DEVELOPMENT.</h3>

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

          <div className={`experience-content ${openIndex === index ? "open" : "hide"}`}>
            <div className="location">
              <span>{experience.location} </span>
              <span> {experience.website}</span>
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
