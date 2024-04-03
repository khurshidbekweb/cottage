import custimAxios from "../configs/axios.config"

export const ServiceUtils = {
    getService: async () => {
        const {data} = custimAxios.get('/services')
        return data
    }
}