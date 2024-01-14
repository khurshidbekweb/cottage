import "./DachaMiniCard.css";
import { FiHeart } from 'react-icons/fi'
import { Link} from "react-router-dom";
import { BASE_URL_SERVER } from "../../constants/server.constants";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../Query/query-keys";

const DachaMiniCard = (props) => {
  const mainImg = props.cottage.images.find(e=> e.isMainImage === true).image 
  const queryClient = useQueryClient()
  let liked = []
  const handlLiked = (id) => {
    const likedCottage = JSON.parse(localStorage.getItem("liked"))
    liked.push(...likedCottage || "")
    if(!liked?.includes(id)){
        liked.push(id)
        localStorage.setItem("liked", JSON.stringify(liked))
    }else if(liked?.includes(id)){
      const isLiked = liked.filter(e => e !== id)
      localStorage.setItem("liked", JSON.stringify(isLiked))
    }
    queryClient.invalidateQueries({queryKey: [QUERY_KEYS.cottages]})
  }
  return (
    <div className="mini-card-wrap"  key={props.cottage.id}>
      <Link to={`/view/${props.cottage.id}`} className="dacha-mini-card shadow">
      <div className="img-wrap">
        <img className="view-img" src={`${BASE_URL_SERVER}${mainImg}`}  alt="dacha" />        
      </div>
      <div className="mini-card-info">
        <h5 className="dmc-name">{props.cottage.name}</h5>
        <p className="dmc-text">{props.cottage.region.name} {props.cottage.place.name}</p>
      </div>
    </Link>
    <div className={`dmc-like ${props.cottage?.isLiked===true ? "dmc-like-active":""}`}>
          <FiHeart onClick={()=> handlLiked(props.cottage.id)} className={`dacha-mini-heart-icon ${props.cottage.isLiked ===true ? "dacha-mini-heart-active" : ""}`} />
    </div> 
    </div>
  );
};

export default DachaMiniCard;
