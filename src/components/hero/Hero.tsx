import { grid } from "../../assets";
import "./Hero.scss";

export const Hero = () => (
  <section className="hero">
    <img id="grid" src={grid} alt="grid of images" />
    <h1 className="header">Online Experiences</h1>
    <p>
      Join unique interactive activities led by one-of-a-kind hosts—all without
      leaving home.
    </p>
  </section>
);
