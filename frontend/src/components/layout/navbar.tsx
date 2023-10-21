import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-900 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <span className="text-blue-300">Tutoring</span> App
                </div>
                <ul className="flex space-x-6">
                    <NavItem to="/home">Home</NavItem>
                    <NavItem to="/tutoring">Tutoring Services</NavItem>
                    <NavItem to="/about">About Us</NavItem>
                    <NavItem to="/how">How It Works</NavItem>
                    <NavItem to="/faq">FAQ</NavItem>
                    <NavItem to="/contact">Contact</NavItem>
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

const NavItem: React.FC<{ to: string }> = ({ to, children }) => {
    return (
        <a
            href={to}
            className="text-blue-300 hover:text-blue-100 transition duration-300 ease-in-out"
        >
            {children}
        </a>
    );
};

export default Navbar;
