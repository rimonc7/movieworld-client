import { Link, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import { FaStar, FaClock, FaCalendarAlt, FaFilm } from 'react-icons/fa';


const MovieDetails = () => {
    const movie = useLoaderData();
    const { _id, poster, title, rating, genre, duration, releaseYear, summary } = movie;
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
                        <Link to="https://www.youtube.com/" target="_blank">
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg transition">
                                Watch Trailer
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MovieDetails;