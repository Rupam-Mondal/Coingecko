function Navbar(){
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Cryptotracker</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>USD</a></li>
                        <li><a>INR</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar