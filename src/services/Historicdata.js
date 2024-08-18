import AxiosInstance from "../helpers/AxiosInstance";

export async function Historicdata(id){
    try {
        const response = await AxiosInstance.get(`/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`)
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}