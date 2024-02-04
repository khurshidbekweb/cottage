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
  const user = ALL_DATA.useSingleUser()
  const userImg = ALL_DATA.useSingleUser().data?.image
  console.log(userImg);
  const ismainImage = useRef(null)
  const userEdit = useMutation({
    mutationFn: userUtils.patchUser,
    onSuccess: () => {
      toastify.successMessage("User muvaffaqiyatli tahrirlandi")
    },
    onError: (err) => {
      toastify.errorMessage("Hatolik mavjud!!!")
      console.log(err);
    }
  })
  const handleUser =(e) => {
    e.preventDefault()
    userEdit.mutate({
      id: user.data?.id || undefined,
      phone: e.target.phone.value || undefined,
      email: e.target.email.value || undefined,
      username: e.target.username.value || undefined,
      name: e.target.name.value || undefined,
      image: e.target.userImage.files[0] || undefined
    })
    console.log(userEdit.variables.image);
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
              <img className={userImg?"image-user-single":"d-none image-user-single"} ref={ismainImage} src={userImg?`${IMG_BASE_URL}${userImg}`:""} alt="img" />              
            </div>

            <div className="user-r">
              <div className="user-r-inner">
                <input className="user-input" value={"+998"+user.data?.phone} name="phone" type="tel" placeholder="Nomer" />
                <input className="user-input" name="email" type="email" placeholder="Email" />
              </div>

              <div className="user-r-inner">
                <input className="user-input" name="name" type="text" placeholder="Имя"/>
                <input className="user-input" name="username" type="text"placeholder="Фамиля"/>
              </div>

              <div>
                <input className="user-input" name="pssCeria" type="text" placeholder="AA 0000000"/>
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
