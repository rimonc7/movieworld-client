import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import Nav from "../NavBar/Nav";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [showPass, SetShowPass] = useState(false);
    const { loginUser,signinWithGmail, errorMessage, setErrorMessage } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        setErrorMessage("")
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                form.reset()
                navigate('/')
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
    }

    const handleGoogleLogin = () => {
        setErrorMessage("");
        signinWithGmail()
            .then(result => {
                navigate('/')
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
    }


    return (
        <div>
            <Nav></Nav>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                    <form onSubmit={handleLogin} className="mt-4">
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-1" htmlFor="email">
                                Email
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaEnvelope className="text-gray-400 mr-2" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-1" htmlFor="password">
                                Password
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaLock className="text-gray-400 mr-2" />
                                <input
                                    type={showPass ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter your password"
                                />
                                <button onClick={() => SetShowPass(!showPass)} type="button">
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <div className="mb-4 text-right">
                            <a href="#" className="text-blue-500 text-sm hover:underline">
                                Forget Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Login
                        </button>
                        <button
                            onClick={handleGoogleLogin}
                            type="button"
                            className="w-full mt-4 bg-red-500 text-white font-bold py-2 rounded-lg flex items-center justify-center hover:bg-red-600 transition"
                        >
                            <FaGoogle className="mr-2" />
                            Login with Google
                        </button>
                    </form>
                    {
                        errorMessage && (
                            <div className="mt-4 text-center">
                                <p className="text-red-500">{errorMessage}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;