import { useQuery } from "react-query";
import { Coindata } from "../../services/Coindata";
import { useState } from "react";

export function Cointable() {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError, error } = useQuery(
        ['coins', page],
        () => Coindata(page),
        {
            cacheTime: 1000 * 60 * 2,
            staleTime: 1000 * 60 * 2,
        }
    );

    return (
        <>
            <div className="box-border overflow-x-hidden">
                <div className="min-w-[600px] w-full bg-yellow-400 text-black flex py-4 px-4 font-semibold items-center justify-between">
                    {/* Header of the table */}
                    <div className="basis-[35%]">Coin</div>
                    <div className="basis-[25%]">Price</div>
                    <div className="basis-[20%]">24h Change</div>
                    <div className="basis-[20%]">Market Cap</div>
                </div>
                <div>
                    {isLoading && <div className="text-center py-4">Loading...</div>}
                    {data && data.map((coin) => (
                        <div key={coin.id} className="min-w-[600px] w-full bg-transparent text-white flex py-4 px-4 items-center justify-between border-b border-gray-700">
                            <div className="flex items-center gap-4 basis-[35%]">
                                <div className="w-[3rem] h-[3rem]">
                                    <img src={coin.image} className="w-full h-full rounded-full" alt={coin.name} />
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-2xl font-bold">{coin.name}</div>
                                    <div className="text-sm uppercase text-gray-400">{coin.symbol}</div>
                                </div>
                            </div>
                            <div className="basis-[25%] text-lg font-mono">{coin.current_price.toLocaleString()}</div>
                            <div className={`basis-[20%] text-lg ${coin.price_change_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                {coin.price_change_24h.toFixed(2)}%
                            </div>
                            <div className="basis-[20%] text-lg font-mono">{coin.market_cap.toLocaleString()}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-6 gap-4">
                <button
                    disabled={page === 1}
                    className="w-36 h-12 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    onClick={() => setPage(page - 1)}
                >
                    Prev Page
                </button>
                <button
                    className="w-36 h-12 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    onClick={() => setPage(page + 1)}
                >
                    Next Page
                </button>
            </div>
        </>
    );
}
