import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/NavBar/Nav";

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;