import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";
import Menu from "../../assets/images/menu.svg";
import Close from "../../assets/images/close.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useContext, useRef, useState } from "react";
import Modal from "react-modal";
import { FiHeart } from "react-icons/fi";
import UserMenu from "../../assets/images/user-menu.svg";
import GoOut from "../../assets/images/go-out.svg";
import UserModal from "../../assets/images/user-modal.svg";
import RedGoOut from "../../assets/images/red-go-out.svg";
import Notification from "../../Modals/Natification";
import { ALL_DATA } from "../../Query/get_all";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { cottageUtils } from "../../utils/cottage.utils";
import { NavLeng, NavberLinks } from "../../configs/language";
import { LanguageContext } from "../../helper/languageContext";

// icons
import { BsTelephoneFill } from "react-icons/bs";

Modal.setAppElement("#root");

const Navbar = (props) => {
  const userImg = ALL_DATA.useSingleUser()?.data?.image;
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const defaultLang = localStorage.getItem("language");
  const language = ALL_DATA.useLanguage();
  const cottageType = ALL_DATA.useCottageType();

  const cottage = ALL_DATA.useCottage();
  const fovariteCottage =
    cottage?.data?.length &&
    cottage?.data?.filter((e) => e.isLiked === true)?.length;

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const registered = useRef(null);
  const signIn = useRef(null);

  const handleCottageType = async (e) => {
    const type = await cottageUtils.getCottageType(e.target.value);
  };

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const logoutBtn = () => {
    signIn.current.classList.remove("d-none");
    registered.current.classList.add("d-none");
    localStorage.clear();
    setModalOpen(false);
    setModalIsOpen(false);
    window.location.reload();
    navigate("/");
  };
  const jumpLink = (e) => {
    window.location = e.target.value;
  };

  // language change
  const { languageChange, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <div className="container">
        <div className="navbar">
          <button onClick={() => setModalIsOpen(true)} className="menu">
            <img
              className="menu-img"
              src={Menu}
              width="14"
              height="12"
              alt="menu"
            />
            <p className="menu-text">Меню</p>
          </button>
          {/*  hamburger menu star */}
          <div
            className={`hamburgerMenu ${
              modalIsOpen ? "hamburgerMenuActive" : "hamburgerMenuClose"
            }`}
          >
            <button className="close" onClick={() => setModalIsOpen(false)}>
              <img src={Close} width="18.62" height="18.62" alt="close" />
            </button>
            <div className="modal-nav-menu">
              <select
                onChange={handleCottageType}
                className="modal-nav-select-one"
                name="dacha"
                id="dacha"
              >
                {cottageType.data?.length &&
                  cottageType.data.map((e) => {
                    return (
                      <option key={e.id} value={e.id}>
                        {e.name}
                      </option>
                    );
                  })}
              </select>

              <Link to="tel:+9981002314" className="modal-nav-contact d-black ">
                {NavLeng[languageChange].connection}
              </Link>
              <select
                defaultValue="socials"
                className="modal-nav-select-two"
                name="social"
                id="social"
              >
                <option hidden value="socials">
                  {NavLeng[languageChange].set}
                </option>
                <option value="telegram">Telegram</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">Youtube</option>
              </select>

              <select
                className="modal-nav-select-three"
                name="language"
                id="language"
                onChange={toggleLanguage}
              >
                {language.data?.length &&
                  language.data.map((e) => {
                    if (e.code === defaultLang) {
                      return (
                        <option key={e.id} selected value={e.code}>
                          {e.code}
                        </option>
                      );
                    }
                    return (
                      <option key={e.id} value={e.code}>
                        {e.code}
                      </option>
                    );
                  })}
              </select>

              <Link
                to="/sign-in"
                className={
                  accessToken && refreshToken
                    ? "modal-nav-out d-none"
                    : "modal-nav-out d-block"
                }
              >
                Вход
              </Link>
              <button
                onClick={logoutBtn}
                className={
                  accessToken && refreshToken
                    ? "modal-nav-out"
                    : "modal-nav-out d-none"
                }
              >
                <img src={GoOut} alt="" />
                Выход
              </button>
            </div>
          </div>
          {/*  hamburger menu end */}

          <Link to="/">
            <img
              className="logo"
              src={Logo}
              width="65"
              height="64"
              alt="logo"
            />
          </Link>
          <div className="navs align-items-center">
            <select
              className="select data_type_select fs-5"
              name="dacha"
              id="dacha"
              onChange={handleCottageType}
            >
              {cottageType.data?.length &&
                cottageType.data.map((e) => {
                  return (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  );
                })}
            </select>

            <Link to="tel:+9981002314" className="contact d-block ">
              {NavLeng[languageChange].connection}
            </Link>

            <select
              className="select-two form-select"
              name="social"
              id="social"
              onChange={jumpLink}
            >
              <option selected value="socials">
                {NavLeng[languageChange].set}
              </option>
              <option value="https://t.me/dachi_v_gorax">Telegram</option>
              <option value="https://facebook.com">Facebook</option>
              <option value="https://instagram.com">Instagram</option>
              <option value="https://youtube.com">Youtube</option>
            </select>

            <select
              className="select-three"
              name="language"
              onChange={toggleLanguage}
            >
              {language.data?.length &&
                language.data.map((e) => {
                  if (e.code === defaultLang) {
                    return (
                      <option key={e.id} selected value={e.code}>
                        {e.code}
                      </option>
                    );
                  }
                  return (
                    <option key={e.id} value={e.code}>
                      {e.code}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="icons">
            <Link to="/home/favorite" className="heart">
              <FiHeart className="heart-icon" />
              <span
                className={
                  fovariteCottage === 0 ? "fovarite-num d-none" : "fovarite-num"
                }
              >
                {fovariteCottage}
              </span>
            </Link>

            <div className="d-flex align-items-center">
              <Notification />
              <Link to={"tel:+998936222222"} className="phoneMobile">
                <BsTelephoneFill size={18} />
              </Link>
            </div>

            <button
              ref={registered}
              className={accessToken ? "sign-out" : "sign-out d-none"}
              onClick={openModal}
            >
              <img src={UserMenu} alt="" />
              <div className="user-nav">
                <img
                  src={`${IMG_BASE_URL}${userImg}`}
                  className={userImg ? "user-nav" : "user-nav d-none"}
                  alt=""
                />
              </div>
            </button>
            <Link
              ref={signIn}
              to="/sign-in"
              className={
                accessToken && refreshToken ? "sign-in d-none" : "sign-in"
              }
            >
              Вход
            </Link>
            <div className="icons">
              <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-nav-overlay"
                className="modal-nav-content"
              >
                <div className="user-modal-nav-top">
                  <p className="um-top-gmail">User@gmail.com</p>
                  <img
                    src={`${IMG_BASE_URL}${userImg}`}
                    className={userImg ? "um-top-img" : "d-none um-top-img"}
                    alt="userImg"
                  />
                </div>

                <Link
                  to="/home/profile/add-new"
                  className="um-text text-decoration-none"
                >
                  {NavberLinks[languageChange].add}
                </Link>
                <Link
                  to="/home/profile/announcement"
                  className="um-text text-decoration-none mt-2 d-block"
                >
                  {NavberLinks[languageChange].cottage}
                </Link>
                <Link
                  to="/home/profile/services"
                  className="um-text text-decoration-none mt-2 d-block"
                >
                  {NavberLinks[languageChange].services}
                </Link>

                <hr />

                <div className="user-modal-nav-profil">
                  <img src={UserModal} alt="user" />
                  <Link className="um-profil-link" to="/home/profile/user">
                    {NavberLinks[languageChange].profil}
                  </Link>
                </div>

                <Link to="/" className="user-modal-nav-out">
                  <img src={RedGoOut} alt="go-out" />
                  <button onClick={logoutBtn} className="um-out-btn">
                    {NavberLinks[languageChange].exit}
                  </button>
                </Link>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
