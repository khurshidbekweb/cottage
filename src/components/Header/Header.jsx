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

const Header = () => {
  return (
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
        <SwiperSlide>
          <div className="wrap-ads">
            <img src={bgImg} alt="bgimg" className="bg-img" />            
              <div className="info-card">
                <h1 className="header-text">Шейхская резиденция</h1>
                <h2 className="header-num">$200</h2>
                <Link to="/view" className="header-btn">
                  Просмотреть
                </Link>
              </div>            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrap-ads">
            <img src={bgImg} alt="bgimg" className="bg-img" />            
              <div className="info-card">
                <h1 className="header-text">Шейхская резиденция</h1>
                <h2 className="header-num">$200</h2>
                <Link to="/view" className="header-btn">
                  Просмотреть
                </Link>
              </div>            
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="wrap-ads">
            <img src={bgImg} alt="bgimg" className="bg-img" />            
              <div className="info-card">
                <h1 className="header-text">Шейхская резиденция</h1>
                <h2 className="header-num">$200</h2>
                <Link to="/view" className="header-btn">
                  Просмотреть
                </Link>
              </div>            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrap-ads">
            <img src={bgImg} alt="bgimg" className="bg-img" />            
              <div className="info-card">
                <h1 className="header-text">Шейхская резиденция</h1>
                <h2 className="header-num">$200</h2>
                <Link to="/view" className="header-btn">
                  Просмотреть
                </Link>
              </div>            
          </div>
        </SwiperSlide>
      </Swiper>
        

      <div className="header-menu">
        <div className="header-inner">
          <div className="header-inner-box">
            <p className="header-top">Расположение</p>

            <select className="header-select-one" name="place" id="place">
              <option value="chorvoq">Чорвок</option>
            </select>
          </div>

          <div className="header-inner-box">
            <p className="header-top">Тип отдыха</p>

            <select className="header-select-two" name="dacha" id="dacha">
              <option value="dacha">Дача</option>
              <option value="piknik">Пикник</option>
              <option value="ribalka">Рыбалка</option>
            </select>
          </div>

          <div className="header-inner-box">
            <p className="header-top-usd">Цена</p>
            <input
              className="header-nums"
              type="text"
              placeholder="300$ - 800$"
            />
          </div>
        </div>

        <Link to="/filter" className="header-search">
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
        </Link>
      </div>

      
    </header>
  );
};

export default Header;
