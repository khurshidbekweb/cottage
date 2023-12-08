import "./View.css";
import ViewImg from "../../assets/images/view-img.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AiFillStar } from "react-icons/ai";
import F1 from "../../assets/images/f1.svg";
import F2 from "../../assets/images/f2.svg";
import F3 from "../../assets/images/f3.svg";
import F4 from "../../assets/images/f4.svg";
import F5 from "../../assets/images/f5.svg";
import F6 from "../../assets/images/f6.svg";
import F7 from "../../assets/images/f7.svg";
import F8 from "../../assets/images/f8.svg";
import F9 from "../../assets/images/f9.svg";
import F10 from "../../assets/images/f10.svg";
import F11 from "../../assets/images/f11.svg";

import F12 from "../../assets/images/f12.svg";
import F13 from "../../assets/images/f13.svg";
import F14 from "../../assets/images/f14.svg";
import F15 from "../../assets/images/f15.svg";
import F16 from "../../assets/images/f16.svg";
import F17 from "../../assets/images/f17.svg";
import F18 from "../../assets/images/f18.svg";
import F19 from "../../assets/images/f19.svg";
import F20 from "../../assets/images/f20.svg";
import F21 from "../../assets/images/f21.svg";
import F22 from "../../assets/images/f22.svg";
import F23 from "../../assets/images/f23.svg";
import F24 from "../../assets/images/f24.svg";

import F25 from "../../assets/images/f25.svg";
import F26 from "../../assets/images/f26.svg";
import F27 from "../../assets/images/f27.svg";
import F28 from "../../assets/images/f28.svg";
import F29 from "../../assets/images/f29.svg";
import F30 from "../../assets/images/f30.svg";
import F31 from "../../assets/images/f31.svg";
import F32 from "../../assets/images/f32.svg";
import F33 from "../../assets/images/f33.svg";
import F34 from "../../assets/images/f34.svg";
import F35 from "../../assets/images/f35.svg";
import F36 from "../../assets/images/f36.svg";

