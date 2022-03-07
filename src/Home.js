import img_cover from "../images/move_study_website.jpg";

import FadeIn from "react-fade-in";
import React from "react";

const Home = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#f1eaf2";
  }, []);

  return (
    <React.Fragment>
      <FadeIn delay={700}>
        <div className="main">
          <div className="containerHome">
            <img className="Image" src={img_cover} alt="" />
          </div>
        </div>
      </FadeIn>
      <div className="footer">
        <div className="container">
          <p>© Victor Perrault 2022. Currently in Paris</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
