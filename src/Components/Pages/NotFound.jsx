import { FaFilm } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-center">
                <FaFilm size={60} className="text-blue-500 mb-4" />
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-xl text-gray-600 mt-4">
                    Oops! The page you're looking for isn't here.
                </p>
                <p className="text-lg text-gray-500 mt-2">
                    Maybe you were looking for a movie we haven't added yet?
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;