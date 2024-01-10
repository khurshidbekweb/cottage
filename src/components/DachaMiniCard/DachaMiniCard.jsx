import "./DachaMiniCard.css";
import { FiHeart } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { BASE_URL_SERVER } from "../../constants/server.constants";

const DachaMiniCard = (props) => {
  const mainImg = props.cottage.images.find(e=> e.isMainImage === true).image 
  return (
    <div className="mini-card-wrap"  key={props.cottage.id}>
      <Link to={`/view/${props.cottage.id}`} className="dacha-mini-card shadow">
      <div className="img-wrap">
        <img className="view-img" src={`${BASE_URL_SERVER}${mainImg}`}  alt="dacha" />        
      </div>
      <div className="mini-card-info">
        <h5 className="dmc-name">{props.cottage.name}</h5>
        <p className="dmc-text">{props.cottage.region.name} viloyati {props.cottage.place.name}</p>
      </div>
    </Link>
    <div className="dmc-like">
          <FiHeart className="dacha-mini-heart-icon" />
        </div>
    </div>
  );
};

export default DachaMiniCard;
