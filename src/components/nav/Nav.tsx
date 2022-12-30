import { logo } from "../../assets";
import "./Nav.scss";

export const Nav = () => (
  <nav className="nav-bar">
    <img id="logo" src={logo} alt="AirBnb logo" />
  </nav>
);
