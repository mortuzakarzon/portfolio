import { useState } from "react";
import ModalContent from "../modal/modal-content";

function About() {

  const [showStory, setShowStory] = useState(false);

  const handleShowStory = () => {
    setShowStory((story) => !story);
  }
  return (
    <div className="section-about">
      <div className="about">
        <h2 className="Heading heading-secondary">&#60;About /&#62;</h2>
        <h3>INSPIRED BY DIFFERENCE.</h3>
        <p className="about-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur a nisl a tincidunt. Etiam placerat velit sem, vel suscipit augue fermentum nec. Sociis natoque penatibus et magnis dis.
        </p>
        <p className="about-text">
          Parturient montes, nascetur ridiculus mus. Maecenas ac finibus turpis. Vivamus et elit in leo pretium pharetra. Sed lobortis urna turpis, id ultricies dolor pharetra ac. Proin suscipit odio non libero ullamcorper, sit amet tincidunt lacus porta. Aenean sodales lectus ex, non sagittis nibh ultricies at. Aliquam nec dolor posuere, vulputate mauris at, fermentum Donec ligula metus, hendrerit at malesuada vel, facilisis sit amet dui. Aliquam erat volutpat. Nulla eget ornare dolor. Pellentesque convallis dui ante, eu pretium ipsum bibendum fermentum. Proin dui arcu, mattis non ultricies ac, pellentesque eget ipsum. Nullam tincidunt orci in interdum facilisis. Vestibulum eu neque et mauris vestibulum pretium vel vitae enim. Vestibulum id ipsum risus. Suspendisse lectus tortor, pretium ut orci vitae, mollis iaculis risus.
        </p>

        <button className="btn btn--full about-button" onClick={handleShowStory}> My whole story</button>

        {showStory ? <ModalContent setShowStory={setShowStory} /> : ""}

      </div>
    </div>)
}

export default About;