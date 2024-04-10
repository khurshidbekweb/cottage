import "./SignIn.css";
import Eye from "../../assets/images/eye.svg";
import { useMutation } from "@tanstack/react-query";
import { authUtils } from "../../utils/auth.utils";
import { useState } from "react";

const SmsPage = () => {
  const [time, setTime] = useState(120);
  const login = useMutation({
    mutationFn: authUtils.loginAuth,
    onSuccess: (data) => {
      console.log(data);
      alert("Login success");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  setInterval(() => {}, 1000);

  const handleSms = (e) => {
    e.preventDefault(e);
    login.mutate({ smsCode: e.target.smsCode, userId: "" });
  };
  return (
    <div className="signin">
      <div className="background">
        <div className="signin-box">
          <h2 className="signin-header">Вход</h2>
          <form onSubmit={handleSms}>
            <div className="input-password">
              <input
                className="signin-input-password"
                type="smsCode"
                placeholder="SMS code"
              />
              <img src={Eye} alt="password" />
            </div>
            <input
              type="submit"
              className="signin-submit mt-5"
              value={"Войти"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SmsPage;
