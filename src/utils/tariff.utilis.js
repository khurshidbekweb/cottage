import custimAxios from "../configs/axios.config"

export const TariffUtils = {
    getTariff: async () => {
        const {data} = await custimAxios.get('/tariff')
        return data
    },
    addTariff: async ({days, description, price, service_id, type}) => {
        const {data} = await custimAxios.post('/tarif/add', {
            days: days,
            description: description,
            price: price,
            service_id: service_id,
            type: type
        })
        return data
    },
    addTariffActive: async ({assignedBy, cottageId, tariffId}) => {
        const {data} = await custimAxios.post('/tariff/active', {
            assignedBy,
            cottageId,
            tariffId
        })
        return data
    },
    editTariff: async ({id,days, description, price}) => {
        const {data} = await custimAxios.patch(`/tariff/edit/${id}`, {
            days,
            description,
            price
        })
        return data
    },
    deletTariffDisable: async ({cottageId, tariffId}) => {
        const {data} = await custimAxios.delete('/tariff/disable', {
            cottageId,
            tariffId
        })
        return data
    },
    deleteTariff: async (id) => {
        const {data} = custimAxios.delete(`/tariff/delete/${id}`)
        return data
    }
}