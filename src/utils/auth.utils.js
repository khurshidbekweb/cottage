import  custimAxios  from "../configs/axios.config"

export const authUtils = {
    loginAuth: async ({smsCode, userId}) => {
        const {data} = await custimAxios.post('/auth/login', {
            smsCode,
            userAgent: window.navigator.userAgent,
            userId,
        })
        return data
    },
    smsAuth: async ({phone}) => {
        const {data} = await custimAxios.post('/auth/login/sms', {phone})
        return data
    },
    refreshAuth: async () => {
        const {data} = await custimAxios.post('/auth/refresh', {
            userAgent: window.navigator.userAgent
        }, {
            headers: {
                "refreshToken": localStorage.getItem("refreshToken")
            }
        })
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)
        return data
    },





}