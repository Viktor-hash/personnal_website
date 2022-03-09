import { useNavigate, Link } from "react-router-dom";

const NavBarWork = () => {
  let navigate = useNavigate();
  const OnProjectsClicked = () => {
    navigate("projects");
  };
  const OnDrawingClicked = () => {
    navigate("drawings");
  };

  return (
    <div className="content">
      <div className="about_content">
        <h2 className="AboutTitle"> Work </h2>
        <h2 className="Works_project_link" onClick={OnProjectsClicked}>
          <span>Projects&nbsp;&nbsp;</span>
        </h2>
        <h2 className="Works_project_link" onClick={OnDrawingClicked}>
          <span>Drawings</span>
        </h2>
      </div>
    </div>
  );
};

export default NavBarWork;
