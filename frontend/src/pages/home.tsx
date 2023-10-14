import React from 'react';
import Navbar from '../components/navbar';  // Ensure the path is correct

const Home: React.FC = () => {
    return (
        <div className="flex flex-col h-screen bg-white">
            <Navbar />
            <div className="flex-grow flex justify-center items-center">
                <div className="bg-white p-8 rounded-xl shadow-md max-w-xl text-center">
                    <h1 className="text-2xl mb-4 font-bold text-blue-500">
                        Tutoring
                    </h1>
                    <p className="text-gray-600">
                        Make impact now ! Help us provide many students with good quality education
                    </p>
                    <div className="mt-4">
                        <button className="bg-blue-200 text-blue-700 hover:bg-blue-300 hover:text-blue-800 py-2 px-6 rounded-full transition duration-300 ease-in-out">
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;
