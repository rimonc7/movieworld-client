import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Provider/ThemeProvider";
import Swal from "sweetalert2";

const MyFavorites = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const [favMovies, setFavMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://movieworld-server.vercel.app/favoriteMovies/${email}`)
            .then(res => res.json())
            .then(data => {
                setFavMovies(data);
                setLoading(false);
            });
    }, [email]);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://movieworld-server.vercel.app/favoriteMovies/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = favMovies.filter(favMovie => favMovie._id !== _id);
                        setFavMovies(remaining);
                        Swal.fire(
                            'Deleted!',
                            'Your movie has been deleted.',
                            'success'
                        );
                    })
                    .catch(error => {
                        Swal.fire(
                            'Error!',
                            'Something went wrong. Please try again.',
                            'error'
                        );
                    });
            }
        });
    };


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-infinity w-20"></span>
            </div>
        );
    }

    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className={`${darkTheme ? "bg-black" : "bg-white"}`}>
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
                        <h2 className={`text-4xl font-extrabold text-center my-14 tracking-wide uppercase ${darkTheme ? "text-white" : "text-black"}`}>
                            Your Favorite Movies
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-10">
                            {favMovies.map(favMovie => (
                                <div key={favMovie._id} className="mb-10">
                                    <div className={`max-w-sm shadow-lg rounded-lg overflow-hidden flex flex-col h-full ${darkTheme ? "bg-black border" : "bg-white "}`}>
                                        <img
                                            className="w-full h-64 object-cover"
                                            src={favMovie.movie.poster}
                                            alt={favMovie.movie.title}
                                        />
                                        <div className="p-5 flex flex-col flex-grow">
                                            <h2 className={`text-2xl font-bold mb-2 ${darkTheme && "text-white"} `}>{favMovie.movie.title}</h2>
                                            <div className={`flex items-center gap-2 mb-2 ${darkTheme && "text-white"}`}>
                                                <span className="text-lg font-semibold">{favMovie.movie.rating}</span>
                                            </div>
                                            <div className="mb-2">
                                                {favMovie.movie.genre.map((singleGenre, idx) => (
                                                    <span key={idx} className="inline-block bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-semibold mr-2 mb-2">
                                                        {singleGenre}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className={`text-sm  mb-2 ${darkTheme ? "text-white" : "text-gray-600"}`}>
                                                <span className="font-bold">Release Year: </span>{favMovie.movie.releaseYear}
                                            </p>

                                            <p className={`text-sm  mb-2 ${darkTheme ? "text-white" : "text-gray-600"}`}>
                                                <span className="font-bold">Duration: </span>{favMovie.movie.duration} mins
                                            </p>
                                            <p className={`text-sm  mb-2 ${darkTheme ? "text-white" : "text-gray-600"}`}>
                                                {favMovie.movie.summary}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 mt-auto">
                                            <button
                                                onClick={() => handleDelete(favMovie._id)}
                                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                                            >
                                                Delete From Favorite
                                            </button>
                                        </div>
                                    </div>
                                </div>
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