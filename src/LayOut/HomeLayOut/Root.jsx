import { Outlet } from "react-router-dom";
import Nav from "../../Components/NavBar/Nav";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;