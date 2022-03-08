import React from "react";
import FadeIn from "react-fade-in";

const About = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#e7e7e7";
  }, []);

  const OnCEAClicked = () => {
    window.location.assign("https://www.cea.fr/");
  };

  const OnSteliauClicked = () => {
    window.location.assign("https://www.steliau-technology.com/");
  };

  const OnOrangeClicked = () => {
    window.location.assign("https://fr.linkedin.com/company/orangeaddata");
  };

  return (
    <React.Fragment>
      <FadeIn>
        <div className="main">
          <div className="containerAbout">
            <h2 className="AboutTitle"> About </h2>
            <div className="content">
              <div className="about_content">
                <p>
                  I am a student in Artificial Intelligence and Data Science in
                  Paris. I love to learn new things and make projects with my
                  friends. I am interested by technologies, art and travels. I
                  love movies, animation, design and games.
                </p>
                <p>Here are my different work experiences :</p>
                <br />
                <h2 className="workTitle" onClick={OnOrangeClicked}>
                  <span>∟ ORANGE ADVERTISING</span>
                </h2>
                <p className="list_work">
                  &nbsp;&nbsp;trainee data analyst, FEB 2022 - JUL 2022
                </p>
                <br />
                <h2 className="workTitle" onClick={OnCEAClicked}>
                  <span>∟ C E A</span>
                </h2>
                <p className="list_work">
                  &nbsp;&nbsp;(Commissariat à l’Energie Atomique) trainee
                  assistant engineer, SEP 2020 - FEB 2021
                </p>
                <br />
                <h2 className="workTitle" onClick={OnSteliauClicked}>
                  <span>∟ STELIAU TECHNOLOGY</span>
                </h2>
                <p className="list_work">
                  &nbsp;&nbsp;test bench trainee, APR 2019 - JUL 2019
                </p>
                <hr />
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

export default About;
