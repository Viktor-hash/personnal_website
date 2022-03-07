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
      <div className="nav">
        <div className="nav_header">
          <h1 className="Title" onClick={OnTitleClicked}>
            <span>Victor Perrault</span>
          </h1>
        </div>
        <div className="nav_list">
          <h2 className="About" onClick={OnTitleClicked}>
            <span>ABOUT</span>
          </h2>
          <h2 className="Work" onClick={OnTitleClicked}>
            <span>WORK</span>
          </h2>
          <h2 className="Contact" onClick={OnTitleClicked}>
            <span>CONTACT</span>
          </h2>
        </div>
      </div>
      <div className="main">
        <div className="containerHome">
          <img className="Image" src={img_cover} alt="" />
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <p>© Victor Perrault 2022. Currently in Paris</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default Home;
