import { custimAxios } from "../configs/axios.config"

export const comfortUtils = {
    getComfort: async () =>{
        const {data} = await custimAxios.get('comfort', {
            headers: {
                'accept-language': localStorage.getItem('language') || 'uz'
            }
        })
        return data
    },
    postComfort: async ({image, name}) => {
        const {data} = await custimAxios.post('comfort/add', {
            image: image,
            name: name
        })
        return data
    },
    patchComfort: async ({id, image, name}) => {
        console.log(name, id);
        const  {data} = await custimAxios.patch(`comfort/edit/${id}`, {
            image: image || undefined,
            name: name || undefined
        })
        return data
    },
    deleteComfort: async (id) => {
        const {data} = await custimAxios.delete(`comfort/delete/${id}`)
        return data
    }
}