import axios from "axios";
import { COINGECKO_LINK } from "./constants";

const AxiosInstance = axios.create({
    baseURL:COINGECKO_LINK,
})

export default AxiosInstance