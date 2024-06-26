import React from "react";
import "./Services.css";
import Footer from "../../components/Footer/Footer";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import { Link } from "react-router-dom";
import { ALL_DATA } from "../../Query/get_all";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet-async";
import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";

const Services = () => {
  const services = ALL_DATA.useServices();

  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta name="description" content="Services page" />
        <link rel="canonical" href="/services" />
      </Helmet>
      <div className="container">
      <BreacdCrumbs/>
        <h1>Services</h1>
        <div className="services-wrap">
          {services.data?.length &&
            services.data.map((el) => {
              return (
                <div key={el.id} className="services-card">
                  <LazyLoadImage
                    effect="bulr"
                    src={`${IMG_BASE_URL}${el.images[0]}`}
                    alt={el.name}
                    className="services-caer-img"
                  />
                  <h4 className="services-card-name">{el.name}</h4>
                  <p className="services-card-description">{el.description}</p>
                  <Link className="services-card-link" to="/tarif">
                    View tariff
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <MiniNaw />
    </>
  );
};

export default Services;
