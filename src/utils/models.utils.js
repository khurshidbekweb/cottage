import { custimAxios } from "../configs/axios.config"

export const modelsUtils = {
    getModels: async () => {
        const {data} = await custimAxios.get('/models')
        return data
    },
    postModels: async (name) => {
        const {data} = custimAxios.post('/models/add', {
            name: name
        })
        return data
    },
    patchMoels: async ({id, name}) => {
        const {data} = await custimAxios.patch(`/models/edit/${id}`, name)
        return data
    },
    deleteModels: async (id) => {
        const {data} = await custimAxios.delete(`/models/delete/${id}`)
        return data
    }
}