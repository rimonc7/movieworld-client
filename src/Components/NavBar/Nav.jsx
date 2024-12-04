import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";


const Nav = () => {

    const { user, signOutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    const links = <div className=" space-y-3 space-x-3 ">
        <NavLink to="/" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">Home</NavLink>
        <NavLink to="/allMovies" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">All Movies</NavLink>
        {user ?
            <>
                <NavLink to="/addMovie" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">Add Movie</NavLink>
                <NavLink to="/myFavorites" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">My Favorites</NavLink>
                <NavLink onClick={handleSignOut} to="/logout" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">Logout</NavLink>
            </>
            :
            <>
                <NavLink to="/auth/login" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">Login</NavLink>
                <NavLink to="/auth/register" className="btn bg-gray-100 hover:bg-gray-200 text-black py-2 px-4 rounded">Register</NavLink>
            </>}

    </div>

    return (
        <div className=" px-4 lg:px-20 ">
            <div className="navbar">
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
                {user ? (
                    <img
                        className="w-12 h-12 rounded-full"
                        src={user?.photoURL}
                        alt=""
                        title={user?.displayName || "User"}
                    />
                ) : (
                    <p className="text-5xl"><FaUserCircle /></p>
                )}
            </div>
            </div>
        </div>
    );
};

export default Nav;