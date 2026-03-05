

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className="navbar   max-w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>ChalangeLog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                            <div className="text-white bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-lg flex items-center gap-2">
                                <a className=" "><span>+</span> New Ticket</a>
                            </div>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-semibold">CS-Ticket System</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>ChalangeLog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <div className="text-white bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-lg flex items-center gap-2">
                            <a className=" "><span>+</span> New Ticket</a>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;