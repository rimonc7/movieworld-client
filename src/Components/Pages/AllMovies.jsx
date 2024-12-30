import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import FeaturedMovie from "../../LayOut/HomeLayOut/FeaturedMovie";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";

const AllMovies = () => {
    const movies = useLoaderData();

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const {darkTheme} = useContext(ThemeContext)

    return (
        <div className={`${darkTheme? "bg-black":"bg-white"}`}>
            <Helmet>
                <title>All Movies</title>
            </Helmet>
            <Nav></Nav>
            <h2 className={`text-4xl font-extrabold text-center my-14 tracking-wide uppercase ${darkTheme?"text-white":"text-black"} `}>
                Movie Library
            </h2>
            <div className="my-4 w-11/12 mx-auto">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder="Search Movies by Title..."
                    className="p-2 w-fit border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mx-auto w-11/12 my-10">
                {
                    filteredMovies.length > 0 ? (
                        filteredMovies.map(movie => (
                            <FeaturedMovie key={movie._id} movie={movie}></FeaturedMovie>
                        ))
                    ) : (
                        <p>No movies found matching your search.</p>
                    )
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AllMovies;
