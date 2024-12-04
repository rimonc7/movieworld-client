import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { loader, user } = useContext(AuthContext)

    if (loader) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-infinity w-20"></span>
            </div>
        );
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/auth/login"></Navigate>
    );
};

export default PrivateRoutes;