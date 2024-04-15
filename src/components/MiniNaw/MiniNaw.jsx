import "./MiniNaw.css";

import Home from "../../assets/images/home.svg";
import Like from "../../assets/images/like.svg";
import Plus from "../../assets/images/plus.svg";
import User from "../../assets/images/user.svg";

import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { ALL_DATA } from "../../Query/get_all";

const MiniNaw = () => {
  const miniNav = useRef(null);

  const accessAToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const cottage = ALL_DATA.useCottage();
  const favoriteCottage =
    cottage?.data?.length &&
    cottage?.data?.filter((e) => e.isLiked === true)?.length;
  return (
    <div
      ref={miniNav}
      className={accessAToken && refreshToken ? "wrap-nav" : "wrap-nav d-none"}
    >
      <div className="mini-naw">
        <NavLink to="/">
          <img src={Home} width="24" height="24.98" alt="home" />
        </NavLink>

        <NavLink to="/home/favorite" className="favorite">
          <img src={Like} width="31.96" height="25.47" alt="like" />
          <span
            className={
              favoriteCottage ? "favarite-num-mini" : "favarite-num-mini d-none"
            }
          >
            {favoriteCottage}
          </span>
        </NavLink>

        <NavLink to="/home/profile/add-new">
          <img src={Plus} width="32" height="32" alt="plus" />
        </NavLink>

        <NavLink to="/home/profile">
          <img src={User} width="28" height="28" alt="user" />
        </NavLink>
      </div>
    </div>
  );
};

export default MiniNaw;
