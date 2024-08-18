import { Line } from "react-chartjs-2"
import { Historicdata } from "../../services/Historicdata"
import { CategoryScale } from 'chart.js';
import Chart from "chart.js/auto";
function Coingraph({coinID}){
    Chart.register(CategoryScale);
    return (
        <>
            {/* <h1>CoinInfo{coinID}</h1> */}
            {/* <button
                onClick={() => {
                    const ans = Historicdata(coinID)
                    console.log(ans)
                }}
            >click me</button> */}
            <div className="w-[50vw] h-[400px]">
                <Line
                    data={{
                        labels: ['1', '2', '3'],
                        datasets: [{
                            label:'Line 1',
                            data: [5, 6, 2],
                            borderColor: 'rgba(159, 9, 2, 1)',
                        },
                        {
                            label:"Line 2",
                            data: [6, 7, 1],
                            borderColor: 'rgba(153, 102, 255, 1)',
                        }]
                    }}
                />
            </div>


        </>
    )
}

export default Coingraph