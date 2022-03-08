import { Outlet } from "react-router-dom";
import NavBarWorks from "./NavBarWork";

export default function Work() {
  return (
    <div className="main">
      <div className="containerAbout">
        <NavBarWorks />
        <Outlet />
      </div>
    </div>
  );
}
