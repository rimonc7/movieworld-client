import { createContext, useState } from "react";
import app from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const [errorMessage, setErrorMessage] = useState("");



    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const userInfo = {
        createUser,
    }

    
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;