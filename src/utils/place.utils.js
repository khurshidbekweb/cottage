import { custimAxios } from "../configs/axios.config"

export const placeUtils = {
    getPlace: async () => {
        const {data} = await custimAxios.get('place', {
            headers: {
                "accept-language": localStorage.getItem('language')
            }
        })
        return data
    },
    postPalce: async({image, name, regionId}) => {
        const {data} = await custimAxios.post('place/add', {
            image: image,
            name: name,
            regionId: regionId
        })
        return data
    },
    patchPlace: async({id, image, name}) => {
        console.log(image);
        const {data} = await custimAxios.patch(`place/edit/${id}`, {
            image: image || undefined,
            name: name || undefined
        })
        return data
    },
    deletePlace: async (id) => {
        const {data} = await custimAxios.delete(`place/delete/${id}`)
        return data
    }
}