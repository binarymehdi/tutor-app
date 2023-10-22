import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-900 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-3xl font-bold">
                    <span className="text-blue-300">Tutoring</span> App
                </div>
                <ul className="flex space-x-6">
                    <a href="/home" className="text-blue-300 hover:text-blue-100 transition duration-300 ease-in-out">
                        Home
                    </a>
                    <a href="/tutoring" className="text-blue-300 hover:text-blue-100 transition duration-300 ease-in-out">
                        Tutoring Services
                    </a>
                    <a href="/about" className="text-blue-300 hover:text-blue-100 transition duration-300 ease-in-out">
                        About Us
                    </a>
                    <a href="/how" className="text-blue-300 hover:text-blue-100 transition duration-300 ease-in-out">
                        How It Works
                    </a>
                    <a href="/faq" className="text-blue-300 hover:text-blue-100 transition duration-300 ease-in-out">
                        FAQ
                    </a>
                    <a href="/contact" className="text-blue-300 hover:text-blue-100 transition duration-300 ease-in-out">
                        Contact
                    </a>
                </ul>
                <div className="flex items-center space-x-4">
                    <button className="text-blue-300 hover:text-blue-100 transition duration-300 ease-in-out">
                        Sign In
                    </button>
                    <button className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-6 rounded-full transition duration-300 ease-in-out">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
