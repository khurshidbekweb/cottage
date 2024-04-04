import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Tarif.css";
import { Link } from "react-router-dom";
import Tariff from "../../Modals/Tariff";
import { ALL_DATA } from "../../Query/get_all";

const Tarif = () => {
  const [modal, setModal] = useState(false)
  const tariff = ALL_DATA.useTariff()
  console.log(tariff.data);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="tarif">
          <h2 className="tarif-header font-bold">Тарифы</h2>

          <div className="tarif-cards">
            {tariff.data?.length && tariff.data.map(el =>{
              return <div key={el.id} className="tarif-card">
                        <p className="tarif-name">Стандарт</p>
                        <div className="tarif-date1">{el.days} <br /> дней</div>
                        <p className="tarif-text">{el.description}</p>
                        <button className="tarif-btn border-0" el={el} onClick={()=>setModal(true)}>Активировать за {el.price}$</button>
                      </div>
            })}
            <div className="tarif-line"></div>


            <div className="tarif-card">
              <p className="tarif-name">Премиум</p>
              <div className="tarif-date2">1 <br /> месяц</div>
              <p className="tarif-text">На тарифе стандарт ваши объявление будет активно в течении 30 дней</p>
              <button onClick={()=>setModal(true)} className="tarif-btn border-0 ">Активировать за 65,000 UZS</button>
            </div>

            <div className="tarif-line"></div>

            <div className="tarif-card">
              <p className="tarif-name">Бизнес</p>
              <div className="tarif-date3">2 <br /> месяц</div>
              <p className="tarif-text">На тарифе стандарт ваши объявление будет активно в течении 60 дней</p>
              <button onClick={()=>setModal(true)} className="tarif-btn d-inline-block border-0">Активировать за 100,000 UZS</button>
            </div>
          </div>
        </div>
      </div>
      <Tariff tariff={tariff} modal={modal} modalFn={setModal}/>
      <Footer />
    </>
  );
};

export default Tarif;
