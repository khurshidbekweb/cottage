import "./Places.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PlacesMiniCard from "../PlacesMiniCard/PlacesMiniCard";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
  Parallax,
} from "swiper/modules";

import PlacesCard from "../PlacesCard/PlacesCard";
// import "swiper/css/bundle";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { ALL_DATA } from "../../Query/get_all";
const Places = () => {
  const places = ALL_DATA.usePlace()
  return (
    <div className="container">
      <div className="places">
        <h2 className="places-top">Месты Отдыха</h2>

        <Swiper
          className="places-swiper"
          modules={[
            Navigation,
            Pagination,
            A11y,
            Autoplay,
            Parallax,
          ]}
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{
            delay: 2000,
          }}
          parallax={{
            enabled: true,
          }}
        >
          {places?.data?.length &&
            places.data.map((place) => {
              return (
                <SwiperSlide key={place.id}>
                  <PlacesCard
                    id={place.id}
                    name={place.name}
                    img={place.image}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>

        <Swiper
            className="swipper"            
            slidesPerView={3}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
          >
            {places.data?.length &&
              places?.data.map((place) => {
                return (
                  <SwiperSlide key={place.id}>
                      <PlacesMiniCard
                      key={place.id}
                      id={place.id}
                      name={place.name}
                      image={place.image}
                    />
                  </SwiperSlide>
                );
            })}
          </Swiper>


        {/* <div className="places-cards">
          {places.data?.length &&
            places?.data.map((place) => {
              return (
                <PlacesMiniCard
                  key={place.id}
                  id={place.id}
                  name={place.name}
                  image={place.image}
                />
              );
            })}
        </div> */}
      </div>
    </div>
  );
};

export default Places;
