import { Route, Routes } from "react-router-dom"
import Coindetails from "../Pages/Coindetails"
import Home from "../Pages/Home"

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/details/:coinID" element={<Coindetails />}></Route>
            </Routes>
        </>
    )
}
export default Routing