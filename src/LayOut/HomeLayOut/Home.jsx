
import Marquee from "react-fast-marquee";
import Banner from "./Banner";
import FeaturedMovies from "./FeaturedMovies";
import { Link } from "react-router-dom";


const Home = () => {
    const upComingMovies = [
        { "title": "Nightbitch", "release_date": "December 6, 2024" },
        { "title": "Kraven the Hunter", "release_date": "December 13, 2024" },
        { "title": "The Lord of the Rings: The War of the Rohirrim", "release_date": "December 13, 2024" },
        { "title": "Sonic the Hedgehog 3", "release_date": "December 20, 2024" },
        { "title": "Mufasa: The Lion King", "release_date": "December 20, 2024" },
        { "title": "Nosferatu", "release_date": "December 25, 2024" },
        { "title": "Paddington in Peru", "release_date": "January 17, 2025" },
        { "title": "Captain America: Brave New World", "release_date": "February 14, 2025" },
        { "title": "Moana 2", "release_date": "November 27, 2024" },
        { "title": "Gladiator 2", "release_date": "November 22, 2024" }
    ]


    return (
        <div>
            <Banner></Banner>
            <section className="py-8 bg-gray-800">
                <h1 className="text-center text-4xl font-extrabold mb-9 uppercase text-white tracking-wide">
                    Upcoming Movies
                </h1>
                <Marquee gradient={false} speed={50} pauseOnHover>
                    {upComingMovies.map((movie, index) => (
                        <div
                            key={index}
                            className="mx-5 border border-gray-700 p-4 space-y-3 rounded-md bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold text-white">{movie.title}</h2>
                            <p className="text-sm text-gray-400">{movie.release_date}</p>
                            <div className="flex justify-center">
                                <Link to={`https://www.youtube.com/results?search_query=${movie.title}`} target="blank" className=" bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600 transition-colors">
                                    Watch Trailer
                                </Link>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </section>

            <FeaturedMovies></FeaturedMovies>
        </div>
    );
};

export default Home;