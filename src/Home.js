import img_cover from "../images/move_study_website.jpg";
import img_linkedin from "../icons/linkedin.png";
import img_instagram from "../icons/instagram.png";
import img_github from "../icons/github.png";

import FadeIn from "react-fade-in";
import React from "react";
const Home = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#f1eaf2";
  }, []);

  const OnTitleClicked = () => {};

  return (
    <FadeIn>
      <div className="nav_header">
        <h1 className="Title" onClick={OnTitleClicked}>
          <span>Victor Perrault</span>
        </h1>
      </div>
      <h2 className="About" onClick={OnTitleClicked}>
        <span>ABOUT</span>
      </h2>
      <h2 className="Work" onClick={OnTitleClicked}>
        <span>WORK</span>
      </h2>
      <h2 className="Contact" onClick={OnTitleClicked}>
        <span>CONTACT</span>
      </h2>
      <div className="main">
        <div className="containerHome">
          <img className="Image" src={img_cover} alt="" />
        </div>
        <div className="socialMedia">
          <ul className="Icons">
            <a href="https://www.linkedin.com/in/victor-perrault-32b16b15b/">
              <img className="Linkedin" src={img_linkedin} alt="" />
            </a>
            <a href="https://instagram.com/victor_prlt/">
              <img className="Instagram" src={img_instagram} alt="" />
            </a>
            <a href="https://github.com/Viktor-hash/">
              <img className="Github" src={img_github} alt="" />
            </a>
          </ul>
        </div>
        <div className="footer">
          <div className="container">
            <p>© Victor Perrault 2022. Currently in Paris</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Home;
