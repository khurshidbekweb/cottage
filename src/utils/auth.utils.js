import { custimAxios } from "../configs/axios.config"

export const authUtils = {
    loginAuth: async ({ip, smsCode, userAgent, userId}) => {
        const {data} = await custimAxios.post('/auth/login', {
            ip: ip,
            smsCode: smsCode,
            userAgent: userAgent,
            userId: userId
        })
        return data
    },
    smsAuth: async (phone) => {
        const {data} = await custimAxios.post('/auth/login/sms', phone)
        return data
    },
    refreshAuth: async () => {
        const {data} = await custimAxios.post('/auth/refresh')
        return data
    },
    deleteAuth: async () => {
        const {data} = await custimAxios.delete('/auth/logout')
        return data
    }
}