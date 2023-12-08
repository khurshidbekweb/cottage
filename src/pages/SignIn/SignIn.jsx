import "./SignIn.css";
import Eye from "../../assets/images/eye.svg";
import Facebook from "../../assets/images/facebook-i.svg"
import Google from "../../assets/images/google-i.svg"
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {coustumAxios} from '../../service/loginAuth'

const SignIn = () => {
  const {googleSignIn, user} = UserAuth()
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const singIn = (e) => {
    e.preventDefault();
    const userInfo = {
      username: userName,
      password: password
    }
    if(userInfo.username.length===0 || userInfo.password.length===0){
      alert("Enter password or Username");
    }else{
      console.log(userInfo);
      coustumAxios.auth(userInfo).then(res => {
        if(res.status===200){
          localStorage.setItem("token", res.data.token);
          navigate("/dashboart")
        }
      })
    }
  }
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
                onChange={(e)=> setUserName(e.target.value)}
              />
            </div>
            <div className="input-password">
              <input
                className="signin-input-password"
                type="password"
                placeholder="Пароль"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <img src={Eye} alt="password" />
            </div>
            <p className="signin-p">Забыли пароль?</p>
            <input  onClick={(e)=> singIn(e)} type="submit" className="signin-submit" value={"Войти"}/>
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
