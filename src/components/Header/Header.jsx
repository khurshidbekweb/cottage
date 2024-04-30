import "./Header.css";
import Search from "../../assets/images/search.svg";
import MiniSearch from "../../assets/images/mini-search.svg";
import { Link } from "react-router-dom";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";

import { ALL_DATA } from "../../Query/get_all";
import { useContext, useState } from "react";
import FilterSEction from "../FilterSection/FilterSEction";
import { FilterLeng, HeaderLang } from "../../configs/language";
import { LanguageContext } from "../../helper/languageContext";
import { IMG_BASE_URL } from "../../constants/img.constants";
import MiniFIlter from "../../Modals/MiniFIlter";

const Header = () => {
  const cottageTop = ALL_DATA.useCottage()?.data; 

  // useContext
  const { languageChange } = useContext(LanguageContext);

  return (
    <>
      <header className="header">
        <Swiper
          className="swiper-header"
          modules={[Navigation, A11y, Scrollbar, Autoplay, Parallax]}
          spaceBetween={1}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
          }}
          parallax={{
            enabled: true,
          }}
        >
          {cottageTop?.length &&
            cottageTop
              .filter((topCott) => topCott.isTop === true)
              .map((el) => {
                return (
                  <SwiperSlide key={el.id} className="swiper-slide-header">
                    <div className="wrap-ads">
                      <img
                        src={`${IMG_BASE_URL}${
                          el.images.find(
                            (mainIm) => mainIm.isMainImage === true
                          ).image
                        }`}
                        alt="bgimg"
                        className="bg-img"
                      />
                      <div className="info-card">
                        <h1 className="oswald header-text"> {el.name} </h1>
                        <h2 className="oswald header-num">${el.price}</h2>
                        <Link
                          to={`/home/view/${el.id}`}
                          className="header-btn oswald"
                        >
                          {HeaderLang[languageChange].btn}
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
        </Swiper>
        <MiniFIlter/>     
        
      </header>

      {/* <FilterSEction cottageFilter={cottageFilter} /> */}
    </>
  );
};

export default Header;
