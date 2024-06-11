import MainImage from './main-image';
import About from './about';
import Work from './work';
import Expertise from './expertise';
import Experiences from './experience';
import Blog from './blog';
import Contact from './contact';
import ScrollToTopButton from './scroll-to-top.component';
function RightSection() {



  return (<div className="right-section">
    <MainImage />
    <About />
    <Work />
    <Expertise />
    <Experiences />
    <Blog />
    <Contact />
    <ScrollToTopButton />


  </div >)
}

export default RightSection;