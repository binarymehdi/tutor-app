import React from 'react';
import Navbar from '../components/navbar';  // Ensure the path is correct

const home: React.FC = () => {
    return (
        <div className="flex flex-col h-screen bg-blue-500">
            <Navbar />
            <div className="flex-1 flex justify-center items-center bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl w-full">
                    <h1 className="text-2xl mb-4 font-bold text-blue-500">
                        Welcome to <span className="text-yellow-400">My</span> App!
                    </h1>
                    <p className="text-gray-600">
                        Discover a world of features and experiences tailored just for you. Dive in now.
                    </p>
                    <div className="mt-4">
                        <button className="bg-yellow-400 text-blue-500 hover:bg-yellow-300 hover:text-blue-600 py-2 px-6 rounded-full transition duration-300 ease-in-out">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <footer className="bg-blue-700 text-white text-center py-4">
                &copy; 2023 My App. All rights reserved.
            </footer>
        </div>
    );
};

export default home;
