import "./DachaCard.css";
import { FiHeart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../Query/query-keys";

const DachaCard = (props) => {
  const queryClient = useQueryClient();
  const mainImage = props.cottage.images.find(
    (e) => e.isMainImage === true
  ).image;
  const liked = [];
  const navigate = useNavigate()
  const accessToken = localStorage.getItem("accessToken")
  const refreshToken = localStorage.getItem("refreshToken")
  const favoriteCottage = (id) => {
    if(accessToken && refreshToken){
        let LocalLiked = JSON.parse(localStorage.getItem("liked"));    
          liked.push(...LocalLiked || "");
          if (!liked.includes(id)) {
            liked.push(id);
            localStorage.setItem("liked", JSON.stringify(liked));
          } else if (liked.includes(id)) {
            const likedCottages = liked.filter((e) => e !== id);
            localStorage.setItem("liked", JSON.stringify(likedCottages));
          }
          queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cottages] });
        }
        else{
          navigate('/sign-in')
        }
    }
  return (
    <div className="dacha-card">
      <div>
        <img
          className="main-img-dacha"
          src={`${IMG_BASE_URL}${mainImage}`}
          width="326"
          height="278"
          alt="dacha"
        />
        <div className="here-icons-wrap">
        <div className={`dacha-card-like ${props.cottage.isLiked?"dacha-card-like-active":""}`}>
          <FiHeart
            onClick={() => favoriteCottage(props.cottage.id)}
            className={`dacha-heart-icon ${
              props.cottage.isLiked ? "dacha-heart-icon-active" : ""
            }`}
          />
        </div>
        </div>
      </div>
      <div>
        <h5 className="dacha-card-name">{props.cottage.name}</h5>
        <p className="dacha-card-text">
          {props.cottage.region.name} viloyati {props.cottage.place.name}
        </p>
        <p className="dacha-card-text">Narxi: {props.cottage.price}$</p>
        <p className="dacha-card-text">
          Dam olish kunlari: {props.cottage.priceWeekend}$
        </p>
      </div>
      <Link to={`/view/${props.cottage.id}`} className="dacha-card-btn">
        {props.btn}
      </Link>
    </div>
  );
};

export default DachaCard;
