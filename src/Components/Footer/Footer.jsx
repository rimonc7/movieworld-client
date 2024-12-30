import { FaFacebook, FaTwitter,FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
            <footer className="footer footer-center bg-[#1E293B] text-white rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover text-gray-300">About Movie World</a>
                    <a className="link link-hover text-gray-300">Contact Us</a>
                    <a className="link link-hover text-gray-300">Our Team</a>
                    <a className="link link-hover text-gray-300">Movie Reviews</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 mt-4">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} className="text-blue-500 hover:text-blue-600 transition" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} className="text-blue-400 hover:text-blue-500 transition" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} className="text-blue-700 hover:text-blue-800 transition" />
                        </a>
                    </div>
                </nav>
                <aside className="mt-4">
                    <p className="text-gray-400">
                        Copyright © {new Date().getFullYear()} - All rights reserved by <strong>Movie World</strong>
                    </p>
                </aside>
            </footer>
    );
};

export default Footer;
