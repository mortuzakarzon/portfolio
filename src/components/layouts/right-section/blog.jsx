function Blog() {

  return (<div className="section-blog" id="blog">

    <h2 className="Heading heading-secondary">&#60;My Blog /&#62;</h2>
    <h3 className="heading-tertiary">I WRITE SOMETIMES.</h3>
    <div className="blogs">
      <div className="blog-item">
        <div className="blog-image">
          <img src="images/useeffect.png" alt="blog title" />
        </div>
        <div className="blog-content">
          <h2><a className="blog-title" href="https://github.com/mortuzakarzon" target="_blank" rel="noopener noreferrer">A Simple Explanation of React.useEffect()</a></h2>
          <p className="test">
            I am impressed by the expressiveness of React hooks. You can do so much by writing so little.

            But the brevity of hooks comes at a price — they're relatively difficult to understand at the beginning. That's especially true for useEffect() — the hook that manages side-effects in functional React components.

            I'll help you understand useEffect() in an accessible way. Let's get started....
          </p>
          <a className="test" href="https://github.com/mortuzakarzon" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>



      </div>

      <div className="blog-item">
        <div className="blog-image">
          <img src="images/renders.png" alt="blog title" />
        </div>
        <div className="blog-content">
          <h2><a className="blog-title" href="https://github.com/mortuzakarzon" target="_blank" rel="noopener noreferrer">Explain the purpose of render() in ReactJS</a></h2>
          <p className="test">
            Render in React JS is a fundamental part of class components. It is used to display the component on the UI returned as HTML or JSX components. The ReactDOM.render() function takes two arguments, HTML code and an HTML element.

            Purpose of render()
            React renders HTML to the web page by using a function called render().
            The purpose of the function is to display the specified HTML code inside the specified HTML element.
            In the render() method, we can read props and state and return our JSX code to the root component of our app.
            In the render() method, we cannot change the state, and we cannot cause side effects( such as making an HTTP request to the webserver).
            Let’s understand the render function with an example....
          </p>

          <a className="test" href="https://github.com/mortuzakarzon" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>



      </div>


    </div>
  </div>)
}

export default Blog;