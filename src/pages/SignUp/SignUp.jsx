import "./SignUp.css";
import Eye from "../../assets/images/eye.svg";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up page" />
        <link rel="canonical" href="/signup" />
      </Helmet>
      <div className="signin">
        <div className="background">
          <div className="signup-box">
            <h2 className="signup-header">Регистрация</h2>

            <form className="signup-form">
              <div className="signup-text">
                <input className="signup-input" type="text" placeholder="Имя" />
              </div>

              <div className="signup-text">
                <input
                  className="signup-input"
                  type="text"
                  placeholder="Фамиля"
                />
              </div>

              <div className="signup-password">
                <input
                  className="signup-input"
                  type="password"
                  placeholder="Пароль"
                />
                <img src={Eye} alt="password" />
              </div>

              <div className="signup-password">
                <input
                  className="signup-input"
                  type="password"
                  placeholder="Повторите пароль"
                />
                <img src={Eye} alt="password" />
              </div>

              <div className="signup-checkbox">
                <input
                  className="signup-check"
                  type="checkbox"
                  id="check"
                  name="check"
                />
                <label className="signup-label">
                  Я согласен{" "}
                  <span className="signup-span">
                    с политикой конфиденциальности
                  </span>
                </label>
              </div>
              <input
                className="signup-submit"
                type="submit"
                value="Отправить код"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
