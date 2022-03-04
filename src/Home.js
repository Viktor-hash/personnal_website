import img_cover from "../images/move_study_website.jpg";
import FadeIn from "react-fade-in";
import React from "react";
const Home = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#f1eaf2";
  }, []);

  const OnTitleClicked = () => {};

  return (
    <FadeIn>
      <h1 className="Title" onClick={OnTitleClicked}>
        <span>Victor Perrault</span>
        <h2 className="About" onClick={OnTitleClicked}>
          <span>ABOUT</span>
        </h2>
        <h2 className="Work" onClick={OnTitleClicked}>
          <span>WORK</span>
        </h2>
        <h2 className="Contact" onClick={OnTitleClicked}>
          <span>CONTACT</span>
        </h2>
      </h1>
      <img className="Image" src={img_cover} alt="" />
    </FadeIn>
  );
};

export default Home;
