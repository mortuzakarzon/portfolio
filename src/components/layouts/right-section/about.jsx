import { useState, useEffect } from "react";
import ModalContent from "../modal/modal-content";

function About() {

  const [showStory, setShowStory] = useState(false);

  const handleShowStory = () => {
    setShowStory((story) => !story);

  }

  const handleDownloadPDF = () => {

    const pdfPath = "file/Profile.pdf"
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
          My Journey from Front-End to Back-End Development, AI Integration, and How My Passion for Logic, Math, and Gardening Shapes My Approach to Crafting User-Centric Technology Solutions.
        </p>
        <p className="about-text">

          A passion for math, logic puzzles, and gardening shaped my path into software engineering. Starting with front-end development, I mastered React and advanced to back-end technologies like Node and Mongo. My coding journey mirrors gardening—each line of code nurtures growth. Now, as an AI integration expert, I’m exploring the future of technology, blending nature’s harmony with the digital world. Join me as I share how these passions have driven me to continuously grow and innovate, from creating user-centric apps to diving into the evolving AI landscape.
        </p>

        <button className="btn btn--full" onClick={handleShowStory}> My whole story</button>
        <button className="btn btn--outline about-button" onClick={handleDownloadPDF}> Download CV</button>
        {showStory ? <ModalContent setShowStory={setShowStory} /> : ""}

      </div>
    </div>)
}

export default About;