import { useState, useEffect } from "react";
import ModalContent from "../modal/modal-content";

function About() {

  const [showStory, setShowStory] = useState(false);

  const handleShowStory = () => {
    setShowStory((story) => !story);

  }

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
          I enjoy working closely with design teams to faithfully translate their designs right down to the last pixel. Daily, you'll find me using modern frontend technologies that bring the creative process to life just as designers intended them to be. You'll find me primarily
          using React, GraphQL, Netflify, and in general anything related to JavaScript, HTML and CSS.
        </p>
        <p className="about-text">
          Gardening has been my cherished hobby since childhood, adding a touch of nature's creativity to my life as a front-end React developer. Tending to plants taught me patience, and now I apply that same care to crafting seamless user interfaces. In the world of coding and cultivation, I find a harmonious balance between the organic and the digital.
        </p>

        <button className="btn btn--full about-button" onClick={handleShowStory}> My whole story</button>

        {showStory ? <ModalContent setShowStory={setShowStory} /> : ""}

      </div>
    </div>)
}

export default About;