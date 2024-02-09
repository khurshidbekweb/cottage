import "./User.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AddImg from "../../assets/images/add-img.svg";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import { ALL_DATA } from "../../Query/get_all";
import { useMutation } from "@tanstack/react-query";
import { userUtils } from "../../utils/user.utils";
import toastify from "../../utils/toastify";
import { useRef } from "react";
import { IMG_BASE_URL } from "../../constants/img.constants";

async function getBase64Full(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
}

const User = () => {
  const userData = ALL_DATA.useSingleUser()
  const user = JSON.parse(localStorage.getItem("user"))
  const userImg = userData?.data?.image
  const fovarite = JSON.parse(localStorage.getItem("liked"))
  const ismainImage = useRef(null)
  const userEdit = useMutation({
    mutationFn: userUtils.patchUser,
    onSuccess: () => {
      toastify.successMessage("User muvaffaqiyatli tahrirlandi")
      localStorage.setItem("user", JSON.stringify(userData?.data))
    },
    onError: (err) => {
      toastify.errorMessage("Hatolik mavjud!!!")
      console.log(err);
    }
  })
  const handleUser =(e) => {
    e.preventDefault()
    userEdit.mutate({
      id: user.id,
      phone: e.target.phone.value.slice(4),
      email: e.target.email.value,
      name: e.target.name.value,
      username: e.target.username.value,
      image: e.target.userImage.files[0],
      password: e.target.password.value,
      favoriteCottages: fovarite
    })
  }
  const handleIsMianImage = async (e) => {
    ismainImage.current.src = await getBase64Full(e.target.files[0])
    ismainImage.current.classList.remove("d-none")
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="user">
          <h2 className="user-header">Профиль</h2>

          <form onSubmit={handleUser} className="user-box">
            <div className="user-l">
              <label className="file-input__label">
                <input onChange={handleIsMianImage} type="file" name="userImage" className="file-input__input curson-pointer"/>                
                <img className="add-user-image-icons" src={AddImg} alt="img" />
              </label>
              <img className={ userImg ? "image-user-single" : "d-none image-user-single" } ref={ismainImage} src={`${IMG_BASE_URL}${userImg}`} alt="img" />              
            </div>

            <div className="user-info-wrap">
            <div className="user-r">
                <input className="user-input" defaultValue={user?.name?user.name:""} name="username" type="text"placeholder="Фамиля"/>
                <input className="user-input" defaultValue={user?.username?user.username:""} name="name" type="text" placeholder="Имя"/>
                <input className="user-input" defaultValue={user?.email?user.email:""} name="email" type="email" placeholder="Email" />
                <input className="user-input" defaultValue={"+998"+user?.phone} name="phone" type="tel" placeholder="Nomer" />
              
                <input className="user-input" defaultValue={user?.smsCode ? user?.smsCode : ""} name="password" type="text" placeholder="password"/>
                <p className="user-text d-none">
                  Что бы вы подать объявлении вам нужно вводить ваш серии номер
                  паспорта.
                </p>
            </div>
            <button type="submit" className="user-btn mt-5">Сохранить</button>
            </div>
          </form>
        </div>
      </div>
      <MiniNaw/>
      <Footer />
    </div>
  );
};

export default User;
