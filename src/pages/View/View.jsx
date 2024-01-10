import "./View.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AiFillStar } from "react-icons/ai";

import { useQuery } from "@tanstack/react-query";
import { cottageUtils } from "../../utils/cottage.utils";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { useParams } from "react-router-dom";

const View = () => {
  const params = useParams();

  const cottage = useQuery({
    queryKey: ["cottages"],
    queryFn: cottageUtils.getCottage,
  });
  const cottageView = cottage?.data?.find((e) => e.id === params.id);
  const mainImage = cottageView?.images?.find(
    (e) => e.isMainImage === true
    ).image;
  const childImage = []
  cottageView?.images?.forEach(e => {
    if(e.isMainImage !==true){
      childImage.push(e)
    }
  })
  
  return (
    <>
      <Navbar />

      <div className="container">
      <div className="view">
                <img
                  width={1100}
                  height={500}
                  className="view-img"
                  src={`${IMG_BASE_URL}${mainImage}`}
                  alt="img"
                />
                <div className="view-imgs">
                  {childImage?.length && childImage.map(e => {
                     return <img key={e.id} className="view-image" src={`${IMG_BASE_URL}${e.image}`} alt="img" />
                  })}
                </div>

                <div className="view-main">
                  <h2 className="view-name">{cottageView?.name}</h2>
                  <p className="view-location">{cottageView?.region?.name} viloyati, {cottageView?.place?.name}</p>
                  <div className="view-stars">
                    <AiFillStar className="view-star-active" />
                    <AiFillStar className="view-star-active" />
                    <AiFillStar className="view-star" />
                    <AiFillStar className="view-star" />
                    <AiFillStar className="view-star" />
                  </div>

                  <h3 className="view-h">Dam olish maskani haqida</h3>
                  <pre className="view-p">
                    {cottageView?.description}
                  </pre>
                </div>

                <div>
                  <p className="view-facility-header">Barcha qulayliklar</p>

                  <div className="view-facilitys">
                    {cottageView?.comforts?.length && cottageView.comforts.map(e =>{
                      return <div key={e.id} className="view-facility1">
                                <img src={`${IMG_BASE_URL}${e.image}`} alt="img" />
                                <p className="view-facility-text">{e.name}</p>
                              </div>
                    })}
                    {/* <div>                      
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
                    </div> */}

                    {/* <div>
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
                        <p className="view-facility-text">Фитнес-центр</p>
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
                        <p className="view-facility-text">Детская зона</p>
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
                        <p className="view-facility-text">Детская площадка</p>
                      </div>
                      <div className="view-facility1">
                        <img src={F32} alt="img" />
                        <p className="view-facility-text">Барбекю</p>
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
                    </div> */}
                  </div>
                </div>
              </div>
      </div>

      <Footer />
    </>
  );
};

export default View;
