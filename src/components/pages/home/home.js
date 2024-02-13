import LeftSection from "../../layouts/left-section/left-section";
import RightSection from "../../layouts/right-section/right-section";
import AnimatedCursor from "react-animated-cursor";
function Home() {
  return (
    <main className="container">
      <AnimatedCursor
        innerSize={12}
        outerSize={40}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#78c185",
        }}
        outerStyle={{
          border: "3px solid #888",
        }}
      />
      <LeftSection />
      <RightSection />
    </main>
  );
}

export default Home;
