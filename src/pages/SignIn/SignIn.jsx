import "./SignIn.css";
import Eye from "../../assets/images/eye.svg";
import { useMutation } from "@tanstack/react-query";
import { authUtils } from "../../utils/auth.utils";
import { useRef } from "react";
import toastify from "../../utils/toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const smsForm = useRef(null)
  const phoneForm = useRef(null)

  const navigate = useNavigate()
  
  const phone = useMutation({
    mutationFn: authUtils.smsAuth,
    onSuccess: () => {
      toastify.successMessage("Login success")
    },
    onError: (err) => {
      console.log(err);
    }
  })

  const login = useMutation({
    mutationFn: authUtils.loginAuth,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken)
      localStorage.setItem("refreshToken", data.refreshToken)
      toastify.successMessage("Successfully logged in!")
      navigate("/")
    },
    onError: (err) => {
      console.log(err, "login")
    }
  })

  const handleAuth = (e) => {
    e.preventDefault()
    phone.mutate({
      phone: e.target.phonenumber.value
    })
    setTimeout(()=> {
      phoneForm.current.classList.add('d-none')
    }, 500)
    setTimeout(()=> {
      smsForm.current.classList.remove('d-none')
    }, 500)
  }
  const handleLogin = (e) => {
    e.preventDefault()    
    const code = e.target.smsCode.value
    const truthCode = phone?.data?.smsCode
    if(code===truthCode){
      login.mutate({
        smsCode: code,
        userId: phone?.data?.userId
      })
    }else{
      toastify.errorMessage('SMS code notog`ri !!!')
    }
    
  }
  return (
    <div className="signin">
      <div className="background">
        <div className="signin-box">
          <h2 className="signin-header">Вход</h2>
          <form onSubmit={handleAuth} ref={phoneForm}>
            <div className="input-text">
              <input
                className="signin-input-text"
                type="text"
                placeholder="Номер телефона"  
                name="phonenumber"             
              />
            </div>
            <input  type="submit" className="signin-submit mt-5" value={"Войти"}/>
          </form>

          <form onSubmit={handleLogin} ref={smsForm} className="d-none">
            <div className="input-password">
              <input
                className="signin-input-password"
                type="password"
                name="smsCode"
                placeholder="SMS code"
              />
              <img src={Eye} alt="password" />
            </div>
            <input  type="submit" className="signin-submit mt-5" value={"Войти"}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
