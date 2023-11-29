import "./SignIn.css";
import Eye from "../../assets/images/eye.svg";
import Facebook from "../../assets/images/facebook-i.svg"
import Google from "../../assets/images/google-i.svg"
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignIn = () => {
  const {googleSignIn, user} = UserAuth()

  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user != null) {
      navigate('/')
    }
  }, [user])

  return (
    <div className="signin">
      <div className="background">
        <div className="signin-box">
          <h2 className="signin-header">Вход</h2>
          <form>
            <div className="input-text">
              <input
                className="signin-input-text"
                type="text"
                placeholder="Телефон или электрон почта"
              />
            </div>

            <div className="input-password">
              <input
                className="signin-input-password"
                type="password"
                placeholder="Пароль"
              />
              <img src={Eye} alt="password" />
            </div>

            <p className="signin-p">Забыли пароль?</p>

            <input className="signin-submit" type="submit" value="Войти" />
          </form>

          <div className="signin-socials">
            <button className="signin-fb"><img src={Facebook} alt="facebook" /></button>
            <button className="signin-tg" onClick={handleGoogleSignIn}><img src={Google} alt="google" /></button>
          </div>

          <p className="signin-hr"></p>

          <p className="signin-pp">У вас нет аккаунта?</p>

          <Link className="signin-up" to="/sign-up">Зарегстрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
