import "./Header.css";
import Search from "../../assets/images/search.svg";
import MiniSearch from "../../assets/images/mini-search.svg";
import bgImg from '../../assets/images/bg-img.png'
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
import { useState } from "react";
import FilterSEction from "../FilterSection/FilterSEction";

const Header = () => {
  const cottageTop = ALL_DATA.useCottage()?.data
  const cottageType = ALL_DATA.useCottageType()?.data
  const place = ALL_DATA.usePlace()?.data
  const [filter, setFilter] = useState({
    region: "",
    type: "",
    price: ""
  })
  const cottageFilter = ALL_DATA.useCottageFilter(filter)
  console.log(cottageFilter);
  const handleFilterCottage = (e) => {
    e.preventDefault()
    setFilter({
      price: e.target.price.value,
      region: e.target.region.value,
      type: e.target.cottageType.value
    })  
  }  

  return (
    <>
        <header className="header">
          <Swiper
          className="swiper"
            modules={[Navigation, A11y, Scrollbar, Autoplay, Parallax]}
            spaceBetween={1}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
            }}
            parallax={{
              enabled: true,
            }}
          >      
            {cottageTop?.length && cottageTop.filter(topCott => topCott.isTop === true).map(el => {
              return <SwiperSlide key={el.id}>
                        <div className="wrap-ads">
                          <img src={`${BASE_URL_SERVER}${el.images.find(mainIm => mainIm.isMainImage=== true).image}`} alt="bgimg" className="bg-img" />            
                            <div className="info-card">
                              <h1 className="header-text">Шейхская резиденция</h1>
                              <h2 className="header-num">${el.price}</h2>
                              <Link to={`/view/${el.id}`} className="header-btn">
                                Просмотреть
                              </Link>
                            </div>            
                        </div>
                      </SwiperSlide>
            })}
          </Swiper>
            

          <form className="header-menu" onSubmit={handleFilterCottage}>
            <div className="header-inner">
              <div className="header-inner-box">
                <p className="header-top">Расположение</p>
                <select className="header-select-one" name="place" id="place">
                    {place?.length && place.map(el => {
                      return <option key={el.id} value={el.id}>{el.name}</option>
                    })}
                </select>
              </div>
              <div className="header-inner-box">
                <p className="header-top">Тип отдыха</p>
                <select className="header-select-two" name="dacha" id="dacha">
                    {cottageType?.length && cottageType.map(el => {
                        return <option key={el.id} value={el.id}>{el.name}</option>
                    })}
                </select>
              </div>
              <div className="header-inner-box">
                <p className="header-top-usd">Цена</p>
                <input
                  className="header-nums"
                  type="text"
                  name="price"
                  placeholder="300$ - 800$"
                />
              </div>
            </div>

            <button type="submit" className="header-search">
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
        <FilterSEction/>
    </>
  );
};

export default Header;
