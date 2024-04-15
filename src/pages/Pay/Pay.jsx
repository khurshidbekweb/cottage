import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Payme from "../../assets/images/payme.svg";
import Click from "../../assets/images/click.svg";
import "./Pay.css";
import { Link } from "react-router-dom";
import MiniNaw from "../../components/MiniNaw/MiniNaw";

const Pay = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="pay">
          <h2 className="pay-header">Выберите способ оплаты</h2>
          <p className="pay-text">
            Вы выбрали тарифный план “Стандарт” чтобы объявить ваше место отдыха
            за 50,000 сума через:
          </p>

          <div className="payme">
            <img src={Payme} alt="payme" />
            <Link className="pay-btn" to="/to-pay">
              Оплатить
            </Link>
          </div>
          <div className="click">
            <img src={Click} alt="click" />
            <Link className="pay-btn" to="/to-pay">
              Оплатить
            </Link>
          </div>
        </div>
      </div>
      <MiniNaw />
      <Footer />
    </>
  );
};

export default Pay;
