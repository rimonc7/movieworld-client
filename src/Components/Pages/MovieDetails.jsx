import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import { FaStar, FaClock, FaCalendarAlt, FaFilm } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MovieDetails = () => {
    const movie = useLoaderData();
    const { user } = useContext(AuthContext);
    const { poster, title, rating, genre, duration, releaseYear, summary } = movie;

    const handleFavorite = () => {
        const email = user.email;
        const favMovie = { email, movie };

        fetch("http://localhost:5000/favoriteMovies", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(favMovie),
        })
            .then((res) => {
                if (res.status === 409) {
                    toast.error('You have already added this movie as favorite');
                    return null; 
                }
                return res.json();
            })
            .then((data) => {
                if (data) {
                    toast.success('Movie added as Favorite');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('Failed to add favorite movie. Please try again.');
            });
    };


    return (
        <div>
            <Nav></Nav>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
                <h2 className="text-4xl font-extrabold text-center text-black mb-10 tracking-wide uppercase mt-5">
                    Movie Details : {title}
                </h2>
                <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                        src={poster}
                        alt="Movie Poster"
                        className="w-full h-96 object-cover"
                    />
                    <div className="p-8">
                        <h1 className="text-4xl font-bold text-blue-600 mb-4">{title}</h1>
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center text-yellow-500">
                                <FaStar className="mr-1" />
                                <span className="text-xl font-semibold">{rating}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <FaClock className="mr-1" />
                                <span>{duration} mins</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <FaCalendarAlt className="mr-1" />
                                <span>{releaseYear}</span>
                            </div>
                            {
                                genre.map((singleGenre, idx) => (
                                    <div key={idx} className="flex items-center text-gray-600">
                                        <FaFilm className="mr-1" />
                                        <span>{singleGenre}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            {summary}
                        </p>
                        <button onClick={handleFavorite} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg transition">
                            Add to Favorite
                        </button>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={true}
                    pauseOnHover={true}
                    theme="colored"
                />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MovieDetails;