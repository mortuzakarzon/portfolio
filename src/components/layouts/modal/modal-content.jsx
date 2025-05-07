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
            <h1>🌱 My Journey into Software Engineering</h1>

            <h2>🧩 Where It All Began</h2>
            <p>When I first started learning software engineering, I was inspired by my love for math, logic puzzles, and things like the Rubik’s Cube 🧊, which I’ve enjoyed since I was a kid. I began with front-end development, diving into HTML, CSS, and JavaScript to build websites that people could see and interact with. It was like putting together the pieces of a puzzle, making sure everything looked good and worked smoothly.</p>
            <br />
            <h2>⚛️ Discovering React and Leveling Up</h2>
            <p>Then, I discovered React, and it was a game-changer 💡. React helped me build interactive user interfaces much more efficiently. I started creating websites with reusable components, which made my code cleaner and easier to manage. As I got more comfortable with React, I wanted to take it further. I learned Redux 🔁 to manage the state of my apps and explored Next.js 🚀 to build fast, server-rendered websites. I moved from a beginner to an advanced front-end developer, always learning and growing.</p>
            <br />

            <h2>🛠️ Going Deeper with the Backend</h2>
            <p>Once I felt confident in front-end development, I wanted to understand how everything worked behind the scenes. So, I started learning back-end technologies. I picked up Node.js, Express, and MongoDB 💾, which helped me build the server-side of applications and handle things like databases and APIs. It was like learning how the roots of a plant support everything above ground 🌱.</p>
            <br />
            <h2>🌼 Coding Like Gardening</h2>
            <p>In many ways, I see coding like gardening, which is another one of my hobbies 🌿. Gardening is about nurturing and creating a balanced, thriving environment—just like coding, which requires both care and attention to detail. The front-end is like planting and arranging flowers 💐, while the back-end is like enriching the soil and taking care of the roots 🌾. Each tool I use, whether in gardening or development, helps everything grow together.</p>
            <br />
            <h2>🤖 Embracing the World of AI</h2>
            <p>Lately, I’ve been diving into the world of AI 🤓. I’ve become an expert in integrating AI into applications, and now I’m learning even more about how it works. It’s a fascinating world that feels like the future of coding. I'm excited to see how AI can bring new growth and ideas 🌟. My love for puzzles, gardening, and now AI keeps me curious and creative, blending nature’s harmony with cutting-edge technology 🌐.</p>
            <br />
            <h2>Portfolio Showcase</h2>
            <p>
              My body of work speaks volumes about my dedication and proficiency in software engineering. I invite you to explore my projects on GitHub, where I demonstrate my coding prowess and commitment to excellence: <a href="https://github.com/mortuzakarzon">GitHub: mortuzakarzon</a>.
            </p>
            <br />
          </div>

        </div>

      </div >
    </div >
  );
}

export default ModalContent;