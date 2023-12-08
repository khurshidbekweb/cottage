import "./FavCard.css";
import { FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const FavCard = (props) => {
  return (
    <div className="favcard">
      <div>
        <img className="favcard-img" src={props.img} alt="dacha" />
        <div className="favcard-heart">
          <FiHeart className="favcard-like" />
        </div>
      </div>
      <div>
        <div className="favcard-header">
          <h5 className="favcard-name">{props.name}</h5>
          <div className="favcard-stars">
              <AiFillStar className="favcard-star-active" />
              <AiFillStar className="favcard-star-active" />
              <AiFillStar className="favcard-star-active" />
              <AiFillStar className="favcard-star" />
              <AiFillStar className="favcard-star" />
          </div>
        </div>
        <p className="favcard-text">{props.location}</p>
        <p className="favcard-text">{props.sum1}</p>
        <p className="favcard-text">{props.sum2}</p>
      </div>
      <Link className="favcard-btn" to="/view">
        {props.btn}
      </Link>
    </div>
  );
};

export default FavCard;
