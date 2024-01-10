import "./Places.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PlacesMiniCard  from "../PlacesMiniCard/PlacesMiniCard";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from "swiper/modules";

import PlacesCard from "../PlacesCard/PlacesCard";
// import Nature1 from "../../assets/images/nature1.png";
// import Nature2 from "../../assets/images/nature2.png";
// import Nature3 from "../../assets/images/nature3.png";
// import Nature4 from "../../assets/images/nature4.png";
// import Nature5 from "../../assets/images/nature5.png";
// import Nature6 from "../../assets/images/nature6.png";
// import Nature7 from "../../assets/images/nature7.png";
import NoNature from "../../assets/images/no-nature.png";
// import PlacesMiniCard from "../PlacesMiniCard/PlacesMiniCard";
import Nature8 from "../../assets/images/nature8.png";
import Nature9 from "../../assets/images/nature9.png";
import Nature10 from "../../assets/images/nature10.png";
import Nature11 from "../../assets/images/nature11.png";
import Nature12 from "../../assets/images/nature12.png";
import Nature13 from "../../assets/images/nature13.png";
import Nature14 from "../../assets/images/nature14.png";

import "swiper/css/bundle";
import { useQuery } from "@tanstack/react-query";
import { placeUtils } from "../../utils/place.utils";
const Places = () => {
  const places = useQuery({
    queryKey: ["places"],
    queryFn: placeUtils.getPlace,
  });
  console.log(places.data);
  return (
    <div className="container">
      <div className="places">
        <h2 className="places-top">Месты Отдыха</h2>

        <Swiper
          className="places-swiper"
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
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
                  <PlacesCard name={place.name} img={place.image} id={place.id}/>
                </SwiperSlide>
              );
            })}
        </Swiper>
        

        <div className="places-cards">
          {places.data?.length && places.data.map(place => {
            return  <PlacesMiniCard
                      name={place.name}
                      image={place.image}
                    />
          })
          }
        </div>
      </div>
    </div>
  );
};

export default Places;
