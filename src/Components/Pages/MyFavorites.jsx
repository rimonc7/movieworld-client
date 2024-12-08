import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState, useEffect } from "react";
import FavMovies from "./FavMovies";
import { Link } from "react-router-dom";

const MyFavorites = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const [favMovies, setFavMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/favoriteMovies/${email}`)
            .then(res => res.json())
            .then(data => {
                setFavMovies(data);
                setLoading(false);
            })
    }, [email]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-infinity w-20"></span>
            </div>
        );
    }

    return (
        <div>
            <Helmet>
                <title>My Favorites</title>
            </Helmet>
            <Nav />
            <div>
                {favMovies.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-screen space-y-6">
                        <p className="text-3xl uppercase font-bold text-center text-red-400">
                            You have no favorite movies yet.
                        </p>
                        <Link to="/allMovies" className="btn text-xl text-white bg-blue-500 font-semibold hover:bg-blue-700">
                            Add to Favorites
                        </Link>
                    </div>
                ) : (
                    <div>
                        <h2 className="text-4xl font-extrabold text-center text-black my-14 tracking-wide uppercase">
                            Your Favorite Movies
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-10">
                            {favMovies.map(favMovie => (
                                <FavMovies key={favMovie._id} favMovie={favMovie} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default MyFavorites;
