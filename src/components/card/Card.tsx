import { star } from "../../assets";
import "./Card.scss";

type CardProp = {
  rating: number;
  rateCount: number;
  country: string;
  title: string;
  price: number;
  img: string;
};

export const Card = (props: CardProp) => {
  return (
    <div className="card">
      <img src={props.img} alt="experience image" />
      <div className="rating-section">
        <img src={star} alt="star" />
        <span className="rating">{props.rating} </span>
        <span className="rateCount">({props.rateCount})</span>
        <span>•</span>
        <span className="country">{props.country}</span>
      </div>
      <p className="experience">{props.title}</p>
      <p className="price">
        <span className="cost">From ${props.price}</span> / person
      </p>
    </div>
  );
};
