import { logo } from "../../assets";
import "./NavBar.scss";

export const NavBar = () => (
  <nav className="nav-bar">
    <img id="logo" src={logo} alt="AirBnb logo" />
  </nav>
);
