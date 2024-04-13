import "./FilterNav.css";

import FilterIcon from "../../assets/images/filter-icon.svg";
import Close from "../../assets/images/close.svg";
import FilterSearch from "../../assets/images/filter-search.svg";
import { HiMenu } from "react-icons/hi";
import { AiFillAppstore } from "react-icons/ai";

import Modal from "react-modal";
import React, { useState } from "react";
import LineCards from "../LineCards/LineCards";
import BlokCards from "../BlokCards/BlokCards";

const FilterNav = () => {
  const [modal, setModal] = useState(false);
  const [num, setNum] = useState(0);
  const [index, setIndex] = useState(0);

  return (
    <div className="container">
      <div className="filter-nav">
        <p className="filter-nav-header">Дачи</p>

        <div className="filter-nav-inner">
          <HiMenu
            className="list-icon"
            onClick={() => {
              setIndex(0);
            }}
          />
          <AiFillAppstore
            className="blok-icon"
            onClick={() => {
              setIndex(1);
            }}
          />

          <button onClick={() => setModal(true)} className="filter-nav-btn">
            <img src={FilterIcon} alt="icon" />
            <p className="filter-nav-p">Фильтр</p>
          </button>
        </div>

        <Modal
          isOpen={modal}
          className="fnav-modal"
          style={{
            overlay: { background: "#2C2D2E" },
            content: {
              padding: "36px 20px",
              position: "none",
              background: "#2C2D2E",
              border: "none",
              color: "#ffffff",
            },
          }}
        >
          <div className="fnav">
            <p className="fnav-header">Фильтр</p>

            <button className="fnav-close" onClick={() => setModal(false)}>
              <img src={Close} width="18.62" height="18.62" alt="close" />
            </button>
          </div>

          <div className="fnav-search">
            <input
              className="fnav-search-input"
              type="search"
              name=""
              id=""
              placeholder="Поиск по имени"
            />
            <div className="fnav-search-icon">
              <img src={FilterSearch} width="24" height="24" alt="search" />
            </div>
          </div>

          <div className="fnav-box">
            <div className="fnav-date-box">
              <div>
                <label className="fnav-label" htmlFor="fname">
                  Заезд
                </label>
                <br />
                <input className="fnav-date-input" type="date" name="" id="" />
              </div>

              <div>
                <label className="fnav-label" htmlFor="fname">
                  Заезд
                </label>
                <br />
                <input className="fnav-date-input" type="date" name="" id="" />
              </div>
            </div>

            <div>
              <label className="fnav-label" htmlFor="fname">
                Регион
              </label>
              <br />
              <select className="fnav-select" name="" id="">
                <option value="region">Выберите регион</option>
              </select>
            </div>

            <div>
              <label className="fnav-label" htmlFor="fname">
                Удобство
              </label>
              <br />
              <select className="fnav-select" name="" id="">
                <option value="region">0 выбран</option>
              </select>
            </div>

            <div className="fnav-nums">
              <label className="fnav-label" htmlFor="fnum">
                Комната и гости
              </label>
              <br />
              <div className="fnav-num-inputs">
                <input
                  className="fnav-num-input"
                  type="number"
                  name=""
                  id=""
                  placeholder="0 комнаты /"
                />
                <input
                  className="fnav-num-input"
                  type="number"
                  name=""
                  id=""
                  placeholder="0 взрослые /"
                />
                <input
                  className="fnav-num-input"
                  type="number"
                  name=""
                  id=""
                  placeholder="0 дети"
                />
              </div>
            </div>

            <div>
              <label className="fnav-label" htmlFor="frange">
                Звездный рейтинг
              </label>
              <br />
              <div className="fnav-range-nums">
                <p className="fnav-range-num">0</p>
                <p className="fnav-range-num">1</p>
                <p className="fnav-range-num">2</p>
                <p className="fnav-range-num">3</p>
                <p className="fnav-range-num">4</p>
                <p className="fnav-range-num">5</p>
              </div>
              <input
                className="fnav-range"
                type="range"
                min="0"
                max="100"
                step="20"
                name=""
                id=""
              />
            </div>

            <div>
              <label className="fnav-label" htmlFor="frange">
                Ценовой диапазон
              </label>
              <br />
              <div className="fnav-usds">
                <p className="fnav-usd">$0</p>
                <p className="fnav-usd">${num}</p>
              </div>
              <input
                className="fnav-range"
                type="range"
                min="0"
                max="2000"
                step="100"
                value={num}
                onChange={(e) => setNum(e.target.value)}
              />
            </div>

            <div>
              <label className="fnav-label" htmlFor="fname">
                Сортировать по
              </label>
              <br />
              <select className="fnav-select" name="" id="">
                <option value="region">Цены</option>
              </select>
            </div>
          </div>
        </Modal>
      </div>

      <div hidden={index !== 0}>
        <LineCards />
      </div>

      <div hidden={index !== 1}>
        <BlokCards />
      </div>
    </div>
  );
};

export default FilterNav;
