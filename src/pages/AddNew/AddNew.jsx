import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Dacha3 from "../../assets/images/dacha3.png";
import AddImg from "../../assets/images/add-img.svg";
import "./AddNew.css";

import A1 from '../../assets/images/a1.svg'
import A2 from '../../assets/images/a2.svg'
import A3 from '../../assets/images/a3.svg'
import A4 from '../../assets/images/a4.svg'
import A5 from '../../assets/images/a5.svg'
import A6 from '../../assets/images/a6.svg'
import A7 from '../../assets/images/a7.svg'
import A8 from '../../assets/images/a8.svg'
import A9 from '../../assets/images/a9.svg'
import A10 from '../../assets/images/a10.svg'
import A11 from '../../assets/images/a11.svg'
import A12 from '../../assets/images/a12.svg'
import A13 from '../../assets/images/a13.svg'
import A14 from '../../assets/images/a14.svg'
import A15 from '../../assets/images/a15.svg'
import A16 from '../../assets/images/a16.svg'
import A17 from '../../assets/images/a17.svg'
import A18 from '../../assets/images/a18.svg'
import A19 from '../../assets/images/a19.svg'

import A20 from '../../assets/images/a20.svg'
import A21 from '../../assets/images/a21.svg'
import A22 from '../../assets/images/a22.svg'
import A23 from '../../assets/images/a23.svg'
import A24 from '../../assets/images/a24.svg'
import A25 from '../../assets/images/a25.svg'
import A26 from '../../assets/images/a26.svg'
import A27 from '../../assets/images/a27.svg'
import A28 from '../../assets/images/a28.svg'
import A29 from '../../assets/images/a29.svg'
import A30 from '../../assets/images/a30.svg'
import A31 from '../../assets/images/a31.svg'
import A32 from '../../assets/images/a32.svg'
import A33 from '../../assets/images/a33.svg'
import A34 from '../../assets/images/a34.svg'
import A35 from '../../assets/images/a35.svg'
import A36 from '../../assets/images/a36.svg'
import A37 from '../../assets/images/a37.svg'

const AddNew = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="addnew">
          <h3 className="addnew-header">Фото</h3>

          <div className="addnew-imgs">
            <div className="addnew-box">
              <label className="addnew-img-bg label-input-file">
                <input type="file" className="input-file" />
                <p className="addnew-img-text">Главный</p>
              </label>
              <img className="addnew-img" src={Dacha3} alt="add" />
            </div>

            {/* <label>
              <input type="file" name="da" id="" />
              <img className="addnew-img" src={Dacha3} alt="add" />
            </label> */}

            <div className="addnew-add">
              <label className="label-input-file">
                <input type="file" name="qoshimcha" className="input-file"/>
                <img src={AddImg} alt="add" />
                <p className="addnew-add-text">Добавить фото</p>
              </label>
            </div>
          </div>

          <div>
            <h3 className="addnew-header">Регион и тип отдыха</h3>

            <form>
              <label className="addnew-label" htmlFor="ftext">
                Регион
              </label>
              <br />
              <select className="addnew-select">
                <option value="region">Выберите регион</option>
              </select>
              <br />
              <hr className="addnew-hr" />
              <label className="addnew-label" htmlFor="ftext">
                Тип отдыха
              </label>

              <div className="addnew-inner">
                <div className="addnew-inner-check">
                  <input className="addnew-check" type="checkbox" />
                  <label htmlFor="ftext">Дача</label>
                </div>
                <div className="addnew-inner-check">
                  <input className="addnew-check" type="checkbox" />
                  <label htmlFor="ftext">Пикник</label>
                </div>
                <div className="addnew-inner-check">
                  <input className="addnew-check" type="checkbox" />
                  <label htmlFor="ftext">Рыбалка</label>
                </div>
              </div>
            </form>
          </div>

          <h3 className="addnew-header">Удобства</h3>

          <div className="addnew-objects">
            <div className="addnew-objects-l">
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A1} alt="img" />
                    <p className="addnew-object-text">Парковка</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A2} alt="img" />
                    <p className="addnew-object-text">WiFi</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A3} alt="img" />
                    <p className="addnew-object-text">Круглосуточная стойка регистрации</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A4} alt="img" />
                    <p className="addnew-object-text">Завтрак</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A5} alt="img" />
                    <p className="addnew-object-text">Обед/ужин</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A6} alt="img" />
                    <p className="addnew-object-text">Семейные номера</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A7} alt="img" />
                    <p className="addnew-object-text">Глажка</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A8} alt="img" />
                    <p className="addnew-object-text">Фитнес-центр</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A9} alt="img" />
                    <p className="addnew-object-text">Прачечная</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A10} alt="img" />
                    <p className="addnew-object-text">Бассейн</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A11} alt="img" />
                    <p className="addnew-object-text">Ресторан</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A12} alt="img" />
                    <p className="addnew-object-text">Место для курение/комната для курящих</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A13} alt="img" />
                    <p className="addnew-object-text">Трансфер от/до аеропорта/вокзал</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A14} alt="img" />
                    <p className="addnew-object-text">Настольный теннис</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A15} alt="img" />
                    <p className="addnew-object-text">Летняя кухня</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A16} alt="img" />
                    <p className="addnew-object-text">Мангал</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A17} alt="img" />
                    <p className="addnew-object-text">Бильярд</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A18} alt="img" />
                    <p className="addnew-object-text">Тапчан</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A19} alt="img" />
                    <p className="addnew-object-text">Сан.узел внутри дома</p>
                </div>
            </div>

            <div className="addnew-objects-r">
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A20} alt="img" />
                    <p className="addnew-object-text">Бар</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A21} alt="img" />
                    <p className="addnew-object-text">Детская зона</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A22} alt="img" />
                    <p className="addnew-object-text">Комната/зал для проведение переговорови конференц</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A23} alt="img" />
                    <p className="addnew-object-text">Телевизор</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A24} alt="img" />
                    <p className="addnew-object-text">Интернет</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A25} alt="img" />
                    <p className="addnew-object-text">Кондиционер</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A26} alt="img" />
                    <p className="addnew-object-text">Холодильник</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A27} alt="img" />
                    <p className="addnew-object-text">Летный бассейн</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A28} alt="img" />
                    <p className="addnew-object-text">Зимний бассейн</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A29} alt="img" />
                    <p className="addnew-object-text">Камин</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A30} alt="img" />
                    <p className="addnew-object-text">Сауна</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A31} alt="img" />
                    <p className="addnew-object-text">Домашние животные</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A32} alt="img" />
                    <p className="addnew-object-text">Пункт обмена валют</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A33} alt="img" />
                    <p className="addnew-object-text">Гараж</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A34} alt="img" />
                    <p className="addnew-object-text">Душ/ванна</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A35} alt="img" />
                    <p className="addnew-object-text">Горячая вода</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A36} alt="img" />
                    <p className="addnew-object-text">Детская площадка</p>
                </div>
                <div className="addnew-object">
                    <input className="addnew-check" type="checkbox" />
                    <img src={A37} alt="img" />
                    <p className="addnew-object-text">Барбекю</p>
                </div>
            </div>
          </div>

          <h3 className="addnew-header">Описание</h3>

          <input type="text" className="addnew-message" placeholder="Кратко опищите о вашый месте" />

          <button className="soxranit">Сохранить</button>
        </div>
      </div>
    </>
  );
};

export default AddNew;
