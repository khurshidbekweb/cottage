import "./Header.css";
import Search from "../../assets/images/search.svg";
import MiniSearch from "../../assets/images/mini-search.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="header-shadow">
        <header className="header">
          <h1 className="header-text">Шейхская резиденция</h1>
          <h2 className="header-num">$200</h2>
          <Link to="/view" className="header-btn">
            Просмотреть
          </Link>

          <div className="circles">
            <div className="circle active"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>

          <div className="header-menu">
            <div className="header-inner">
              <div className="header-inner-box">
                <p className="header-top">Расположение</p>

                <select className="header-select-one" name="place" id="place">
                  <option value="chorvoq">Чорвок</option>
                  <option value="chimyon">Чимган</option>
                  <option value="yusufxona">Юсуфхона</option>
                  <option value="burchimulla">Бурчумулла</option>
                  <option value="chirchiq">Чирчик</option>
                  <option value="oqtosh">Акташ</option>
                  <option value="xumson">Хумсан</option>
                </select>
              </div>

              <div className="header-inner-box">
                <p className="header-top">Тип отдыха</p>

                <select className="header-select-two" name="dacha" id="dacha">
                  <option value="dacha">Дача</option>
                  <option value="piknik">Пикник</option>
                  <option value="ribalka">Рыбалка</option>
                </select>
              </div>

              <div className="header-inner-box">
                <p className="header-top-usd">Цена</p>

                <input
                  className="header-nums"
                  type="text"
                  placeholder="300$ - 800$"
                />
              </div>
            </div>

            <Link to="/filter" className="header-search">
              <img
                className="mini-search"
                src={MiniSearch}
                width="22.99"
                height="22.97"
                alt="seach"
              />
              <img
                className="search-img"
                src={Search}
                width="34.49"
                height="34.45"
                alt="search"
              />
            </Link>
          </div>

          <div className="circles-next">
            <div className="circle active"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
