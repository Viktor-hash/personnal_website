import React from "react";
import FadeIn from "react-fade-in";

const Contact = () => {
  const OnEmailClick = () => {
    window.location.href = "mailto:perrault.victor92@gmail.com";
  };

  const OnGithubClick = () => {
    window.location.assign("https://github.com/Viktor-hash/");
  };

  const OnLinkedinClick = () => {
    window.location.assign(
      "https://www.linkedin.com/in/victor-perrault-32b16b15b/"
    );
  };

  const OnInstagramClick = () => {
    window.location.assign("https://instagram.com/victor_prlt/");
  };

  const OnArstationClick = () => {
    window.location.assign("https://victorsketches.artstation.com/");
  };

  return (
    <React.Fragment>
      <FadeIn>
        <div className="main">
          <div className="containerContact">
            <h2 className="AboutTitle"> Contact </h2>
            <div className="content">
              <div className="about_content">
                <p className="Contact_text">
                  Wanna grab some tea or go for a walk?&nbsp;
                </p>
                <h2 className="Contact_links" onClick={OnEmailClick}>
                  <span>Email me</span>
                </h2>
                <p className="Contact_text">, or find me on&nbsp;</p>
                <h2 className="Contact_links" onClick={OnGithubClick}>
                  <span>Github</span>
                </h2>
                <p className="Contact_text">/</p>
                <h2 className="Contact_links" onClick={OnLinkedinClick}>
                  <span>Linkedin</span>
                </h2>
                <p className="Contact_text">/</p>
                <h2 className="Contact_links" onClick={OnInstagramClick}>
                  <span>Instagram</span>
                </h2>
                <p className="Contact_text">/</p>
                <h2 className="Contact_links" onClick={OnArstationClick}>
                  <span>Artstation</span>
                </h2>
              </div>
            </div>
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

export default Contact;
