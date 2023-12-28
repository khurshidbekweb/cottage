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
  postCottage: async ({
    comforts,
    cottageType,
    description,
    images,
    name,
    placeId,
    price,
    priceWeekend,
    regionId,
    lattitude,
    longitude,
  }) => {
    const { data } = await custimAxios.post("cottage/add", {
      comforts: comforts,
      cottageType: cottageType,
      description: description,
      images: images,
      name: name,
      placeId: placeId,
      price: price,
      priceWeekend: priceWeekend,
      regionId: regionId,
      lattitude: lattitude,
      longitude: longitude,
    });
    return data;
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
