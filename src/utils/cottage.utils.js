import  custimAxios from "../configs/axios.config"

export const cottageUtils = {
  getCottage: async () => {
    const { data } = await custimAxios.get("/cottage", {
      headers: {
        'accept-language': localStorage.getItem("language")
      },
    });
    return data;
  },
  getCottageByPlace: async (placeId) => {
    const { data } = await custimAxios.get(`/cottage/place/${placeId}`, {
      headers: {
        'accept-language': localStorage.getItem("language")
      },
    });
    return data;
  },
  getCottageTop: async () => {
    const {data} = await custimAxios.get('/cottage/top', {
      headers: {
        'accept-language': localStorage.getItem("language")
      },
    })
    return data
  },
  getCottageType: async (type) => {
    const {data} = await custimAxios.get(`/cottage/cottage-type/${type}`, {
      headers: {
        'accept-language': localStorage.getItem("language")
      },
    })
    return data
  },
  getCottageUser: async () => {
    const {data} = await custimAxios.get('cottage/user', {
      headers: {
        'accept-language': localStorage.getItem("language")
      },
    })
    return data
  },
  getCottageFilter: async ({type, region, price}) => {
    const {data} = await custimAxios.get('/cottage/filter/', {
      type: type,
      region: region,
      price: price,

      headers: {
        'accept-language': localStorage.getItem("language")
      }
    })
    return data
  },
  postCottage: async ({
    comforts,
    cottageType,
    description,
    mainImage,
    images,
    name,
    placeId,
    price,
    priceWeekend,
    regionId
  }) => {
    try {
      const formData = new FormData();
    for (const el of comforts) {
      formData.append("comforts", el);
    }
    for (const el of cottageType) {
      formData.append("cottageType", el);
    }
    for (const el of images) {
      formData.append("images", el);
    }
    formData.append("name", name);
    formData.append("mainImage", mainImage);
    formData.append("placeId", placeId);
    formData.append("regionId", regionId);
    formData.append("price", price);
    formData.append("priceWeekend", priceWeekend);
    formData.append("description", description)
    console.log(formData.getAll("images"), formData.get("mainImage"));
    const { data } = await custimAxios.post("cottage/add", formData);
    return data;
    } catch (error) {
      console.log(error)
    }
  },
  postCHildImages: async ({cottageId, image}) => {
    const {data} = await custimAxios.post('cottage/image/add', {
      cottageId,
      image
    })
    return data
  },
  patchCottageText: async ({
    id,
    comforts,
    cottageStatus,
    cottageType,
    description,
    name,
    price,
    priceWeekend,
    status,
    lattitude,
    longitude,
  }) => {
    const { data } = await custimAxios.patch(`/cottage/edit/${id}`, {
        comforts: comforts,
        cottageStatus: cottageStatus,
        cottageType: cottageType,
        description: description,
        name: name,
        price: price,
        priceWeekend: priceWeekend,
        status: status,
        lattitude: lattitude,
        longitude: longitude
    });
    return data
  },
  patchCottageImage: async ({id, image, status}) => {
    const {data} = await custimAxios.patch(`/cottage/image/edit/${id}`, {
        image: image,
        status: status || undefined
    })
    return data
  },
  deleteCottageAll: async (id) => {
    const {data} = await custimAxios.delete(`/cottage/delete/${id}`)
    return data
  },
  deleteCottageImage: async (id) => {
    const {data} = await custimAxios.delete(`/cottage/image/delete/${id}`)
    return data
  }
};
