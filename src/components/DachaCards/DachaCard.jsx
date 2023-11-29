import "./DachaCard.css";
import { FiHeart } from 'react-icons/fi'
import { Link } from "react-router-dom";

const DachaCard = (props) => {
  return (
    <div className="dacha-card">
      <div>
        <img src={props.img} width="326" height="278" alt="dacha" />
        <div className="dacha-card-like">
          <FiHeart className="dacha-heart-icon" />
        </div>
      </div>
      <div>
        <h5 className="dacha-card-name">{props.name}</h5>
        <p className="dacha-card-text">{props.location}</p>
        <p className="dacha-card-text">{props.sum1}</p>
        <p className="dacha-card-text">{props.sum2}</p>
      </div>
      <Link to='/view' className="dacha-card-btn">{props.btn}</Link>
    </div>
  );
};

export default DachaCard;
