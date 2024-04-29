import "./Header.css";
import Search from "../../assets/images/search.svg";
import MiniSearch from "../../assets/images/mini-search.svg";
import bgImg from "../../assets/images/bg-img.png";
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
import { BASE_URL_SERVER } from "../../constants/server.constants";
import { useContext, useState } from "react";
import FilterSEction from "../FilterSection/FilterSEction";
import { FilterLeng, HeaderLang } from "../../configs/language";
import { LanguageContext } from "../../helper/languageContext";
import { IMG_BASE_URL } from "../../constants/img.constants";

const Header = () => {
  const cottageTop = ALL_DATA.useCottage()?.data;

  const cottageType = ALL_DATA.useCottageType()?.data;

  const place = ALL_DATA.usePlace()?.data;

  const [filter, setFilter] = useState({
    place: "",
    type: "",
    price: "",
  });

  const cottageFilter = ALL_DATA.useCottageFilter(filter);

  const handleFilterCottage = (e) => {
    e.preventDefault();
    setFilter({
      place: e.target.place.value,
      type: e.target.type.value,
      price: e.target.price.value,
    });
  };

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

        <form className="header-menu" onSubmit={handleFilterCottage}>
          <div className="header-inner">
            <div className="header-inner-box">
              <p className="header-top">{FilterLeng[languageChange].place}</p>
              <select className="header-select-one" name="place" id="place">
                {place?.length &&
                  place.map((el) => {
                    return (
                      <option key={el.id} value={el.id}>
                        {el.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="header-inner-box">
              <p className="header-top">{FilterLeng[languageChange].tip}</p>
              <select className="header-select-two" name="type" id="dacha">
                {cottageType?.length &&
                  cottageType.map((el) => {
                    return (
                      <option key={el.id} value={el.id}>
                        {el.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="header-inner-box">
              <p className="header-top-usd">
                {FilterLeng[languageChange].price}
              </p>
              <input
                className="header-nums"
                type="number"
                name="price"
                placeholder="400$"
              />
            </div>
          </div>

          <button type="submit" className="header-search btn">
            <img
              className="mini-search"
              src={MiniSearch}
              width="22.99"
              height="22.97"
              alt="seach"
            />
            <img
              className="search-img"
              src={Search}
              width="34.49"
              height="34.45"
              alt="search"
            />
          </button>
        </form>
      </header>

      <FilterSEction cottageFilter={cottageFilter} />
    </>
  );
};

export default Header;
