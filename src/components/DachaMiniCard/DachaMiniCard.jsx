import "./DachaMiniCard.css";
import { FiHeart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL_SERVER } from "../../constants/server.constants";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../Query/query-keys";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const DachaMiniCard = (props) => {
  const mainImg = props.cottage.images.find(
    (e) => e.isMainImage === true
  ).image;

  const queryClient = useQueryClient();

  let liked = [];

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const navigate = useNavigate(null);
  const handlLiked = (id) => {
    if (accessToken && refreshToken) {
      const likedCottage = JSON.parse(localStorage.getItem("liked"));
      liked.push(...(likedCottage || ""));
      if (!liked?.includes(id)) {
        liked.push(id);
        localStorage.setItem("liked", JSON.stringify(liked));
      } else if (liked?.includes(id)) {
        const isLiked = liked.filter((e) => e !== id);
        localStorage.setItem("liked", JSON.stringify(isLiked));
      }
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cottages] });
    } else {
      navigate("/sign-in");
    }
  };

  return (
    <div className="mini-card-wrap">
      <Link
        to={`/home/view/${props.cottage.id}`}
        className="dacha-mini-card shadow"
      >
        <div className="img-wrap">
          <LazyLoadImage
            className="view-img"
            effect="blur"
            src={`${BASE_URL_SERVER}${mainImg}`}
            alt="dacha"
          />
          <p
            className={
              props.cottage.cottageStatus === "progress"
                ? "no-active-text-mini"
                : "d-none"
            }
          >
            Не активное
          </p>
          <div
            className={
              props.cottage.cottageStatus === "progress"
                ? "overlay-img-card"
                : "d-none"
            }
          ></div>
        </div>
        <div className="mini-card-info">
          <h5 className="dmc-name oswald">{props.cottage.name}</h5>
          <p className="dmc-text">
            {props.cottage.region.name} {props.cottage.place.name}
          </p>
          <p className="mini-card-price">{props.cottage?.price}$</p>
        </div>
      </Link>
      <div
        className={
          props.cottage.cottageStatus === "progress"
            ? "d-none"
            : "mini-cart-heart-wrap"
        }
      >
        <div
          onClick={() => handlLiked(props.cottage.id)}
          className={`dmc-like ${
            props.cottage?.isLiked === true ? "dmc-like-active" : ""
          }`}
        >
          <FiHeart
            onClick={() => handlLiked(props.cottage.id)}
            className={`dacha-mini-heart-icon ${
              props.cottage.isLiked === true ? "dacha-mini-heart-active" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default DachaMiniCard;
