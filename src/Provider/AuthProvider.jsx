import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";


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

    const signOutUser =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("Currently Logged User:", currentUser);
                setUser(currentUser);
            } else {
                console.log("No user logged in");
                setUser(null);
            }
            setLoader(false);
        });

        return () => unsubscribe();
    },[])

    const userInfo = {
        createUser,
        signOutUser,
        user,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;