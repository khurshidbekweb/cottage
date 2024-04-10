import "./Footer.css";
import { Link } from "react-router-dom";

import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";
import Telegram from "../../assets/images/telegram.svg";
import Youtube from "../../assets/images/youtube.svg";

import {
  FooterHeadLeng,
  FooterLink1,
  FooterLink2,
  FooterLink3,
  FooterMiniLang,
} from "../../configs/language";

import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";

const Footer = () => {
  const { languageChange } = useContext(LanguageContext);
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-box">
            <h3 className="footer-headers">
              {FooterHeadLeng[languageChange].link1}
            </h3>
            <ul className="footer-list">
              {FooterLink1.map((el) => {
                return (
                  <li key={el.id} className="footer-item">
                    <Link to="/" className="footer-link">
                      {el.content[languageChange]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-box">
            <h3 className="footer-headers">
              {FooterHeadLeng[languageChange].link2}
            </h3>

            <ul className="footer-list">
              {FooterLink2.map((el) => {
                return (
                  <li key={el.id} className="footer-item">
                    <Link to="/" className="footer-link">
                      {el.content[languageChange]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-box">
            <h3 className="footer-headers">
              {FooterHeadLeng[languageChange].link3}
            </h3>

            <ul className="footer-list">
              {FooterLink3.map((el) => {
                return (
                  <li key={el.id} className="footer-item">
                    <Link to="/" className="footer-link">
                      {el.content[languageChange]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <h3 className="footer-header">Дачи в горах</h3>

        <div className="footer-bottom">
          <p className="footer-address">{FooterMiniLang[languageChange]}</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/" className="footer-social">
              <img src={Instagram} width="36" height="36" alt="instagram" />
            </a>

            <a href="https://www.facebook.com/" className="footer-social">
              <img src={Facebook} width="36" height="36" alt="facebook" />
            </a>

            <a href="https://telegram.org/" className="footer-social">
              <img src={Telegram} width="36" height="36" alt="telegram" />
            </a>

            <a href="https://www.youtube.com/" className="footer-social">
              <img src={Youtube} width="36" height="36" alt="youtube" />
            </a>
          </div>
          <p className="footer-text">©2022 Дача в горах. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
