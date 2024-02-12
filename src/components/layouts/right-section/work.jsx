import React, { useState, useEffect } from 'react';

const content = [
  {
    name: "BookLaunchify - Health and Fitness Book Landing React Template",
    description:
      "BookLaunchify is a meticulously crafted one-page template tailored for authors in the health and wellness book industry. This responsive HTML5 React template is your ideal choice for showcasing and selling books or eBooks related to health, fitness, and nature. In today's evolving commerce landscape, where the demand for e-books is steadily increasing, having the right platform for effective book promotion is crucial. BookLaunchify offers a sleek and modern design, ensuring a captivating user experience. "
    ,
    description2: "With its user-friendly layout, authors can highlight their work, provide detailed book information, and seamlessly integrate e-commerce functionality for direct sales. Stay ahead in the competitive book market by choosing BookLaunchify to elevate your online presence and connect with your audience. ",

    image: "booklaucify.jpg",
    url: "https://www.templatemonster.com/landing-page-templates/booklaunchify-health-and-fitness-book-landing-react-template-372940.html"
  },
  {
    name: "Oriole Movie- Dynamic React Movie Review App ",
    description:
      "Oriole Movie is a dynamic React application that seamlessly integrates with the IMDb API to provide users with a captivating movie exploration experience. Leveraging React fundamentals, I meticulously crafted this app to deliver a user-friendly interface that allows cinephiles to effortlessly browse and discover information about their favorite movies.  ",
    description2: "The application fetches real-time data from the IMDb API, ensuring that users access the most up-to-date information on movie details, ratings, and cast members. Oriole Movie stands as a testament to my proficiency in React development, showcasing my ability to harness the power of this popular JavaScript library to create engaging and responsive web applications. With a sleek design and efficient IMDb API calls, Oriole Movie offers a delightful platform for movie enthusiasts to explore and appreciate the cinematic world.",

    image: "movie.jpg",
    url: "https://oriolemovie.sproutiz.com/"
  },
  {
    name: "Omnifood - Food Delivery Landing Template",
    description:
      "Introducing Omnifood, a web page meticulously crafted with pure HTML and CSS to showcase the concept of a premium meal delivery service. With a focus on simplicity and elegance, Omnifood promises to deliver healthy and delectable meals right to your doorstep, every single day. From vibrant imagery of wholesome dishes to a user-friendly interface, Omnifood reflects my commitment to creating visually appealing and functional web pages using fundamental web technologies. This project not only underscores my proficiency in HTML and CSS but also highlights my dedication to delivering aesthetically pleasing and user-centric digital experiences.",
    description2: "From vibrant imagery of wholesome dishes to a user-friendly interface, Omnifood reflects my commitment to creating visually appealing and functional web pages using fundamental web technologies. This project not only underscores my proficiency in HTML and CSS but also highlights my dedication to delivering aesthetically pleasing and user-centric digital experiences.",

    image: "omnifood.jpg",
    url: "https://foodapp.sproutiz.com/"
  },



];


function WorkApp() {


  return (<div className="section-work" id='work'>
    <div className="work">
      <h2 className="Heading heading-secondary">&#60;Work /&#62;</h2>
      <h3 className='heading-tertiary'>RECENT PROJECTS.</h3>

      <WorkArea />


    </div>
  </div >)
}

export default WorkApp;


function WorkArea() {

  const [activeTab, setActiveTab] = useState(0)

  return (<div className='work-area'>

    <div className='work-tabs'>
      <Work num={0} activeTab={activeTab} onSetTab={setActiveTab} />
      <Work num={1} activeTab={activeTab} onSetTab={setActiveTab} />
      <Work num={2} activeTab={activeTab} onSetTab={setActiveTab} />
    </div>


    <WorkContent item={content.at(activeTab)} key={content.at(activeTab).summary} activeTab={activeTab} />



  </div>);
}



function Work({ num, activeTab, onSetTab }) {
  return (
    <button
      className={`${activeTab === num ? "tab active" : "tab"}`}
      onClick={() => onSetTab(num)}
    >
      Project {num + 1}
    </button>
  );
}

function WorkContent({ item, activeTab }) {

  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);

  useEffect(() => {
    console.log("Active tab changed:", activeTab);
    setIsTransitionEnabled(true);

    // Disable transition after animation completes
    const timeout = setTimeout(() => {
      setIsTransitionEnabled(false);
    }, 500); // Adjust the timeout value to match your animation duration

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (<div className={`work-content ${isTransitionEnabled ? 'fade-in' : ''}`}>


    <div className="work-item">
      <div className="work-text">
        <h3 className="heading work-heading">{item.name}</h3>
        <div className="work-image-res">
          <div>
            <a href={item.url} target="_blank" rel="noopener noreferrer">       <img alt="hero" src={`images/${item.image} `} /></a>

          </div>
        </div>
        <p className="work-description">{item.description}</p>

        <p className="work-description work-description2">{item.description2}</p>
        <a className='demo-button' href={item.url} target="_blank" rel="noopener noreferrer">View Demo</a>
      </div>

      <div className="work-image">
        <div>
          <a href={item.url} target="_blank" rel="noopener noreferrer">       <img alt="hero" src={`images/${item.image} `} /></a>

        </div>
      </div>

    </div>

  </div >)
}