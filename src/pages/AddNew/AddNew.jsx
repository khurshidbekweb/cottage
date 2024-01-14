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
// import A2 from '../../assets/images/a2.svg'
// import A3 from '../../assets/images/a3.svg'
// import A4 from '../../assets/images/a4.svg'
// import A5 from '../../assets/images/a5.svg'
// import A6 from '../../assets/images/a6.svg'
// import A7 from '../../assets/images/a7.svg'
// import A8 from '../../assets/images/a8.svg'
// import A9 from '../../assets/images/a9.svg'
// import A10 from '../../assets/images/a10.svg'
// import A11 from '../../assets/images/a11.svg'
// import A12 from '../../assets/images/a12.svg'
// import A13 from '../../assets/images/a13.svg'
// import A14 from '../../assets/images/a14.svg'
// import A15 from '../../assets/images/a15.svg'
// import A16 from '../../assets/images/a16.svg'
// import A17 from '../../assets/images/a17.svg'
// import A18 from '../../assets/images/a18.svg'
// import A19 from '../../assets/images/a19.svg'

// import A20 from '../../assets/images/a20.svg'
// import A21 from '../../assets/images/a21.svg'
// import A22 from '../../assets/images/a22.svg'
// import A23 from '../../assets/images/a23.svg'
// import A24 from '../../assets/images/a24.svg'
// import A25 from '../../assets/images/a25.svg'
// import A26 from '../../assets/images/a26.svg'
// import A27 from '../../assets/images/a27.svg'
// import A28 from '../../assets/images/a28.svg'
// import A29 from '../../assets/images/a29.svg'
// import A30 from '../../assets/images/a30.svg'
// import A31 from '../../assets/images/a31.svg'
// import A32 from '../../assets/images/a32.svg'
// import A33 from '../../assets/images/a33.svg'
// import A34 from '../../assets/images/a34.svg'
// import A35 from '../../assets/images/a35.svg'
// import A36 from '../../assets/images/a36.svg'
// import A37 from '../../assets/images/a37.svg'

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
    },
    onError: (err) => {
      if(err?.response?.status === 406){
        authUtils.refreshAuth()
      }
    }
  })
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
    console.log(value)
  };
  const handlCottage = async (e) => {
    e.preventDefault();
    const images = []
    images.push({
        image: await getBase64(e.target.mainImage.files[0]),
        isMain: true
    })
    for (let i = 0; i < e.target.childimg.files.length; i++) {
        images.push(
            {
                image: await getBase64(e.target.childimg.files[i]),
                isMain: false,
            }
        )
      }
    cottage.mutate({
      name: e.target.cottagename.value,
      images: images,
      placeId: e.target.place.value,
      regionId: e.target.region.value,
      price: +e.target.price.value,
      priceWeekend: +e.target.priceweekend.value,
      cottageType: cottageInfo.response,
      comforts: cottageComforts.response,
      description: e.target.discription.value,
      latitude: "" || undefined,
      longitude: "" || undefined,
    });
  };
  console.log(cottage);
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
