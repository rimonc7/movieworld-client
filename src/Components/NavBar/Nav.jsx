import { NavLink } from "react-router-dom";

const Nav = () => {
    const links = <div className="space-x-3 ">
        <NavLink to="/" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">Home</NavLink>
        <NavLink to="/allMovies" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">All Movies</NavLink>
        <NavLink to="/addMovie" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">Add Movie</NavLink>
        <NavLink to="/myFavorites" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">My Favorites</NavLink>
        <NavLink to="/login" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">Login</NavLink>
        <NavLink to="/register" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">Register</NavLink>
    </div>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl text-black font-bold">Movie World</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;