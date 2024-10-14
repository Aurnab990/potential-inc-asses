import React from 'react';

const Letsdotogether = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
                
                <h2 className="text-4xl font-bold text-black mb-4">Let's Design Together</h2>
                <p className="text-lg text-black mb-8">
                    Ready to start your next project? Contact me today, and let's <br></br> create something amazing together!
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-full sm:w-96 lg:w-1/3 sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-md hover:bg-orange-600 transition-all">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Letsdotogether;
