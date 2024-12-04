import { Outlet } from "react-router-dom";
import Nav from "../../Components/NavBar/Nav";
import Footer from "../../Components/Footer/Footer";

const AuthLayOut = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayOut;