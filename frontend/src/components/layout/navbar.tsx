import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav
            style={{
                display: 'inline-flex',
                padding: '19px 30px',
                alignItems: 'center',
                gap: '84px',
                backgroundColor: 'white',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '50px',
                maxWidth: '800px',
                margin: '0 auto',
            }}
        >
            {/* Left Section */}
            <div className="flex space-x-4">
                <NavItem to="/home">Home</NavItem>
                <NavItem to="/schools">Schools</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </div>

            {/* Center Section (Logo) */}
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#64aef2' }}>
                Tutor App
            </div>

            {/* Right Section */}
            <div className="flex space-x-4">
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
