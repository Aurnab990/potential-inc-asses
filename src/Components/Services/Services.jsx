import React from 'react';
import { FaDesktop, FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'; 

const Services = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-black mb-4">Services</h2>
                    <p className="text-lg text-black">
                        I offer a variety of design services to help elevate your brand and ensure a seamless user experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-200 border-2 shadow-lg rounded-lg p-6 text-center w-full h-full flex flex-col justify-center"> 
                        <FaDesktop className="text-orange-500 text-5xl mb-4 mx-auto" /> {/* UX/UI Icon */}
                        <h3 className="text-lg font-bold mb-2 text-black">UX/UI Design</h3>
                        <p className="text-black text-sm text-left">
                        Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do tem eiusmod incididunt.
                        </p>
                    </div>

                    <div className="bg-gray-200 border-2 shadow-lg rounded-lg p-6 text-center w-full h-full flex flex-col justify-center"> 
                        <FaCode className="text-orange-500 text-5xl mb-4 mx-auto" /> {/* Web Design Icon */}
                        <h3 className="text-lg font-bold mb-2 text-black">Web Design</h3>
                        <p className="text-black text-sm text-left">
                        Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do tem eiusmod incididunt.
                        </p>
                    </div>

                    <div className="bg-gray-200 border-2 shadow-lg rounded-lg p-6 text-center w-full h-full flex flex-col justify-center"> 
                        <FaMobileAlt className="text-orange-500 text-5xl mb-4 mx-auto" /> {/* App Design Icon */}
                        <h3 className="text-lg font-bold mb-2 text-black">App Design</h3>
                        <p className="text-black text-sm text-left">
                        Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do tem eiusmod incididunt.
                        </p>
                    </div>

                    <div className="bg-gray-200 border-2 shadow-lg rounded-lg p-6 text-center w-full h-full flex flex-col justify-center"> 
                        <FaPaintBrush className="text-orange-500 text-5xl mb-4 mx-auto" /> {/* Graphic Design Icon */}
                        <h3 className="text-lg font-bold mb-2 text-black">Graphic Design</h3>
                        <p className="text-black text-sm text-left">
                            Lorem ipsum dolor sit amet, consectetur elit adipiscing, sed do tem eiusmod incididunt.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
