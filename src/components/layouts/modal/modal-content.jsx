import React from "react";


function ModalContent({ setShowStory }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">

        <div className="titleCloseBtn">
          <button
            onClick={() => setShowStory(false)}
          >
            X
          </button>
        </div>
        <div className="full-story">
          <img className='Author' src="images/author.jpg" alt="Mortuza Karzon" />

          <div className="profile-card">
            <h1>My Journey</h1>
            <p>
              In 2012, I started my career as a freelance writer, but I felt a constant
              dissatisfaction. Upon introspection, I discovered my passion for
              mathematics and logical reasoning, leading me to become a software
              engineer.
            </p>
            <p>
              At the age of 35, I delved into software development, dedicating myself
              to continuous learning and crafting captivating user interfaces.
            </p>

            <h2 className="my-skill">My Skills</h2>

            <div className="skill-category">
              <h3>Front-End</h3>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React JS, React-Router</li>
                <li>React-Bootstrap, Tailwind, DaisyUI, Material UI</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js, Express.js</li>
                <li>JWT, dotenv</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Database</h3>
              <ul>
                <li>MongoDB, Firebase</li>
              </ul>
            </div>

            <div className="skill-category">
              <h3>Tools</h3>
              <ul>
                <li>Git, Vercel, VS Code, Netlify</li>
                <li>Figma, Photoshop, Illustrator</li>
                <li>Dev-Tools</li>
              </ul>
            </div>

            <p>
              Check out my work on GitHub:{' '}
              <a href="https://github.com/mortuzakarzon" target="_blank" rel="noopener noreferrer">
                GitHub: mortuzakarzon
              </a>
            </p>
          </div>

        </div>

      </div >
    </div >
  );
}

export default ModalContent;