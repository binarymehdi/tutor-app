import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-blue-700 text-2xl font-bold">
                    <span className="text-blue-500">Tutoring</span> App
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a
                            href="#"
                            className="text-blue-700 hover:text-blue-500 transition duration-300 ease-in-out"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-blue-700 hover:text-blue-500 transition duration-300 ease-in-out"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-blue-700 hover:text-blue-500 transition duration-300 ease-in-out"
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-blue-700 hover:text-blue-500 transition duration-300 ease-in-out"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="flex items-center">
                    <button className="text-blue-700 hover:text-blue-500 transition duration-300 ease-in-out">
                        Sign In
                    </button>
                    <button className="bg-blue-500 text-white hover:bg-blue-600 ml-4 py-2 px-6 rounded-full transition duration-300 ease-in-out">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
