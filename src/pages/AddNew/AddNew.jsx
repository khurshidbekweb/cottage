import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Dacha3 from "../../assets/images/dacha3.png";
import AddImg from "../../assets/images/add-img.svg";
import "./AddNew.css";
import { useRef, useState } from "react";
import { useMutation,  useQueryClient } from "@tanstack/react-query";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { cottageUtils } from "../../utils/cottage.utils";
import { authUtils } from "../../utils/auth.utils";
import { ALL_DATA } from "../../Query/get_all";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import { Link, useNavigate } from "react-router-dom";
import toastify from "../../utils/toastify";
import Announcoment from "../Announcement/Announcoment";

async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result.split(";base64,")[1]);
    };
    reader.onerror = reject;
  });
}
// Images transform getbase64Full
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

const AddNew = () => {
  const mainImage = useRef(null)
  const childImagesWrapper =useRef(null)
  const navigate = useNavigate()
  const [cottageInfo, setCottageInfo] = useState({
    dachaType: [],
    response: [],
  });
  const [cottageComforts, setcottageComforts] = useState({
    comforts: [],
    response: [],
  });
  const queryClient = useQueryClient()
  const region = ALL_DATA.useRegion()
  const place = ALL_DATA.usePlace()
  const cottageType = ALL_DATA.useCottageType()
  const comforts = ALL_DATA.useComforts()
  const cottage = useMutation({
    mutationFn: cottageUtils.postCottage,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['cotteges']})
      toastify.successMessage("Dacha muvaffaqiyat qo'shildi 😍")
    },
    onError: (err) => {
      if(err?.response?.status === 406){
        authUtils.refreshAuth()
      }
    }
  });
  const handlChoseCottageType = (e) => {
    const { value, checked } = e.target;
    const { dachaType } = cottageInfo;
    if (checked) {
      setCottageInfo({
        dachaType: [...dachaType, value],
        response: [...dachaType, value],
      });
    } else {
      setCottageInfo({
        dachaType: dachaType.filter((e) => e !== value),
        response: dachaType.filter((e) => e !== value),
      });
    }
  };
  const handleCottageComforts = (e) => {
    const { value, checked } = e.target;
    const { comforts } = cottageComforts;
    if (checked) {
      setcottageComforts({
        comforts: [...comforts, value],
        response: [...comforts, value],
      });
    } else {
      setcottageComforts({
        comforts: comforts.filter((e) => e !== value),
        response: comforts.filter((e) => e !== value),
      });
    }
  };
  const handlCottage = async (e) => {
    e.preventDefault();
    const images = [];
    for (let i = 0; i < e.target.childimg.files.length; i++) {
      images.push(e.target.childimg.files[i]);
    }
    cottage.mutate({
      name: e.target.cottagename.value,
      images: images,
      mainImage: e.target.mainImage.files[0],
      placeId: e.target.place.value,
      regionId: e.target.region.value,
      price: +e.target.price.value,
      priceWeekend: +e.target.priceweekend.value,
      cottageType: cottageInfo.response,
      comforts: cottageComforts.response,
      description: e.target.discription.value,
      lattitude: "" || undefined,
      longitude: "" || undefined,
    });
    navigate("/add-new")
    e.target.cottagename.value = ""
    e.target.childimg.files = [];
    e.target.price.value = "";
    e.target.priceweekend.value = ""
    e.target.discription.value = ""
  };
  console.log(cottage.variables);
  const handleMainImage = async (e) => {
    const mainImgUrl = await getBase64Full(e.target.files[0]);
    mainImage.current.classList.remove("d-none");
    mainImage.current.setAttribute("src", mainImgUrl);
  };
  const handlmultipleImg = async (e) => {
      const images = []
      for (let i = 0; i < e.target.files.length; i++) {
        images.push(await getBase64Full(e.target.files[i]))
      }
      for(const image of images){
          childImagesWrapper.current.insertAdjacentHTML("beforeend", `<img src=${image} width="100" height="100" alt="child image" className="overflow-hidden"/>`)
      }
    };

  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="addnew">
          <Link to='/announcement' className="my-cottage-link">My cottage</Link>
            <h3 className="addnew-header">Фото</h3>            
            <form onSubmit={handlCottage}>
                  <div className="addnew-imgs">
                    <div className="addnew-box">
                      <label className="addnew-img-bg label-input-file">
                        <input type="file" name="mainImage" className="input-file" onChange={handleMainImage}/>
                        <p className="addnew-img-text">Главный</p>
                      </label>
                      <img ref={mainImage} className="addnew-img" src={Dacha3} alt="add" />
                    </div>
                    <div className="addnew-add">
                      <label className="label-input-file">
                        <input type="file" name="childimg" multiple className="input-file" onChange={handlmultipleImg}/>
                        <img src={AddImg} alt="add" />
                        <p className="addnew-add-text">Добавить фото</p>
                      </label>
                    </div>
                    <div ref={childImagesWrapper} className="image-child-wrap ">
                      
                    </div>
                  </div>

                  <div>
                      <h3 className="addnew-header">Регион и тип отдыха</h3>     
                      <h5>Cottage name</h5>
                    <input type="text" name="cottagename" className="form-control w-50 my-4" placeholder="Name"/>
                      <h3 className="addnew-label mb-3">Viloyat</h3>                      
                      <select name="region" className="addnew-select d-block form-select w-25">
                        {region.data?.length && region.data.map(e => {
                          return <option key={e.id}  value={e.id}>{e.name}</option>
                        })}
                      </select>
                      <hr className="addnew-hr" />

                      <h3 className="addnew-label mb-3">Joylashuv</h3>
                      <select name="place" className="addnew-select">
                        {place.data?.length && place.data.map(e => {
                          return <option key={e.id} name='place' value={e.id}>{e.name}</option>
                        })}
                      </select>
                      <hr className="addnew-hr" />
                      <h5>Price</h5>
                      <div className="price-wrap w-50 d-flex gap-2 mb-4">
                          <input type="number" name="price" className="form-control" placeholder="Price"/>
                          <input type="number" name="priceweekend" className="form-control" placeholder="Peice Weekend"/>
                      </div>

                      <h3 className="addnew-label mb-3">Dacha turi</h3>
                      <div className="addnew-inner">
                        {cottageType.data?.length && cottageType.data.map(e => {
                          return <label key={e.id} className="addnew-inner-check">
                                    <input className="addnew-check" type="checkbox" value={e.id} name="cottagetype" onChange={handlChoseCottageType}/>
                                    <span>{e.name}</span>
                                  </label> 
                        })}                      
                      </div>                    
                  </div>

                  <h3 className="addnew-header">Qulayliklar</h3>

                  <div className="addnew-objects">
                        {comforts.data?.length && comforts.data.map(e => {
                          return <div key={e.id} className="addnew-object">
                                      <input className="addnew-check" type="checkbox" value={e.id} onChange={handleCottageComforts}/>
                                      <img className="bg-white rounded-1" width={20} src={`${IMG_BASE_URL}${e.image}`} alt="img" />
                                      <p className="addnew-object-text">{e.name}</p>
                                  </div> 
                        })}                   
                  </div>

                  <h3 className="addnew-header">Описание</h3>
                  <textarea type="text" name="discription" className="addnew-message" placeholder="Кратко опищите о вашый месте" />
                  <button type="submit" className="soxranit">Сохранить</button>
              </form>
        </div>
      </div>
      <MiniNaw/>
      <Footer/>
    </>
  );
};

export default AddNew;
