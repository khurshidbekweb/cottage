import "./DachaMiniCard.css";
import { FiHeart } from 'react-icons/fi'
import { Link } from "react-router-dom";

const DachaMiniCard = (props) => {
  return (
    <div className="dacha-mini-card">
      <div>
        <img className="view-img" src={props.img}  alt="dacha" />
        <div className="dmc-like">
          <FiHeart className="dacha-mini-heart-icon" />
        </div>
      </div>
      <div>
        <h5 className="dmc-name">{props.name}</h5>
        <p className="dmc-text">{props.location}</p>
        <p className="dmc-text">{props.sum1}</p>
        <p className="dmc-text">{props.sum2}</p>
      </div>
      <Link to='/view' className="dmc-btn">{props.btn}</Link>
    </div>
  );
};

export default DachaMiniCard;
