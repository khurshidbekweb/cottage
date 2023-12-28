import "./Navbar.css";
import Logo from "../../assets/images/logo.svg";
import Menu from "../../assets/images/menu.svg";
import Close from "../../assets/images/close.svg";
import { Link, useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import Modal from "react-modal";
import { FiHeart } from "react-icons/fi";
// import { UserAuth } from "../../context/AuthContext";
import UserMenu from "../../assets/images/user-menu.svg";
import GoOut from "../../assets/images/go-out.svg";
import UserModal from "../../assets/images/user-modal.svg";
import RedGoOut from "../../assets/images/red-go-out.svg";
import Notification from "../../Modals/Natification";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { languageUtils } from "../../utils/language.utils";
import { cottageTypeUtils } from "../../utils/cottage-type.utils";

Modal.setAppElement("#root");

const Navbar = () => {  
  const navigate = useNavigate()
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const defaultLang = localStorage.getItem("language");
  const queryClient = useQueryClient();
  const language = useQuery({
    queryKey: ["languages"],
    queryFn: languageUtils.getLanguage,
  });
  const cottageType = useQuery({
    queryKey: ["cottagetypes"],
    queryFn: cottageTypeUtils.getCottageType,
  });
  const changetLang = (e) => {
    e.preventDefault();
    localStorage.setItem("language", e.target.value);
    queryClient.invalidateQueries({ type: "all" });
  };




  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }
  const registered = useRef(null)
  const signIn = useRef(null)

  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const logoutBtn =() => {
    signIn.current.classList.remove('d-none')
    registered.current.classList.add('d-none')  
    localStorage.removeItem("accessToken")
    localStorage.removeItem('refreshToken')
    setModalOpen(false);
    navigate('/')
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

          <div className="modal-nav-menu">
            <select className="modal-nav-select-one" name="dacha" id="dacha">
              {cottageType.data?.length &&
                cottageType.data.map((e) => {
                  return (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  );
                })}
            </select>

            <Link to="/contact" className="modal-nav-contact">
              Контакты
            </Link>
            <select className="modal-nav-select-two" name="social" id="social">
              <option hidden value="socials">
                Социальный сети
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
              onChange={changetLang}
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

            {/* {user?.displayName ? (
              <button className="modal-nav-out" onClick={handleSignOut}>
                <img src={GoOut} alt="" />
                Выход
              </button>
            ) : (
              <Link to="/sign-in" className="modal-nav-btn">
                Вход
              </Link>
            )} */}
            <Link to="/sign-in" className="modal-nav-out">
              <img src={GoOut} alt="" />
              Выход
            </Link>
          </div>
        </Modal>

        <Link to="/">
          <img className="logo" src={Logo} width="65" height="64" alt="logo" />
        </Link>

        <div className="navs align-items-center">
          <select
            className="select fs-5 form-select border-0"
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

          <Link to="/contact" className="contact d-block">
            Контакты
          </Link>

          <select className="select-two" name="social" id="social">
            <option hidden value="socials">
              Социальный сети
            </option>
            <option value="telegram">Telegram</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="youtube">Youtube</option>
          </select>

          <select
            className="select-three"
            name="language"
            onChange={changetLang}
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
          <Link to="/favorite" className="heart">
            <FiHeart className="heart-icon" />
          </Link>

          <Notification />

          {/* {user?.displayName ? (
            <button className="sign-out" onClick={openModal}>
              <img src={UserMenu} alt="" />
              <div className="user-nav"></div>
            </button>
          ) : (
            <Link to="/sign-in" className="sign-in">
              Вход
            </Link>
          )} */}
          <button ref={registered} className={accessToken?'sign-out':"sign-out d-none"} onClick={openModal}>
            <img src={UserMenu} alt="" />
            <div className="user-nav"></div>
          </button>
          <Link ref={signIn} to="/sign-in" className={accessToken && refreshToken ? "sign-in d-none" : "sign-in"}>
            Вход
          </Link>

          <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-nav-overlay"
            className="modal-nav-content"
          >
            <div className="user-modal-nav-top">
              <p className="um-top-gmail">User@gmail.com</p>
              <div className="um-top-img"></div>
            </div>

            <Link to="/add-new" className="um-text text-decoration-none">
              Подать объявление
            </Link>
            <Link
              to="/announcement"
              className="um-text text-decoration-none mt-2 d-block"
            >
              {" "}
              Мои объявлении
            </Link>

            <hr />

            <div className="user-modal-nav-profil">
              <img src={UserModal} alt="user" />
              <Link className="um-profil-link" to="/user">
                Профиль
              </Link>
            </div>

            <Link to="/" className="user-modal-nav-out">
              <img src={RedGoOut} alt="go-out" />
              <button onClick={logoutBtn} className="um-out-btn">Выход</button>
            </Link>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
