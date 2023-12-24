import { custimAxios } from "../configs/axios.config"

export const permissionUtils = {
    getPermission: async ()=> {
        const {data} = await custimAxios.get('/permission')
        return data
    },
    postPermission: async ({name, modelId}) => {
        const {data} = await custimAxios.post('/permission/add', {
            name: name,
            modelId: modelId
        })
        return data
    },
    patchPermission: async ({id, name}) => {
        const {data} = await custimAxios.patch(`/permission/edit/${id}`, name)
        return data
    },
    deletePermission: async (id) => {
        const {data} = await custimAxios.delete(`/permission/delete/${id}`)
        return data
    }
}