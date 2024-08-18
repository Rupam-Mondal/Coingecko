import { useParams } from "react-router-dom"
import { Coindata } from "../../services/Singlecoindata"
import { useQuery } from "react-query"
import Coingraph from "../CoinHistory/Coingraph"
import MyLoader from "../Loader/Loader"

function Coindetails(){
    const {coinID} = useParams()
    const {data , isLoading , isError , error} = useQuery(['singlecoin' , coinID] , () => Coindata(coinID))
    if(isLoading){
        return (
            <>
                <MyLoader/>
            </>
        )
    }

    return (
        <>
            <div className="w-screen flex justify-between px-10">
                <div>
                    <div className="h-[500px] w-[30vw] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <div className="w-full h-[250px] flex justify-center items-center bg-gray-700">
                            <img src={data?.image.large} alt={data?.name} className="max-h-full" />
                        </div>
                        <div className="text-center text-green-400 text-[40px] font-semibold py-4">
                            {data?.name}
                        </div>
                        <div className="px-6 py-4 text-gray-300">
                            <p className="text-lg mb-2">
                                Rank : {data?.market_cap_rank}
                            </p>
                            <p className="text-lg mb-2">
                                Current Price: ${data?.market_data.current_price['usd']}
                            </p>
                            <p className="text-lg">
                                Genesis date: {data?.genesis_date}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <Coingraph
                        coinID={coinID}
                    />
                </div>
            </div>
        </>
    );


}
export default Coindetails