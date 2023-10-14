import React from 'react';
import Navbar from '../components/navbar';  // Ensure the path is correct

const Home: React.FC = () => {
    return (
        <div className="flex flex-col h-screen bg-white">
            <Navbar />
            <div className="flex-1 flex justify-center items-center overflow-y-auto">
                <div className="grid grid-cols-3 gap-4 w-full max-w-screen-xl mx-auto p-8">
                    <div className="bg-white p-8 rounded-xl shadow-md col-span-1">
                        <h1 className="text-2xl mb-4 font-bold text-blue-500">
                            Tutoring
                        </h1>
                        <p className="text-gray-600">
                            Discover a world of features and experiences tailored just for you. Dive in now.
                        </p>
                        <div className="mt-4">
                            <button className="bg-blue-200 text-blue-700 hover:bg-blue-300 hover:text-blue-800 py-2 px-6 rounded-full transition duration-300 ease-in-out">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
