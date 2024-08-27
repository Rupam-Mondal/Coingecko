import { Route, Routes } from "react-router-dom"
import { lazy , Suspense } from "react"

const Home = lazy(() => import('../Pages/Home'))
const Coindetails = lazy(() => import('../Pages/Coindetails'))


function Routing(){
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/details/:coinID" element={<Coindetails />}></Route>
                </Routes>
            </Suspense>
        </>
    )
}
export default Routing