const View = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="view">
          <img className="view-img" src={ViewImg} alt="img" />
          <div className="view-imgs">
            <img className="view-image" src={ViewImg} alt="img" />
            <img className="view-image" src={ViewImg} alt="img" />
            <img className="view-image" src={ViewImg} alt="img" />
            <img className="view-image" src={ViewImg} alt="img" />
          </div>

          <div className="view-main">
            <h2 className="view-name">Дача GTA</h2>
            <p className="view-location">Ташкетская область, Акташ</p>
            <div className="view-stars">
              <AiFillStar className="view-star-active" />
              <AiFillStar className="view-star-active" />
              <AiFillStar className="view-star-active" />
              <AiFillStar className="view-star" />
              <AiFillStar className="view-star" />
            </div>

            <h3 className="view-h">О зона отдыха</h3>
            <p className="view-p">
              «Дача GTA» Зона отдыха в Акташе. <br /> <br /> Горный и свежий
              воздух! <br />
              <br /> 4-х разовое вкусное питание! <br />
              <br /> Уютные номера! <br />
              <br /> До 4 лет бесплатно <br />
              <br /> - Номера все стандартные (10Койки, тумбочки, вешалка, сан
              узел). <br />
              <br /> - Территория 16 соток. <br />
              <br /> - На территории запрещено употреблять алкоголь и заходить в
              не трезвом состоянии. <br />
              <br /> - Приобретенные путевки к возврату не подлежат! <br />
              <br /> В стоимость входит проживание и 4-х разовое питание
            </p>
          </div>

          <div>
            <p className="view-facility-header">Все удобства</p>

            <div  className="view-facilitys">
              <div>
                <div className="view-facility1">
                  <img src={F1} alt="img" />
                  <p className="view-facility-text">Парковка</p>
                </div>
                <div className="view-facility1">
                  <img src={F2} alt="img" />
                  <p className="view-facility-text">WiFi</p>
                </div>
                <div className="view-facility1">
                  <img src={F3} alt="img" />
                  <p className="view-facility-text">
                    Круглосуточная стойка регистрации
                  </p>
                </div>
                <div className="view-facility1">
                  <img src={F4} alt="img" />
                  <p className="view-facility-text">Завтрак</p>
                </div>
                <div className="view-facility1">
                  <img src={F5} alt="img" />
                  <p className="view-facility-text">Обед/ужин</p>
                </div>
                <div className="view-facility1">
                  <img src={F6} alt="img" />
                  <p className="view-facility-text">Ресторан</p>
                </div>
                <div className="view-facility1">
                  <img src={F7} alt="img" />
                  <p className="view-facility-text">
                    Место для курение/комната для курящих
                  </p>
                </div>
                <div className="view-facility1">
                  <img src={F8} alt="img" />
                  <p className="view-facility-text">
                    Трансфер от/до аеропорта/ вокзал
                  </p>
                </div>
                <div className="view-facility1">
                  <img src={F9} alt="img" />
                  <p className="view-facility-text">Домашние животные</p>
                </div>
                <div className="view-facility1">
                  <img src={F10} alt="img" />
                  <p className="view-facility-text">Пункт обмена валют</p>
                </div>
                <div className="view-facility1">
                  <img src={F11} alt="img" />
                  <p className="view-facility-text">Летный бассейн</p>
                </div>
                <div className="view-facility1">
                  <img src={F11} alt="img" />
                  <p className="view-facility-text">Зимний бассейн</p>
                </div>
              </div>

              <div>
                <div className="view-facility1">
                  <img src={F12} alt="img" />
                  <p className="view-facility-text">Семейные номера</p>
                </div>
                <div className="view-facility1">
                  <img src={F13} alt="img" />
                  <p className="view-facility-text">Глажка</p>
                </div>
                <div className="view-facility1">
                  <img src={F14} alt="img" />
                  <p className="view-facility-text">
                  Фитнес-центр
                  </p>
                </div>
                <div className="view-facility1">
                  <img src={F15} alt="img" />
                  <p className="view-facility-text">Прачечная</p>
                </div>
                <div className="view-facility1">
                  <img src={F16} alt="img" />
                  <p className="view-facility-text">Бассейн</p>
                </div>
                <div className="view-facility1">
                  <img src={F17} alt="img" />
                  <p className="view-facility-text">Бар</p>
                </div>
                <div className="view-facility1">
                  <img src={F18} alt="img" />
                  <p className="view-facility-text">
                  Детская зона
                  </p>
                </div>
                <div className="view-facility1">
                  <img src={F19} alt="img" />
                  <p className="view-facility-text">
                  Комната/зал для проведение переговорови конференц
                  </p>
                </div>
                <div className="view-facility1">
                  <img src={F20} alt="img" />
                  <p className="view-facility-text">Телевизор</p>
                </div>
                <div className="view-facility1">
                  <img src={F21} alt="img" />
                  <p className="view-facility-text">Интернет</p>
                </div>
                <div className="view-facility1">
                  <img src={F22} alt="img" />
                  <p className="view-facility-text">Кондиционер</p>
                </div>
                <div className="view-facility1">
                  <img src={F23} alt="img" />
                  <p className="view-facility-text">Камин</p>
                </div>
                <div className="view-facility1">
                  <img src={F24} alt="img" />
                  <p className="view-facility-text">Холодильник</p>
                </div>
              </div>

              <div className="view-facility-box">
                <div className="view-facility1">
                  <img src={F25} alt="img" />
                  <p className="view-facility-text">Бильярд</p>
                </div>
                <div className="view-facility1">
                  <img src={F26} alt="img" />
                  <p className="view-facility-text">Тапчан</p>
                </div>
                <div className="view-facility1">
                  <img src={F27} alt="img" />
                  <p className="view-facility-text">
                  Сан.узел внутри дома
                  </p>
                </div>
                <div className="view-facility1">
                  <img src={F28} alt="img" />
                  <p className="view-facility-text">Гараж</p>
                </div>
                <div className="view-facility1">
                  <img src={F29} alt="img" />
                  <p className="view-facility-text">Душ/ванна</p>
                </div>
                <div className="view-facility1">
                  <img src={F30} alt="img" />
                  <p className="view-facility-text">Горячая вода</p>
                </div>
                <div className="view-facility1">
                  <img src={F31} alt="img" />
                  <p className="view-facility-text">
                  Детская площадка
                  </p>
                </div>
                <div className="view-facility1">
                  <img src={F32} alt="img" />
                  <p className="view-facility-text">
                  Барбекю
                  </p>
                </div>
                <div className="view-facility1">
                  <img src={F33} alt="img" />
                  <p className="view-facility-text">Сауна</p>
                </div>
                <div className="view-facility1">
                  <img src={F34} alt="img" />
                  <p className="view-facility-text">Настольный теннис</p>
                </div>
                <div className="view-facility1">
                  <img src={F35} alt="img" />
                  <p className="view-facility-text">Летняя кухня</p>
                </div>
                <div className="view-facility1">
                  <img src={F36} alt="img" />
                  <p className="view-facility-text">Мангал</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default View;
