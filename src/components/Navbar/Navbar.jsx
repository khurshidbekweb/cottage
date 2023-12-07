import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";
import Menu from "../../assets/images/menu.svg";
import Bell from "../../assets/images/bell.svg";
import MiniBell from "../../assets/images/mini-bell.svg";
import Close from "../../assets/images/close.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal from "react-modal";
import { FiHeart } from "react-icons/fi";
import { UserAuth } from "../../context/AuthContext";
import UserMenu from "../../assets/images/user-menu.svg";
import GoOut from "../../assets/images/go-out.svg";
import UserModal from "../../assets/images/user-modal.svg";
import RedGoOut from "../../assets/images/red-go-out.svg";

Modal.setAppElement("#root");

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
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

        <Modal
          isOpen={modalIsOpen}
          style={{
            overlay: { background: "#2C2D2E" },
            content: {
              padding: "39px 18.38px",
              position: "none",
              background: "#2C2D2E",
              border: "none",
              color: "#ffffff",
            },
          }}
        >
          <button className="close" onClick={() => setModalIsOpen(false)}>
            <img src={Close} width="18.62" height="18.62" alt="close" />
          </button>

          <div className="modal-menu">
            <select className="modal-select-one" name="dacha" id="dacha">
              <option value="dachi">Дачи</option>
              <option value="piknik">Пикник</option>
              <option value="ribalka">Рыбалка</option>
            </select>

            <Link to="/contact" className="modal-contact">
              Контакты
            </Link>

            <select className="modal-select-two" name="social" id="social">
              <option value="socials">Социальный сети</option>
              <option value="telegram">Telegram</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">Youtube</option>
            </select>

            <select
              className="modal-select-three"
              name="language"
              id="language"
            >
              <option value="uz">Uz</option>
              <option value="ru">Ру</option>
            </select>

            {user?.displayName ? (
              <button className="modal-out" onClick={handleSignOut}>
                <img src={GoOut} alt="" />
                Выход
              </button>
            ) : (
              <Link to="/sign-in" className="modal-btn">
                Вход
              </Link>
            )}
          </div>
        </Modal>

        <Link to="/">
          <img className="logo" src={Logo} width="65" height="64" alt="logo" />
        </Link>

        <div className="navs">
          <select className="select-one" name="dacha" id="dacha">
            <option value="dachi">Дачи</option>
            <option value="piknik">Пикник</option>
            <option value="ribalka">Рыбалка</option>
          </select>

          <Link to="/contact" className="contact">
            Контакты
          </Link>

          <select className="select-two" name="social" id="social">
            <option value="socials">Социальный сети</option>
            <option value="telegram">Telegram</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="youtube">Youtube</option>
          </select>

          <select className="select-three" name="language" id="language">
            <option value="ru">Ру</option>
            <option value="uz">Uz</option>
          </select>
        </div>

        <div className="icons">
          <Link to="/favorite" className="heart">
            <FiHeart className="heart-icon" />
          </Link>

          <div className="bell">
            <img
              className="minibell-img"
              src={MiniBell}
              width="14.77"
              height="16.88"
              alt="bell"
            />
            <img
              className="bell-img"
              src={Bell}
              width="26.25"
              height="30"
              alt="bell"
            />
          </div>

          {user?.displayName ? (
            <button className="sign-out" onClick={openModal}>
              <img src={UserMenu} alt="" />
              <div className="user-nav"></div>
            </button>
          ) : (
            <Link to="/sign-in" className="sign-in">
              Вход
            </Link>
          )}

          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <div className="user-modal-top">
              <p className="um-top-gmail">User@gmail.com</p>
              <div className="um-top-img"></div>
            </div>

            <p className="um-text">Подать объявление</p>
            <p className="um-text">Мои объявлении </p>

            <hr />

            <div className="user-modal-profil">
              <img src={UserModal} alt="user" />
              <Link className="um-profil-link" to="/user">Профиль</Link>
            </div>

            <div className="user-modal-out">
              <img src={RedGoOut} alt="go-out" />
              <button className="um-out-btn" onClick={handleSignOut}>Выход</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
