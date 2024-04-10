import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AddIcon from "../../assets/images/add.svg";
import Dacha1 from "../../assets/images/dacha1.png";
import Dacha2 from "../../assets/images/dacha2.png";
import Dacha3 from "../../assets/images/dacha3.png";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import MiniNav from "../../components/MiniNaw/MiniNaw";
import "./Add.css";

const Add = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="add">
          <div className="add-header">
            <h3 className="add-header-text">Подать объявлению</h3>

            <Link className="add-btn" to="/add-new">
              <img className="add-img" src={AddIcon} alt="add" />
              <p className="add-text">Подать объявление</p>
            </Link>
          </div>

          <div className="add-boxes">
            <div className="add-box">
              <img className="add-imgs" src={Dacha1} alt="imgs" />

              <h5 className="add-box-header">Дача GTA</h5>
              <p className="add-box-text">Ташкетская область, Акташ</p>

              <div className="add-stars">
                <AiFillStar className="add-star-active" />
                <AiFillStar className="add-star-active" />
                <AiFillStar className="add-star-active" />
                <AiFillStar className="add-star" />
                <AiFillStar className="add-star" />
              </div>

              <p className="add-box-text">Цена За День: 2,000,000 uzs</p>
              <p className="add-box-text">
                Цена За Выходной День: 3,000,000 uzs
              </p>

              <div className="add-link">
                <Link className="add-box-link" to="/view">
                  Подробное
                </Link>
              </div>

              <button className="add-box-btn">Рекламировать</button>
            </div>

            <div className="add-box">
              <div className="add-box-img">
                <div className="add-img-bg">
                  <p className="add-img-text">Не активное</p>
                </div>
                <img className="add-imgs" src={Dacha2} alt="" />
              </div>

              <h5 className="add-box-header">Дача GTA</h5>
              <p className="add-box-text">Ташкетская область, Акташ</p>

              <div className="add-stars">
                <AiFillStar className="add-star-active" />
                <AiFillStar className="add-star-active" />
                <AiFillStar className="add-star-active" />
                <AiFillStar className="add-star" />
                <AiFillStar className="add-star" />
              </div>

              <p className="add-box-text">Цена За День: 2,000,000 uzs</p>
              <p className="add-box-text">
                Цена За Выходной День: 3,000,000 uzs
              </p>

              <div className="add-link">
                <Link className="add-box-link" to="/view">
                  Подробное
                </Link>
              </div>

              <button className="add-box-btn">Рекламировать</button>
            </div>

            <div className="add-box">
              <div className="add-box-img">
                <div className="add-img-bg">
                  <p className="add-img-text">В ожидании</p>
                </div>
                <img className="add-imgs" src={Dacha3} alt="" />
              </div>

              <h5 className="add-box-header">Дача GTA</h5>
              <p className="add-box-text">Ташкетская область, Акташ</p>

              <div className="add-stars">
                <AiFillStar className="add-star-active" />
                <AiFillStar className="add-star-active" />
                <AiFillStar className="add-star-active" />
                <AiFillStar className="add-star" />
                <AiFillStar className="add-star" />
              </div>

              <p className="add-box-text">Цена За День: 2,000,000 uzs</p>
              <p className="add-box-text">
                Цена За Выходной День: 3,000,000 uzs
              </p>

              <div className="add-link">
                <Link className="add-box-link" to="/view">
                  Подробное
                </Link>
              </div>

              <button className="add-box-btn">Рекламировать</button>
            </div>
          </div>
        </div>
      </div>
      <MiniNav />
      <Footer />
    </>
  );
};

export default Add;
