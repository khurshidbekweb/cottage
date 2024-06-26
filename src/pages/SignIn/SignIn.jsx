import "./SignIn.css";
import Eye from "../../assets/images/eye.svg";
import EyeSlash from "../../assets/images/eyeSlash.svg";

import { useMutation } from "@tanstack/react-query";
import { authUtils } from "../../utils/auth.utils";
import { useRef, useState } from "react";
import toastify from "../../utils/toastify";
import { useNavigate } from "react-router-dom";
import Cleave from "cleave.js/react";

import custimAxios from "../../configs/axios.config";
import { Helmet } from "react-helmet-async";


const SignIn = () => {
  const smsForm = useRef(null);
  const phoneForm = useRef(null);
  const smsInput = useRef(null);
  const navigate = useNavigate();

  // eye btn
  const [passwordShow, setPasswordShow] = useState(true);

  const phone = useMutation({
    mutationFn: authUtils.smsAuth,
    onSuccess: (data) => {
      smsInput.current.value = data.smsCode;
      toastify.successMessage("Login success");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const login = useMutation({
    mutationFn: authUtils.loginAuth,
    onSuccess: (data) => {
      toastify.successMessage("Successfully logged in!");
      navigate("/home/profile/user");
    },
    onError: (err) => {
      console.log(err, "login");
    },
  });

  const handleAuth = (e) => {
    e.preventDefault();
    console.log(e.target.phonenumber.value.replaceAll(" ", "").slice(4));
    phone.mutate({
      phone: e.target.phonenumber.value.replaceAll(" ", "").slice(4),
    });
    setTimeout(() => {
      phoneForm.current.classList.add("d-none");
    }, 500);
    setTimeout(() => {
      smsForm.current.classList.remove("d-none");
    }, 500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const code = e.target.smsCode.value;
    const truthCode = phone?.data?.smsCode;
    if (code === truthCode) {
      login.mutate({
        smsCode: code,
        userId: phone?.data?.userId,
      });
    } else {
      toastify.errorMessage("SMS code notog`ri !!!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Sign In page" />
        <link rel="canonical" href="/signin" />
      </Helmet>
      <div className="signin">
        <div className="background">
          <div className="signin-box">
            <h2 className="signin-header">Вход</h2>
            <form onSubmit={handleAuth} ref={phoneForm}>
              <div className="input-text">
                <label className="d-flex flex-column gap-3">
                  <span className="text-light label-text ">
                    Enter your phone:{" "}
                  </span>
                  <Cleave
                    options={{
                      prefix: "+998",
                      delimiter: " ",
                      blocks: [4, 2, 3, 2, 2],
                      numericOnly: true,
                    }}
                    placeholder="Phone number"
                    className="signin-input-text"
                    name="phonenumber"
                    required
                  />
                </label>
              </div>
              <button type="submit" className="signin-submit mt-5">
                Войти
              </button>
            </form>

            <form onSubmit={handleLogin} ref={smsForm} className="d-none">
              <div className="input-password">
                <input
                  className="signin-input-password"
                  type={`${passwordShow ? "password" : "text"}`}
                  ref={smsInput}
                  name="smsCode"
                  placeholder="SMS code"
                />
                <button
                  type="button"
                  className="passwordBtn"
                  onClick={() => setPasswordShow((prev) => !prev)}
                >
                  <img
                    src={passwordShow ? Eye : EyeSlash}
                    alt="password"
                    className="passwordIcon"
                  />
                </button>
              </div>
              <button type="submit" className="signin-submit mt-5">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
