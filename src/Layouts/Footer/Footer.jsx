import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-12">
            <div className="text-center mb-8">
               
                <h1 className="text-2xl">
                    <span className="font-bold text-black">M</span>
                    <span className="text-gray-500">umair</span>
                </h1>
            </div>

            <div className="flex flex-col space-y-4 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-6 text-center mb-8">
                <a href="#home" className="text-black text-lg hover:text-orange-500 transition">Home</a>
                <a href="#about" className="text-black text-lg hover:text-orange-500 transition">About</a>
                <a href="#services" className="text-black text-lg hover:text-orange-500 transition">Services</a>
                <a href="#projects" className="text-black text-lg hover:text-orange-500 transition">Projects</a>
                <a href="#testimonial" className="text-black text-lg hover:text-orange-500 transition">Testimonials</a>
                <a href="#contact" className="text-black text-lg hover:text-orange-500 transition">Contact</a>
            </div>

            <div className="flex justify-center space-x-6 mb-12">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl text-black hover:text-orange-500 transition" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-2xl text-black hover:text-orange-500 transition" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl text-black hover:text-orange-500 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl text-black hover:text-orange-500 transition" />
                </a>
            </div>

            <div className="bg-gray-900 py-4">
                <p className="text-center text-white text-sm">
                    &copy; 2024 <span className="text-orange-500 font-semibold">Mumair</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
