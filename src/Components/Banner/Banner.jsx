import Bannerimg from '../../assets/banner1.jpeg'
export function Banner(){
    return (
        <>
            <div className='w-screen h-[25rem]'>
                <img src={Bannerimg} alt="" className='h-full w-full' />
            </div>
        </>
    )
}