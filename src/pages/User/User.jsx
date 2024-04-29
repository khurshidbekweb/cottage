import "./User.css";
import AddImg from "../../assets/images/add-img.svg";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import { ALL_DATA } from "../../Query/get_all";
import { useMutation } from "@tanstack/react-query";
import { userUtils } from "../../utils/user.utils";
import toastify from "../../utils/toastify";
import { useContext, useEffect, useRef, useState } from "react";
import { IMG_BASE_URL } from "../../constants/img.constants";
import EditImageIcon from "../../assets/images/edit.svg";
import { useNavigate } from "react-router-dom";
import { ProfileLeng } from "../../configs/language";
import { LanguageContext } from "../../helper/languageContext";
import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";
import { Helmet } from "react-helmet-async";

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
  const userData = ALL_DATA.useSingleUser();
  const user = JSON.parse(localStorage.getItem("user"));
  const userImg = userData?.data?.image;
  const fovarite = JSON.parse(localStorage.getItem("liked"));
  const ismainImage = useRef(null);
  const saveData = useRef(null);
  const editImage = useRef(null);
  const navigation = useNavigate();
  const [edit, setEdit] = useState(true);
  const userEdit = useMutation({
    mutationFn: userUtils.patchUser,
    onSuccess: async () => {
      toastify.successMessage("User muvaffaqiyatli tahrirlandi");
      localStorage.setItem("user", JSON.stringify(userData?.data));
      saveData.current.classList.add("d-none");
      editImage.current.classList.add("d-none");
      await userUtils.getSingleUser();
      setEdit(true);
    },
    onError: (err) => {
      toastify.errorMessage("Hatolik mavjud!!!");
      console.log(err);
    },
  });
  const handleUser = (e) => {
    e.preventDefault();
    userEdit.mutate({
      id: user.id,
      phone:
        e.target.phone.value.slice(4) === user.phone
          ? ""
          : e.target.phone.value.slice(4),
      email: e.target.email.value || "",
      name: e.target.name.value || "",
      image: e.target.userImage.files[0],
      favoriteCottages: fovarite,
    });
  };
  const handleIsMianImage = async (e) => {
    ismainImage.current.src = await getBase64Full(e.target.files[0]);
    ismainImage.current.classList.remove("d-none");
  };
  useEffect(() => {
    if (!user) navigation("/");
  }, [navigation]);
  if (!user) navigation("/");

  // User profile language
  const { languageChange } = useContext(LanguageContext);

  return (
    <>
      <Helmet>
        <title>User Profil</title>
        <meta name="description" content="user page" />
        <link rel="canonical" href="/user" />
      </Helmet>
      <div>
        <div className="container">
          <BreacdCrumbs />
          <div className="user">
            <h2 className="user-header">{ProfileLeng[languageChange].text}</h2>

            <form onSubmit={handleUser} className="user-box">
              <div className="user-l">
                <label className="file-input__label">
                  <input
                    onChange={handleIsMianImage}
                    type="file"
                    name="userImage"
                    className="file-input__input curson-pointer"
                  />
                  <img
                    ref={editImage}
                    className={
                      edit
                        ? "add-user-image-icons d-none"
                        : "add-user-image-icons"
                    }
                    src={AddImg}
                    alt="img"
                  />
                </label>
                <img
                  className={
                    userImg ? "image-user-single" : "d-none image-user-single"
                  }
                  ref={ismainImage}
                  src={`${IMG_BASE_URL}${userImg}`}
                  alt="img"
                />
              </div>

              <div className="user-info-wrap">
                <div className="user-r">
                  <label className="w-100">
                    <span className="input-name-lable">Name</span>
                    <input
                      disabled={edit}
                      className="user-input"
                      defaultValue={user?.name ? user.name : ""}
                      name="name"
                      type="text"
                      placeholder="Имя"
                    />
                  </label>
                  <label className="w-100">
                    <span className="input-name-lable">Number</span>
                    <input
                      disabled={edit}
                      className="user-input"
                      defaultValue={"+998" + user?.phone}
                      name="phone"
                      type="tel"
                      placeholder="Nomer"
                    />
                  </label>
                  <label className="w-100">
                    <span className="input-name-lable">Email</span>
                    <input
                      disabled={edit}
                      className="user-input"
                      defaultValue={user?.email ? user.email : ""}
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                  </label>
                  <p className="user-text d-none">
                    Что бы вы подать объявлении вам нужно вводить ваш серии
                    номер паспорта.
                  </p>
                </div>
                <button
                  ref={saveData}
                  type="submit"
                  className={edit ? "user-btn mt-5 d-none" : "user-btn mt-5"}
                >
                  {ProfileLeng[languageChange].btn}
                </button>
              </div>
            </form>
            <button
              onClick={() => setEdit(false)}
              className={
                edit ? "user-edit-btn btn" : "user-edit-btn btn d-none"
              }
            >
              <img
                className="img-icon-edit"
                src={EditImageIcon}
                alt="imgicons"
              />
            </button>
          </div>
        </div>
        <MiniNaw />
      </div>
      <MiniNaw />
    </>
  );
};

export default User;
