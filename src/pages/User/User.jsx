import "./User.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AddImg from "../../assets/images/add-img.svg";

const User = () => {

  console.log();
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="user">
          <h2 className="user-header">Профиль</h2>

          <div className="user-box">
            <div className="user-l">
              <label className="file-input__label">
                <input type="file" className="file-input__input curson-pointer">
                </input>
                <img src={AddImg} alt="img" />
              </label>
            </div>

            <div className="user-r">
              <div className="user-r-inner">
                <input className="user-input" type="tel" placeholder="Nomer" />
                <input className="user-input" type="email" placeholder="Email" />
              </div>

              <div className="user-r-inner">
                <input className="user-input" type="text" placeholder="Имя"/>
                <input className="user-input" type="text"placeholder="Фамиля"/>
              </div>

              <div>
                <input className="user-input" name="pssCeria" type="text" placeholder="AA 0000000"/>
                <p className="user-text ">
                  Что бы вы подать объявлении вам нужно вводить ваш серии номер
                  паспорта.
                </p>
              </div>

              <button className="user-btn mt-5">Сохранить</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default User;
