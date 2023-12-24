import { custimAxios } from "../configs/axios.config"


export const translateUtils = {
    getTranslate: async () => {
        const {data} = await custimAxios.get('translate')
        return data
    },
    getUnusedTranslates: async () => {
        const {data} = await custimAxios.get('translate/unused')
        return data
    },
    getTranslateId: async (id) => {
        const {data} = custimAxios.get(`translate/${id}`)
        return data
    },
    postTranslate: async ({code, definition, type}) =>{
        const {data} = await custimAxios.post('translate', {
            code,
            type,
            definition, 
        })
        return data
    },
    patchTranslate: async (id) => {
        const {data} = await custimAxios.patch(`translate/${id}`)
        return data
    },
    deleteTranslate: async (id) => {
        const {data} = custimAxios.delete(`translate/${id}`)
        return data
    }
}