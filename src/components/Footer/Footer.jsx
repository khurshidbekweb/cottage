import "./Footer.css"
import { Link } from "react-router-dom";
import Instagram from "../../assets/images/instagram.svg"
import Facebook from "../../assets/images/facebook.svg"
import Telegram from "../../assets/images/telegram.svg"
import Youtube from "../../assets/images/youtube.svg"

const Footer = () => {
    return (
        <div className="container">
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-box">
                        <h3 className="footer-headers">Поддержка</h3>

                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link className="footer-link">Часто задаваемые вопросы</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link">Наши контакт</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-box">
                        <h3 className="footer-headers">Компания</h3>

                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link className="footer-link">О нас</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link">Политика конфиденциальности</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link">Пользовательское соглашение</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-box">
                        <h3 className="footer-headers">Cотрудничество</h3>

                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link className="footer-link">Дачи</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link">Месты рыбалки</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link">Месты пикник</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <h3 className="footer-header">Дачи в горах</h3>

                <div className="footer-bottom">
                    <p className="footer-address">Ташкент, у. Амир емура 7</p>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/" className="footer-social">
                            <img src={Instagram} width='36' height='36' alt="instagram" />
                        </a>

                        <a href="https://www.facebook.com/" className="footer-social">
                            <img src={Facebook} width='36' height='36' alt="facebook" />
                        </a>

                        <a href="https://telegram.org/" className="footer-social">
                            <img src={Telegram} width='36' height='36' alt="telegram" />
                        </a>

                        <a href="https://www.youtube.com/" className="footer-social">
                            <img src={Youtube} width='36' height='36' alt="youtube" />
                        </a>
                    </div>
                    <p className="footer-text">©2022 Дача в горах. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;