import "./View.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AiFillStar } from "react-icons/ai";

import { IMG_BASE_URL } from "../../constants/img.constants";
import {  useParams } from "react-router-dom";
import { ALL_DATA } from "../../Query/get_all";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Loader from "../../components/Loader/Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";


const View = () => {

  const params = useParams();

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
    <div className="viewWrapper">
      <Navbar />

      <div className="container">
        <div className="view">
          <LazyLoadImage
            className="view-imgmain"
            src={`${IMG_BASE_URL}${mainImage}`}
            alt="img"
            effect="blur"
          />
          <div className="view-imgs">
            {childImage?.length &&
              childImage.map((e) => {
                return (
                  <LazyLoadImage
                    key={e.id}
                    className="view-image"
                    src={`${IMG_BASE_URL}${e.image}`}
                    alt="img"
                    effect="blur"
                  />
                );
              })}
          </div>

          <div className="view-main">
            <h2 className="view-name">{cottageView?.name}</h2>
            <p className="view-location">
              {cottageView?.region?.name} viloyati, {cottageView?.place?.name}
            </p>
            <div className="view-stars">
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
                      <LazyLoadImage src={`${IMG_BASE_URL}${e.image}`} alt="img" effect="blur" />
                      <p className="view-facility-text">{e.name}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <MiniNaw />
      <Footer />
    </div>
  );
};

export default View;
