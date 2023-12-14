import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Tarif.css";
import { Link } from "react-router-dom";

const Tarif = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="tarif">
          <h2 className="tarif-header font-bold">Тарифы</h2>

          <div className="tarif-cards">
            <div className="tarif-card">
              <p className="tarif-name">Стандарт</p>
              <div className="tarif-date1">15 <br /> дней</div>
              <p className="tarif-text">На тарифе стандарт ваши объявление будет активно в течении 15 дней</p>
              <Link className="tarif-btn" to='/pay'>Активировать за 50,000 UZS</Link>
            </div>

            <div className="tarif-line"></div>

            <div className="tarif-card">
              <p className="tarif-name">Премиум</p>
              <div className="tarif-date2">1 <br /> месяц</div>
              <p className="tarif-text">На тарифе стандарт ваши объявление будет активно в течении 30 дней</p>
              <Link className="tarif-btn" to='/pay'>Активировать за 65,000 UZS</Link>
            </div>

            <div className="tarif-line"></div>

            <div className="tarif-card">
              <p className="tarif-name">Бизнес</p>
              <div className="tarif-date3">2 <br /> месяц</div>
              <p className="tarif-text">На тарифе стандарт ваши объявление будет активно в течении 60 дней</p>
              <Link className="tarif-btn" to='/pay'>Активировать за 100,000 UZS</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tarif;
