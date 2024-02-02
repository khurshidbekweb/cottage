import  custimAxios  from "../configs/axios.config"


export const notificationUtils = {
    getNotification: async () => {
        const {data} = await custimAxios.get("/notification/all")
        return data
    },
    getUserNotification:  async (id) => {
        const {data} = custimAxios.get(`/notification/${id}`)
        return data
    },
    postNatification: async ({message, type, userId}) => {
        const {data} = custimAxios.post('/notification/add',        
        {
            message: message,
            type: type,
            userId: userId
        }
        )
        return data
    },
    patchNatification: async ({id, watchedUserId, status}) => {
        const {data} = custimAxios.patch(`/notification/update/${id}`, 
        {
            watchedUserId: watchedUserId,
            status: status
        }        
        )
        return data
    },
    deleteNatification: async (id) => {
        const {data} = await custimAxios.delete(`/notification/delete/${id}`)
        return data
    }
}