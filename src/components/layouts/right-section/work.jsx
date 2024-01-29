import React, { useState } from 'react';
function Work() {

  const slides = ["images/pricing.jpg", "images/hero.jpg"];


  const [slideIndex, setSlideIndex] = useState(1);


  const plusDivs = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      return newIndex > 2 ? 1 : newIndex < 1 ? 2 : newIndex;
    });
  };
  return (<div className="section-work">
    <div className="work">
      <h2 className="Heading heading-secondary">&#60;Work /&#62;</h2>
      <h3>RECENT PROJECTS.</h3>

      <div className="work-item">
        <div className="work-text">
          <h3 className="heading work-heading">BookLaunchify - Health and Fitness Book Landing React Template</h3>
          <p className="work-description">BookLaunchify is a meticulously crafted one-page template designed specifically for authors in the health and wellness book industry. This responsive HTML5 Bootstrap React template is your ideal choice for showcasing and selling your books or eBooks related to health, fitness, and nature. In today's evolving commerce landscape, where the demand for e-books is steadily increasing, it is crucial to have the right platform for effective book promotion.</p>

          <p className="work-description">BookLaunchify is a meticulously crafted one-page template designed specifically for authors in the health and wellness book industry. This responsive HTML5 Bootstrap React template is your ideal choice for showcasing and selling your books or eBooks related to health, fitness, and nature. In today's evolving commerce landscape, where the demand for e-books is steadily increasing, it is crucial to have the right platform for effective book promotion.</p>

          <a className='btn btn--outline' href='https://www.templatemonster.com/landing-page-templates/booklaunchify-health-and-fitness-book-landing-react-template-372940.html'>View Demo</a>
        </div>

        <div className="work-image">
          {
            slides.map((slide, index) => (
              <div key={index} className={`work-slides ${index + 1 === slideIndex ? "visible" : "hide"}`}>
                <a href="https://www.templatemonster.com/landing-page-templates/booklaunchify-health-and-fitness-book-landing-react-template-372940.html" target="_blank" rel="noopener noreferrer">
                  <img alt={slide} src={slide} />
                </a>
              </div>
            ))
          }


          <button className="arrow-button arrow-left" onClick={() => plusDivs(-1)}>&#10094;</button>
          <button className="arrow-button arrow-right" onClick={() => plusDivs(1)}>&#10095;</button>
        </div>


      </div>

      <div className="work-item">
        <div className="work-image">
          {
            slides.map((slide, index) => (
              <div key={index} className={`work-slides ${index + 1 === slideIndex ? "visible" : "hide"}`}>
                <a href="https://www.templatemonster.com/landing-page-templates/booklaunchify-health-and-fitness-book-landing-react-template-372940.html" target="_blank" rel="noopener noreferrer">
                  <img alt={slide} src={slide} />
                </a>
              </div>
            ))
          }


          <button className="arrow-button arrow-left" onClick={() => plusDivs(-1)}>&#10094;</button>
          <button className="arrow-button arrow-right" onClick={() => plusDivs(1)}>&#10095;</button>
        </div>
        <div className="work-text">
          <h3 className="heading work-heading">BookLaunchify - Health and Fitness Book Landing React Template</h3>
          <p className="work-description">BookLaunchify is a meticulously crafted one-page template designed specifically for authors in the health and wellness book industry. This responsive HTML5 Bootstrap React template is your ideal choice for showcasing and selling your books or eBooks related to health, fitness, and nature. In today's evolving commerce landscape, where the demand for e-books is steadily increasing, it is crucial to have the right platform for effective book promotion.</p>

          <p className="work-description">BookLaunchify is a meticulously crafted one-page template designed specifically for authors in the health and wellness book industry. This responsive HTML5 Bootstrap React template is your ideal choice for showcasing and selling your books or eBooks related to health, fitness, and nature. In today's evolving commerce landscape, where the demand for e-books is steadily increasing, it is crucial to have the right platform for effective book promotion.</p>

          <a className='btn btn--outline' href='https://www.templatemonster.com/landing-page-templates/booklaunchify-health-and-fitness-book-landing-react-template-372940.html'>View Demo</a>
        </div>




      </div>

      <div className="work-item">
        <div className="work-text">
          <h3 className="heading work-heading">BookLaunchify - Health and Fitness Book Landing React Template</h3>
          <p className="work-description">BookLaunchify is a meticulously crafted one-page template designed specifically for authors in the health and wellness book industry. This responsive HTML5 Bootstrap React template is your ideal choice for showcasing and selling your books or eBooks related to health, fitness, and nature. In today's evolving commerce landscape, where the demand for e-books is steadily increasing, it is crucial to have the right platform for effective book promotion.</p>

          <p className="work-description">BookLaunchify is a meticulously crafted one-page template designed specifically for authors in the health and wellness book industry. This responsive HTML5 Bootstrap React template is your ideal choice for showcasing and selling your books or eBooks related to health, fitness, and nature. In today's evolving commerce landscape, where the demand for e-books is steadily increasing, it is crucial to have the right platform for effective book promotion.</p>

          <a className='btn btn--outline' href='https://www.templatemonster.com/landing-page-templates/booklaunchify-health-and-fitness-book-landing-react-template-372940.html'>View Demo</a>
        </div>

        <div className="work-image">
          {
            slides.map((slide, index) => (
              <div key={index} className={`work-slides ${index + 1 === slideIndex ? "visible" : "hide"}`}>
                <a href="https://www.templatemonster.com/landing-page-templates/booklaunchify-health-and-fitness-book-landing-react-template-372940.html" target="_blank" rel="noopener noreferrer">
                  <img alt={slide} src={slide} />
                </a>
              </div>
            ))
          }


          <button className="arrow-button arrow-left" onClick={() => plusDivs(-1)}>&#10094;</button>
          <button className="arrow-button arrow-right" onClick={() => plusDivs(1)}>&#10095;</button>
        </div>


      </div>
    </div>
  </div >)
}

export default Work;