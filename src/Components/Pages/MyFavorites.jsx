import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";
import Nav from "../NavBar/Nav";

const MyFavorites = () => {
    return (
        <div>
            <Helmet>
                <title>My Favorites</title>
            </Helmet>
            <Nav></Nav>
            <Footer></Footer>
        </div>
    );
};

export default MyFavorites;