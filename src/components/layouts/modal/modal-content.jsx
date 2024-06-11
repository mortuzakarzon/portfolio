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
            <h2>About Me</h2>
            <p>
              In 2012, I embarked on my professional journey as a freelance writer, but despite my initial enthusiasm, I soon found myself grappling with a persistent sense of dissatisfaction. It wasn't until I engaged in deep introspection that I unearthed a profound passion for mathematics and logical reasoning, setting the stage for a transformative career shift into software engineering.
            </p>
            <br />

            <h2>My Journey into Software Engineering</h2>
            <p>
              At the age of 35, fueled by this newfound passion, I immersed myself in the world of software development. With unwavering dedication, I embarked on a journey of continuous learning, honing my skills and expertise to craft captivating user interfaces that seamlessly blend functionality with aesthetic appeal.
            </p>
            <br />
            <h2>Skills Overview</h2>
            <h3>Front-End Expertise:</h3>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React JS, React-Router</li>
              <li>React-Bootstrap, Tailwind, DaisyUI, Material UI</li>
            </ul>
            <br />
            <h3>Backend Proficiency:</h3>
            <ul>
              <li>Node.js, Express.js</li>
              <li>JWT (JSON Web Tokens), dotenv</li>
            </ul>
            <br />
            <h3>Database Mastery:</h3>
            <ul>
              <li>MongoDB, Firebase</li>
            </ul>
            <br />
            <h3>Toolset Utilization:</h3>
            <ul>
              <li>Git, Vercel, VS Code, Netlify</li>
            </ul>
            <br />
            <h3>Design Skills:</h3>
            <ul>
              <li>Figma, Photoshop, Illustrator</li>
            </ul>
            <br />
            <h2>Continuous Improvement</h2>
            <p>
              Committed to staying abreast of emerging technologies and industry best practices, I actively engage in ongoing professional development, attending workshops, participating in online courses, and contributing to open-source projects.
            </p>
            <br />
            <h2>Portfolio Showcase</h2>
            <p>
              My body of work speaks volumes about my dedication and proficiency in software engineering. I invite you to explore my projects on GitHub, where I demonstrate my coding prowess and commitment to excellence: <a href="https://github.com/mortuzakarzon">GitHub: mortuzakarzon</a>.
            </p>
            <br />
            <p>
              In essence, my journey from freelance writing to software engineering embodies the power of self-discovery and the pursuit of one's true passions. With a robust skill set, an insatiable thirst for knowledge, and a penchant for creativity, I am poised to tackle any challenge and drive meaningful innovation in the ever-evolving landscape of technology.
            </p>
          </div>

        </div>

      </div >
    </div >
  );
}

export default ModalContent;