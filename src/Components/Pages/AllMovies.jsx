import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";
import FeaturedMovie from "../../LayOut/HomeLayOut/FeaturedMovie";

const AllMovies = () => {
    const movies = useLoaderData()

    return (
        <div>
            <Nav></Nav>
            <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mx-auto w-11/12 my-10">
                {
                    movies.map(movie => <FeaturedMovie key={movie._id} movie={movie}></FeaturedMovie>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AllMovies;