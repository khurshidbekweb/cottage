import { Link } from "react-router-dom";

import "./PlacesCard.css";

import { IMG_BASE_URL } from "../../constants/img.constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PlacesCard = (props) => {
  return (
    <Link to={`/home/vacation/${props.id}`} className="places-card">
      <LazyLoadImage
        className="nature-img"
        src={`${IMG_BASE_URL}${props.img}`}
        width="255"
        height="355"
        alt="nature"
      />
      <p className="places-card-name">{props.name}</p>
    </Link>
  );
};

export default PlacesCard;
