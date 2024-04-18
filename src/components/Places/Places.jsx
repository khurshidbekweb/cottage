import "./Places.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";

import PlacesCard from "../PlacesCard/PlacesCard";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { ALL_DATA } from "../../Query/get_all";
import { useContext, useRef } from "react";
import { PlaseLeng } from "../../configs/language";
import { LanguageContext } from "../../helper/languageContext";

const Places = () => {
  const places = ALL_DATA.usePlace();

  const prevPlaceElm = useRef(null);
  const nextPlaceElm = useRef(null);

  // useContext language
  const { languageChange } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="places">
        <h2 className="places-top">{PlaseLeng[languageChange]}</h2>
        <Swiper
          className="swiper-place"
          slidesPerView={5}
          spaceBetween={25}
          keyboard={{
            enabled: true,
          }}
          navigation={{
            prevEl: prevPlaceElm.current,
            nextEl: nextPlaceElm.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevPlaceElm.current;
            swiper.params.navigation.nextEl = nextPlaceElm.current;
          }}
          modules={[Keyboard, Navigation]}
        >
          {places.data?.length &&
            places?.data.map((place) => {
              return (
                <SwiperSlide key={place.id} className="swiper-slide">
                  <PlacesCard
                    id={place.id}
                    name={place.name}
                    img={place.image}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        {/* Swiper mini */}
        <Swiper
          className="swiper-place-mini"
          slidesPerView={3}
          spaceBetween={10}
          keyboard={{
            enabled: true,
          }}
          navigation={{
            prevEl: prevPlaceElm.current,
            nextEl: nextPlaceElm.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevPlaceElm.current;
            swiper.params.navigation.nextEl = nextPlaceElm.current;
          }}
          modules={[Keyboard, Navigation]}
        >
          {places.data?.length &&
            places?.data.map((place) => {
              return (
                <SwiperSlide key={place.id} className="swiper-slide-place">
                  <PlacesCard
                    id={place.id}
                    name={place.name}
                    img={place.image}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>

        <div ref={prevPlaceElm} className="prevPlace">
          <i className="bx mt-2 bx-left-arrow-alt"></i>
        </div>
        <div ref={nextPlaceElm} className="nextPlace">
          <i className="bx mt-2 bx-right-arrow-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default Places;
