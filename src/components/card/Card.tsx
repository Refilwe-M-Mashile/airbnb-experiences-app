import { star } from "../../assets";
import "./Card.scss";

type CardProp = {
  rating: number;
  rateCount: number;
  country: string;
  title: string;
  price: number;
  img: string;
  openSpots: number;
};

export const Card = (props: CardProp) => {
  let badgeText;
  if (props.openSpots == 0) badgeText = "SOLD OUT";
  else if (props.country == "Online") badgeText = "ONLINE";

  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
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
