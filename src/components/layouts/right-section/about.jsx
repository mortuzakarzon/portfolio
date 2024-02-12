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
          I transitioned from freelance writing to software engineering at 35, fueled by a passion for mathematics. Proficient in front-end and back-end technologies, I craft user-centric interfaces and continuously improve through learning and contributing to open-source projects.
        </p>
        <p className="about-text">

          Just as I cultivate my garden with planters, lights, and trellises, I build digital gardens using HTML, CSS, and React. Each line of code is a carefully placed element, crafting vibrant user interfaces. But like nourishing roots, the backend thrives on Node, Express, and Mongo, ensuring smooth operation. Every tool, from pruners to servers, serves a purpose, just like my compost feeds new growth in both garden and code. My passion for gardening fuels my creativity, translating nature's harmony into the digital world.
        </p>

        <button className="btn btn--full" onClick={handleShowStory}> My whole story</button>
        <button className="btn btn--outline about-button" onClick={handleDownloadPDF}> Download CV</button>
        {showStory ? <ModalContent setShowStory={setShowStory} /> : ""}

      </div>
    </div>)
}

export default About;