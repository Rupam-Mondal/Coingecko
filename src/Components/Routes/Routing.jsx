import { Route, Routes } from "react-router-dom"
import { lazy , Suspense } from "react"
import CurstomError from "../CustomErrorboundary/Customerror"

const Home = lazy(() => import('../Pages/Home'))
const Coindetails = lazy(() => import('../Pages/Coindetails'))


function Routing(){
    return (
        <>
            <CurstomError>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/details/:coinID" element={<Coindetails />}></Route>
                    </Routes>
                </Suspense>
            </CurstomError>
        </>
    )
}
export default Routing