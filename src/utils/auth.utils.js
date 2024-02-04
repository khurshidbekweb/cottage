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
        console.log(data.smsCode);
        return data
    },
    refreshAuth: async () => {
        console.log("ok,ok")
        const {data} = await custimAxios.post('/auth/refresh', {
            userAgent: window.navigator.userAgent
        }, {
            headers: {
                "refreshToken": localStorage.getItem("refreshToken")
            }
        })
        console.log(data, "data")
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)
        return data
    },
    
}