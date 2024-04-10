import "./BlokCard.css";

import { FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const BlokCard = (props) => {
  return (
    <div className="blokcard">
      <div className="blokcard-l">
        <img className="blokcard-img" src={props.img} alt="img" />
        <div className="linecard-heart">
          <FiHeart className="linecard-like" />
        </div>
      </div>

      <div className="blokcard-r">
        <div className="lc-r-header">
          <h5 className="lc-name">{props.name}</h5>
          <div className="lc-stars">
            <AiFillStar className="lc-star-active" />
            <AiFillStar className="lc-star-active" />
            <AiFillStar className="lc-star-active" />
            <AiFillStar className="lc-star" />
            <AiFillStar className="lc-star" />
          </div>
        </div>

        <p className="lc-location">{props.location}</p>

        <div className="lc-inner">
          <div className="lc-inner-box">
            <img className="lc-inner-img" src={props.bed} alt="" />
            <p className="lc-inner-text">{props.bedtext}</p>
          </div>
          <div className="lc-inner-box">
            <img className="lc-inner-img" src={props.home} alt="" />
            <p className="lc-inner-text">{props.hometext}</p>
          </div>
        </div>

        <p className="lc-text">
          <span className="lc-span">{props.sum1}</span> uzs/за день
        </p>
        <p className="lc-text">
          <span className="lc-span">{props.sum2}</span> uzs/за выходной день
        </p>

        <div className="lc-btns">
          <Link className="lc-btn1" to="/view">
            {props.btn1}
          </Link>
          <button className="bc-btn2">{props.btn2}</button>
        </div>
      </div>
    </div>
  );
};

export default BlokCard;
