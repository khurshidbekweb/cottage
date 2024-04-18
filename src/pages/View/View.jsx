import "./View.css";
import { AiFillStar } from "react-icons/ai";

import { IMG_BASE_URL } from "../../constants/img.constants";
import { Link, useParams } from "react-router-dom";
import { ALL_DATA } from "../../Query/get_all";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Loader from "../../components/Loader/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";

import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FiPhoneCall } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";
import { Helmet } from "react-helmet-async";
import Dacha from "../../components/Dacha/Dacha";

const View = () => {
  const params = useParams();
  const [viewCottage, setViewCottage] = useState(null);

  const cottage = ALL_DATA.useCottage();
  const cottageView = cottage?.data?.find((e) => e.id === params.id);
  const mainImage = cottageView?.images?.find(
    (e) => e.isMainImage === true
  ).image;
  const childImage = [];
  cottageView?.images?.forEach((e) => {
    if (e.isMainImage !== true) {
      childImage.push(e);
    }
  });

  if (!mainImage) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Cottage</title>
        <meta name="description" content="single cottage page" />
        <link rel="canonical" href="/view" />
      </Helmet>
      <div className="viewWrapper">
        <div className="container">
          <BreacdCrumbs />
          <div className="view">
            <div className="imag-and-desc-wrap w-100 gap-3 d-flex">
              <div className="cottage-images">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: viewCottage }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {cottageView?.images &&
                    cottageView.images.map((img) => {
                      return (
                        <SwiperSlide key={img.id}>
                          <img
                            className="view-image"
                            src={`${IMG_BASE_URL}${img.image}`}
                            alt="img"
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
                <Swiper
                  onSwiper={setViewCottage}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {cottageView?.images &&
                    cottageView.images.map((img) => {
                      return (
                        <SwiperSlide key={img.id}>
                          <img
                            className="view-image-child"
                            src={`${IMG_BASE_URL}${img.image}`}
                            alt="img"
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
              <div className="contact-me">
                <div className="contactUSer">
                  <p>FOYDALANUVCHI</p>
                  <div className="contact__user">
                    {cottageView?.user.image ? (
                      <LazyLoadImage
                        src={`${IMG_BASE_URL}${cottageView?.user.image}`}
                        title="userImg"
                        height={40}
                        width={40}
                        effect="blur"
                      />
                    ) : (
                      <span>
                        <FaRegUserCircle size={23} />
                      </span>
                    )}
                    <p>{cottageView?.user.name}</p>
                  </div>
                  <Link
                    to={`/home/view/cottage/${cottageView?.user.id}`}
                    className="announCementLink"
                  >
                    <span>Barcha e'lonlar</span>
                    <span>
                      <IoIosArrowForward size={22} />
                    </span>
                  </Link>
                </div>
                <Link
                  to={`tel:+998${cottageView?.user.phone}`}
                  className="btn btn-outline-success callLink p-0 call-me mt-3 text-center"
                >
                  {" "}
                  <FiPhoneCall size={23} />{" "}
                  <span className="fs-5 fw-bold">Telefon qilish</span>
                </Link>
              </div>
            </div>
            <div className="phoneCallMobile">
              <div className="contactUSer">
                <p>FOYDALANUVCHI</p>
                <div className="contact__user">
                  {cottageView?.user.image ? (
                    <LazyLoadImage
                      src={`${IMG_BASE_URL}${cottageView?.user.image}`}
                      title="userImg"
                      height={40}
                      width={40}
                      effect="blur"
                    />
                  ) : (
                    <span>
                      <FaRegUserCircle size={23} />
                    </span>
                  )}
                  <p>{cottageView?.user.name || "Username"}</p>
                </div>
                <Link
                  to={`/home/view/cottage/${cottageView?.user.id}`}
                  className="announCementLink"
                >
                  <span>Barcha e'lonlar</span>
                  <span>
                    <IoIosArrowForward size={22} />
                  </span>
                </Link>
              </div>
              <Link
                to={`tel:+998${cottageView?.user.phone}`}
                className="btn btn-outline-success callLink p-0 call-me mt-3 text-center"
              >
                {" "}
                <FiPhoneCall size={23} />{" "}
                <span className="fs-5 fw-bold">Telefon qilish</span>
              </Link>
            </div>
            <div className="view-main">
              <h2 className="view-name">{cottageView?.name}</h2>
              <p className="view-location">
                {cottageView?.region?.name} viloyati, {cottageView?.place?.name}
              </p>
              <div className="view-stars">
                {" "}
                <AiFillStar className="view-star-active" />
                <AiFillStar className="view-star-active" />
                <AiFillStar className="view-star-active" />
                <AiFillStar className="view-star-active" />
                <AiFillStar className="view-star" />
              </div>

              <h3 className="view-h">Dam olish maskani haqida</h3>
              <pre className="view-p">{cottageView?.description}</pre>
            </div>

            <div>
              <p className="view-facility-header">Barcha qulayliklar</p>

              <div className="view-facilitys">
                {cottageView?.comforts?.length &&
                  cottageView.comforts.map((e) => {
                    return (
                      <div key={e.id} className="view-facility1">
                        <LazyLoadImage
                          src={`${IMG_BASE_URL}${e.image}`}
                          alt="img"
                          effect="blur"
                        />
                        <p className="view-facility-text">{e.name}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <MiniNaw />
      </div>
      <div className="mt-5">
        <Dacha />
      </div>
    </>
  );
};

export default View;
