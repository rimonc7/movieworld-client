import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav from "../NavBar/Nav";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMessage,setErrorMessage]= useState()

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const user = { name, email, photo, password }
        console.log(user);
        createUser(email, password)
            .then(result => {
                const user = result.user;
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
                    <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
                    <form onSubmit={handleRegister} className="mt-4">
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-1" htmlFor="name">
                                Name
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaUser className="text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>

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
                            <label className="block text-gray-600 mb-1" htmlFor="photoURL">
                                Photo URL
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <input
                                    type="text"
                                    id="photoURL"
                                    name="photo"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter your profile photo URL"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-600 mb-1" htmlFor="password">
                                Password
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
                                <FaLock className="text-gray-400 mr-2" />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-full bg-gray-50 outline-none"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Register
                        </button>
                    </form>

                    <p className="mt-4 text-center text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                    {errorMessage && (
                        <div className="mt-4 text-center">
                            <p className="text-red-500">{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Register;
