import { katie, star } from "../../assets";
import "./Card.scss";

export const Card = () => {
  return (
    <div className="card">
      <img src={katie} alt="katie zaferes" />
      <div className="rating-section">
        <img src={star} alt="star" />
        <span className="rating">5.0 </span>
        <span className="raters">(6)</span>
        <span>●</span>
        <span className="country">USA</span>
      </div>
      <p className="experience">Life lessons with Katie Zaferes</p>
      <p className="price">
        <span className="range">From $136</span> / person
      </p>
    </div>
  );
};
