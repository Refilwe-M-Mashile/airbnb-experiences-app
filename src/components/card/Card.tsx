import { katie, star } from "../../assets";
import "./Card.scss";

type CardProp = {
  rating: number;
  raters: number;
  country: string;
  experience: string;
  cost: number;
};

export const Card = (props: CardProp) => {
  return (
    <div className="card">
      <img src={katie} alt="experience image" />
      <div className="rating-section">
        <img src={star} alt="star" />
        <span className="rating">props.rating </span>
        <span className="raters">({props.raters})</span>
        <span>●</span>
        <span className="country">{props.country}</span>
      </div>
      <p className="experience">{props.experience}</p>
      <p className="price">
        <span className="cost">From ${props.cost}</span> / person
      </p>
    </div>
  );
};
