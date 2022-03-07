import React from "react";
import FadeIn from "react-fade-in";

const About = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#f1eaf2";
  }, []);
  return (
    <FadeIn>
      <div className="main">
        <div className="containerAbout">
          <h2 className="AboutTitle"> About </h2>
          <div className="content"></div>
        </div>
      </div>
    </FadeIn>
  );
};

export default About;
