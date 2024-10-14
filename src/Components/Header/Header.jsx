import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
                
                <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
                    <h1 className="text-lg font-bold text-gray-800 mb-1">
                        Hi I am
                    </h1>
                    <h2 className="text-xl font-bold text-orange-500 mb-1">
                        Muhammad Umair
                    </h2>
                    <h3 className="text-4xl font-bold text-black mb-1">
                        UI & UX
                    </h3>
                    <h3 className="text-4xl ml-24 font-bold text-black mb-4">
                        Designer
                    </h3>
                    <p className="text-sm text-black mb-6">
                        I'm a passionate UI/UX designer focused on creating visually appealing, user-friendly interfaces that offer seamless and delightful user experiences.
                    </p>
                    <a
                        href="#hire-me"
                        className="w-2/4 lg:w-1/4 bg-orange-500 text-white px-6 py-3 rounded font-semibold hover:bg-orange-600"
                    >
                        Hire Me
                    </a>
                </div>

                <div className="md:w-1/2 flex flex-col justify-center items-center relative">
                   
                    <div className="absolute w-72 h-72 border-4 border-orange-500 opacity-30 rounded-full"></div>

                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/043/474/812/small_2x/happy-young-man-smiling-in-a-casual-red-t-shirt-png.png"
                        alt="Muhammad Umair"
                        className="w-64 h-80 rounded-full shadow-lg relative"
                    />

                    <div className="mt-2 flex space-x-6">
                        <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noreferrer">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400" target="_blank" rel="noreferrer">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://instagram.com" className="text-gray-600 hover:text-pink-500" target="_blank" rel="noreferrer">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-700" target="_blank" rel="noreferrer">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
