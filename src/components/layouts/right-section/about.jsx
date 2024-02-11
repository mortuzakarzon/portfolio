import { useState, useEffect } from "react";
import ModalContent from "../modal/modal-content";

function About() {

  const [showStory, setShowStory] = useState(false);

  const handleShowStory = () => {
    setShowStory((story) => !story);

  }

  const handleDownloadPDF = () => {

    const pdfPath = "file/cv.pdf"
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Mortuza Kazon(CV)).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        handleShowStory();
      }
    };

    // Add event listener for the 'keydown' event
    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts



  return (
    <div className="section-about" id="about">
      <div className="about">
        <h2 className="Heading heading-secondary">&#60;About /&#62;</h2>
        <h3 className="heading-tertiary">INSPIRED BY DIFFERENCE.</h3>
        <p className="about-bio">
          Starting as a freelance writer in 2012, I transitioned to software engineering, fueled by a newfound love for mathematics and logic. With a focus on captivating user interfaces, I master frontend technologies like React, React-Bootstrap, and Tailwind. Proficient in Node.js and MongoDB for backend development, I thrive in collaborative environments, faithfully translating designs using modern tools like Figma.
        </p>
        <p className="about-text">

          Gardening has been my cherished hobby since childhood, adding a touch of nature's creativity to my life as a web application developer. Much like how I meticulously design and adorn my garden, infusing it with beauty and functionality, I approach front-end development with the same attention to detail. Just as I select the right plants and ornaments to enhance the garden's appeal, in backend development using Node.js, MongoDB, and Express.js, I nurture the soil, ensuring it's fertile for growth, while carefully watering and providing essential nutrition to optimize plant health. Both endeavors require precision and care to achieve flourishing results.
        </p>

        <button className="btn btn--full about-button" onClick={handleShowStory}> My whole story</button>
        <button className="btn btn--outline about-button" onClick={handleDownloadPDF}> Download CV</button>
        {showStory ? <ModalContent setShowStory={setShowStory} /> : ""}

      </div>
    </div>)
}

export default About;