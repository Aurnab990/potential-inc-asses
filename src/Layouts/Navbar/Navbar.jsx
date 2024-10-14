import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    
                    <div className="flex-shrink-0 ml-4 lg:ml-16">
                        <h1 className="text-2xl">
                            <span className="font-bold text-black">M</span>
                            <span className="text-gray-500">umair</span>
                        </h1>
                    </div>

                    <div className="flex md:hidden mr-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-500 hover:text-gray-900 focus:outline-none"
                        >
                            
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#home" className="text-black-600 hover:text-gray-900">Home</a>
                        <a href="#about" className="text-black-600 hover:text-gray-900">About</a>
                        <a href="#services" className="text-black-600 hover:text-gray-900">Services</a>
                        <a href="#projects" className="text-black-600 hover:text-gray-900">Projects</a>
                        <a href="#testimonial" className="text-black-600 hover:text-gray-900">Testimonial</a>
                        <a href="#contact" className="text-black-600 hover:text-gray-900">Contact</a>
                        <div className="flex items-center">
                            <a
                                href="#"
                                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-2 pb-4 space-y-2">
                    <a href="#home" className="block text-black-600 hover:text-gray-900">Home</a>
                    <a href="#about" className="block text-black-600 hover:text-gray-900">About</a>
                    <a href="#services" className="block text-black-600 hover:text-gray-900">Services</a>
                    <a href="#projects" className="block text-black-600 hover:text-gray-900">Projects</a>
                    <a href="#testimonial" className="block text-black-600 hover:text-gray-900">Testimonial</a>
                    <a href="#contact" className="block text-black-600 hover:text-gray-900">Contact</a>
                    <a
                        href="#"
                        className="block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-center"
                    >
                        Download CV
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
