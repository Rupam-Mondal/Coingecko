import AxiosInstance from "../helpers/AxiosInstance";

export async function Coindata(id) {
    try {
        const response = await AxiosInstance.get(`/coins/${id}`)
        return response.data
    }
    catch (e) {
        console.log(e)
        return null
    }
}