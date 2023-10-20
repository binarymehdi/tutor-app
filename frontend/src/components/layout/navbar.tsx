import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                backgroundColor: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '50px',
                maxWidth: 'calc(100% - 240px)',
                margin: '10px 120px', 
                padding: '15px 30px',
            }}
        >
            <div className="hidden md:flex space-x-4">
                <NavItem to="/home">Home</NavItem>
                <NavItem to="/schools">Schools</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </div>
            <div
                style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#64aef2',
                    flex: 1,
                    textAlign: 'center',
                }}
            >
                Tutor App
            </div>
            <div className="hidden md:flex space-x-4">
                <NavItem to="/about">About</NavItem>
                <button className="text-blue-700 hover:text-blue-500 transition duration-300 ease-in-out">
                    Sign In
                </button>
                <button className="bg-blue-500 text-white hover:bg-blue-600 py-2 px-6 rounded-full transition duration-300 ease-in-out">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

const NavItem: React.FC<{ to: string }> = ({ to, children }) => {
    return (
        <a
            href={to}
            className="text-blue-700 hover:text-blue-500 transition duration-300 ease-in-out"
        >
            {children}
        </a>
    );
};

export default Navbar;
