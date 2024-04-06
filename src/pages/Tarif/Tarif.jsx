
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Tarif.css";
import Tariff from "../../Modals/Tariff";
import { ALL_DATA } from "../../Query/get_all";

const Tarif = () => {
  const tariff = ALL_DATA.useTariff()
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="tarif">
          <h2 className="tarif-header font-bold">Тарифы</h2>

          <div className="tarif-cards wrap-tarif-cards">
            {tariff.data?.length && tariff.data.map((el, i) =>{
              console.log(el, "odofo");
              return <div key={el.id} className="tarif-cards">
                        <div  className={i>=3?"tarif-card mt-4":"tarif-card"} >
                            <p className="tarif-name">{el.service.serviceCode}</p>
                            <div className="tarif-date1">{el.days} <br /> дней</div>
                            <p className="tarif-text">{el.description}</p>
                            <Tariff tariff={el} id={el.id}/>
                        </div>
                      <div  className={tariff.data.length === i+1 || i===2 ? "tarif-line d-none":"tarif-line"}></div>        
              </div>
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tarif;
