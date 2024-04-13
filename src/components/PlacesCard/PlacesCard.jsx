import { Link } from "react-router-dom";

import "./PlacesCard.css";

import { IMG_BASE_URL } from "../../constants/img.constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PlacesCard = (props) => {
<<<<<<< HEAD
    return (
        <Link to={`/home/vacation/${props.id}`} className='places-card'>
            <img className='nature-img' src={`${IMG_BASE_URL}${props.img}`} width='255' height='355' alt="nature" />
            <p className='oswald places-card-name'>{props.name}</p>
        </Link>
    );
}
=======
  return (
    <Link to={`/vacation/${props.id}`} className="places-card">
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
>>>>>>> 27e83ccf05e28d84f540c9dd50bfdf72c0935380

export default PlacesCard;
