import "./Filters.css";
import FilterSearch from "../../assets/images/filter-search.svg";
import React, { useState } from "react";

const Filters = () => {
  const [data, setData] = useState(0);

  return (
    <div className="container">
      <div className="filters">
        <h2 className="filter-header">Фильтр</h2>

        <div className="filter-box">
          <div className="filter-box1">
            <div className="fbox1-inner">
              <div className="filter-boxes">
                <label className="filter-label" htmlFor="fdate">
                  Заезд
                </label>
                <br />
                <input className="finput-date" type="date" name="" id="" />
              </div>

              <div className="filter-boxes">
                <label className="filter-label" htmlFor="fdate">
                  Выезд
                </label>
                <br />
                <input className="finput-date" type="date" name="" id="" />
              </div>
            </div>

            <div className="filter-boxes">
              <label className="filter-label" htmlFor="fregion">
                Регион
              </label>
              <br />
              <select className="finput-select" name="" id="">
                <option value="region">Выберите регион</option>
              </select>
            </div>

            <div className="filter-boxes">
              <label className="filter-label" htmlFor="fusd">
                Тип место
              </label>
              <br />
              <select className="finput-select" name="" id="">
                <option value="region">Выберите тип отдыха</option>
              </select>
            </div>
          </div>

          <div className="filter-box2">
            <div className="filter-boxes">
              <label className="filter-label" htmlFor="fregion">
                Удобство
              </label>
              <br />
              <select className="fbox2-select" name="" id="">
                <option value="region">0 выбран</option>
              </select>
            </div>

            <div className="filter-boxes">
              <label className="filter-label" htmlFor="fnum">
                Комната и гости
              </label>
              <br />
              <div className="fbox2-input">
                <input
                  className="filter-nums"
                  type="number"
                  name=""
                  id=""
                  placeholder="0 комнаты /"
                />
                <input
                  className="filter-nums"
                  type="number"
                  name=""
                  id=""
                  placeholder="0 взрослые /"
                />
                <input
                  className="filter-nums"
                  type="number"
                  name=""
                  id=""
                  placeholder="0 дети"
                />
              </div>
            </div>

            <div className="fbox2-search">
              <input
                className="fbox2-searchs"
                type="search"
                name=""
                id=""
                placeholder="Поиск по имени"
              />
              <div className="filter-search">
                <img src={FilterSearch} width="24" height="24" alt="search" />
              </div>
            </div>
          </div>

          <div className="filter-box3">
            <div className="fbox3-one">
              <label className="filter-label" htmlFor="frange">
                Звездный рейтинг
              </label>
              <br />
              <div className="fbox3-range-nums">
                <p className="fbox3-range-num">0</p>
                <p className="fbox3-range-num">1</p>
                <p className="fbox3-range-num">2</p>
                <p className="fbox3-range-num">3</p>
                <p className="fbox3-range-num">4</p>
                <p className="fbox3-range-num">5</p>
              </div>
              <input
                className="filter-range1"
                type="range"
                min="0"
                max="100"
                step="20"
                name=""
                id=""
              />
            </div>

            <div className="fbox3-two">
              <label className="filter-label" htmlFor="frange">
                Ценовой диапазон
              </label>
              <br />
              <div className="fbox3-usds">
                <p className="fbox3-usd">$0</p>
                <p className="fbox3-usd">${data}</p>
              </div>
              <input
                className="filter-range1"
                type="range"
                min="0"
                max="2000"
                step="100"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <div className="fbox3-three">
              <label className="filter-label" htmlFor="fusd">Сортировать по</label><br />
              <select className="fbox3-select" name="" id="">
                <option value="usd">Цены</option>
              </select>
            </div>
          </div>
        </div>
        <button className="filter-btn">Очистить</button>
      </div>
    </div>
  );
};

export default Filters;
