import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import { FaFilm, FaImage, FaTags, FaClock, FaCalendarAlt, FaStar, FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddMovie = () => {

    const handleAddMovie = e => {
        e.preventDefault();
        const form = e.target;
        const poster = form.poster.value;
        const title = form.title.value;
        const genre = form.genre.value.split(",").map(item => item.trim());
        const duration = parseInt(form.duration.value);
        const releaseYear = parseInt(form.releaseYear.value);
        const rating = parseFloat(form.rating.value);
        const summary = form.summary.value;
        const newMovie = { poster, title, genre, duration, releaseYear, rating, summary }
        fetch('https://movieworld-server.vercel.app/movies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMovie)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                toast.success('Movie added successfully!')
            })
    }


    return (
        <div>
            <Helmet>
                <title>AddMovie</title>
            </Helmet>
            <Nav></Nav>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add a Movie</h2>
                    <form onSubmit={handleAddMovie} className="space-y-4">
                        <div>
                            <label className="block text-gray-600 mb-1" htmlFor="poster">
                                Poster URL
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaImage className="text-gray-400 mr-2" />
                                <input
                                    type="url"
                                    id="poster"
                                    name="poster"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter movie poster URL"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1" htmlFor="title">
                                Movie Title
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaFilm className="text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter movie title"
                                    minLength="2"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1" htmlFor="genre">
                                Genre
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaTags className="text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    id=""
                                    name="genre"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter movie genres (comma-separated)"
                                    list="genre-options"
                                />
                                <datalist id="genre-options">
                                    <option value="Action" />
                                    <option value="Comedy" />
                                    <option value="Drama" />
                                    <option value="Horror" />
                                    <option value="Romance" />
                                    <option value="Sci-Fi" />
                                </datalist>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1" htmlFor="duration">
                                Duration (minutes)
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaClock className="text-gray-400 mr-2" />
                                <input
                                    type="number"
                                    id=""
                                    name="duration"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter movie duration"
                                    min="60"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1" htmlFor="releaseYear">
                                Release Year
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaCalendarAlt className="text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    id="releaseYear"
                                    name="releaseYear"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter release year"
                                    required
                                    list="year-options"
                                />
                                <datalist id="year-options">
                                    <option value="2024" />
                                    <option value="2023" />
                                    <option value="2022" />
                                    <option value="2021" />
                                    <option value="2020" />
                                    <option value="2019" />
                                </datalist>
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1" htmlFor="rating">
                                Rating (1-5)
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaStar className="text-gray-400 mr-2" />
                                <input
                                    type="number"
                                    id="rating"
                                    name="rating"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter movie rating"
                                    step="0.1"
                                    min="1"
                                    max="5"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1" htmlFor="summary">
                                Summary
                            </label>
                            <div className="flex items-start border rounded-lg px-3 py-2 bg-gray-50">
                                <FaInfoCircle className="text-gray-400 mr-2 mt-1" />
                                <textarea
                                    id="summary"
                                    name="summary"
                                    className="w-full bg-gray-50 outline-none resize-none"
                                    placeholder="Enter a brief summary"
                                    rows="4"
                                    minlength="10"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Add Movie
                        </button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
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
    );
};

export default AddMovie;