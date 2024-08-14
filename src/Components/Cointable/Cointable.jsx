import { useQuery } from "react-query"
import { Coindata } from "../../services/Coindata"
import { useState } from "react"

export function Cointable(){
    const [page , setPage] = useState(1)

    const {data , isLoading , isError , error} = useQuery(['coins' , page] , () => Coindata(page) , {
        cacheTime:1000*60*2,
        staleTime: 1000 * 60 * 2,
    })

    return (
        <>
            <div className="box-border">
                <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center">
                    {/* Header of the table */}
                    <div className="basis-[35%]">
                        Coin
                    </div>
                    <div className="basis-[25%]">
                        Price
                    </div>
                    <div className="basis-[20%]">
                        24h change
                    </div>
                    <div className="basis-[20%]">
                        Market Cap
                    </div>
                </div>
                <div>
                    {isLoading && <div>Loading...</div>}
                    {
                        data && data.map((coin) => {
                            return (
                                <>
                                    <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between">
                                        <div className="flex items-center justify-start gap-3 basis-[35%]">

                                            <div className="w-[5rem] h-[5rem]">
                                                <img src={coin.image} className="w-full h-full" />
                                            </div>

                                            <div className="flex flex-col">
                                                <div className="text-3xl">{coin.name}</div>
                                                <div className="text-xl">{coin.symbol}</div>
                                            </div>


                                        </div>

                                        <div className="basis-[25%]">
                                            {coin.current_price}
                                        </div>
                                        <div className="basis-[20%]">
                                            {coin.price_change_24h}
                                        </div>
                                        <div className="basis-[20%]">
                                            {coin.market_cap}
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <div className=" flex justify-center"><button disabled={page==1} className="w-36 text-black h-16 bg-blue-200" onClick={() => {
                    setPage(page - 1)
                }}>prev page</button></div>
                <div className=" flex justify-center"><button className="w-36 text-black h-16 bg-blue-200" onClick={() => {
                    setPage(page + 1)
                }}>Next page</button></div>
            </div>
        </>
    )
}