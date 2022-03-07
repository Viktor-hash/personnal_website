import React from "react";
import FadeIn from "react-fade-in";

const About = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#e7e7e7";
  }, []);
  return (
    <FadeIn>
      <div className="main">
        <div className="containerAbout">
          <h2 className="AboutTitle"> About </h2>
          <div className="content">
            <div className="about_content">
              <p>
                I am a student in Artificial Intelligence and Data Science in
                Paris. I love to learn new things and make projects with my
                friends. I am interested by technologies, art and travels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default About;
