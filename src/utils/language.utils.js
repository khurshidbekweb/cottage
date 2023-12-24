import { custimAxios } from "../configs/axios.config"
export const languageUtils = {
    getLanguage: async () =>{
            const {data} = await custimAxios.get('language')   
            return data 
    },
    postLanguage: async ({code, title}) => {
        const {data} = await custimAxios.post('language', {
            code,
            title
        })
        return data
    },
    pachtLanguage: async ({id, title}) => {
        const {data} = await custimAxios.patch(`language/${id}`, {title})
        return data
    },
    deletLanguage: async (id) => {
        const {data} = await custimAxios.delete(`language/${id}`)

        return data
    }
}
