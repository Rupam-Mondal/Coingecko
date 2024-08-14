import AxiosInstance from "../helpers/AxiosInstance";

export async function Coindata(page = 1){
    const perpage = 10
    try{
        const response = await AxiosInstance.get(`/coins/markets?vs_currency=usd&per_page=${perpage}&page=${page}`)
        return response.data
    }
    catch(e){
        console.log(e)
        return null
    }
}