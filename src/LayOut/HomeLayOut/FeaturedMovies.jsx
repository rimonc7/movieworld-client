import { useEffect, useState } from "react";
import FeaturedMovie from "./FeaturedMovie";

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/movies?limit=6')
            .then(res => res.json())
            .then(data => {
                setMovies(data)
            })
    }, [])
    return (
        <>
            <h2 className="text-4xl font-extrabold text-center text-black my-14 tracking-wide uppercase">
                Featured Movie of the Week
            </h2>
            <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mx-auto w-11/12">
                {
                    movies.map(movie => <FeaturedMovie key={movie._id} movie={movie}></FeaturedMovie>)
                }
            </div>
        </>

    );
};

export default FeaturedMovies;