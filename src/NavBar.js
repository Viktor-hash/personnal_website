import FadeIn from "react-fade-in";
import React from "react";
import img_linkedin from "../icons/linkedin.png";
import img_instagram from "../icons/instagram.png";
import img_github from "../icons/github.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();
  const OnTitleClicked = () => {
    navigate("/");
  };
  const OnAboutClicked = () => {
    navigate("/about");
  };
  return (
    <FadeIn>
      <div className="nav_header">
        <h1 className="Title" onClick={OnTitleClicked}>
          <span>Victor Perrault</span>
        </h1>
      </div>
      <h2 className="About" onClick={OnAboutClicked}>
        <span>ABOUT</span>
      </h2>
      <h2 className="Work" onClick={OnTitleClicked}>
        <span>WORK</span>
      </h2>
      <h2 className="Contact" onClick={OnTitleClicked}>
        <span>CONTACT</span>
      </h2>
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
    </FadeIn>
  );
};

export default NavBar;
