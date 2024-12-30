import { Outlet } from "react-router-dom";
import Nav from "../../Components/NavBar/Nav";
import Footer from "../../Components/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/ThemeProvider";

const Root = () => {
    const { darkTheme } = useContext(ThemeContext)

    return (
        <div className={`${darkTheme ? "bg-black text-white" : "bg-white text-black"}`}>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;