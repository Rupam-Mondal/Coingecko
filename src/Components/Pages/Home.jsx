import { Banner } from "../Banner/Banner"
import { Cointable } from "../Cointable/Cointable"
import Navbar from "../Navbar/Navbar"

function Home(){
    return (
        <>
            <Navbar />
            <Banner />
            <Cointable />
        </>
    )
}
export default Home