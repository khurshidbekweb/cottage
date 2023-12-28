import "./DachaCard.css";
import { FiHeart } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../../constants/img.constants";
// import { IMG_BASE_URL } from "../../constants/img.constants";

const DachaCard = (props) => {
  const mainImage = props.cottage.images.find(e=> e.isMainImage === true).image
  return (
    <div className="dacha-card" key={props.cottage.id}>
      <div>
        <img src={`${IMG_BASE_URL}${mainImage}`} width="326" height="278" alt="dacha" />
        <div className="dacha-card-like">
          <FiHeart className="dacha-heart-icon" />
        </div>
      </div>
      <div>
        <h5 className="dacha-card-name">{props.cottage.name}</h5>
        <p className="dacha-card-text">{props.cottage.region.name} viloyati {props.cottage.place.name}</p>
        <p className="dacha-card-text">Narxi: {props.cottage.price}$</p>
        <p className="dacha-card-text">Dam olish kunlari: {props.cottage.priceWeekend}$</p>
      </div>
      <Link to={`/view/${props.cottage.id}`} className="dacha-card-btn">{props.btn}</Link>
    </div>
  );
};

export default DachaCard;
