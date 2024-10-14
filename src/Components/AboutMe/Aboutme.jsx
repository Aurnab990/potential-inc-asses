import React from 'react';

const Aboutme = () => {
    return (
        <section className="bg-white py-12 -lg:ml-44">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/043/474/812/small_2x/happy-young-man-smiling-in-a-casual-red-t-shirt-png.png"
                        alt="Muhammad Umair"
                        className="w-64 h-80 rounded-full shadow-lg relative"
                    />
                </div>

                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
                    <p className="text-lg text-black mb-6">
                        I’m Muhammad Umair, a UI/UX designer with a strong passion for creating beautiful and functional user experiences.
                    </p>

                    <div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-black font-bold">UX Design</span>
                                <span className="text-gray-600">90%</span>
                            </div>
                            <div className="w-full bg-gray-300 h-2 rounded-full relative">
                                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                
                                <div
                                    className="absolute top-0 transform mt-1 -translate-y-1/2 bg-white border-2 border-orange-500 w-4 h-4 rounded-full shadow-lg"
                                    style={{ left: '88%' }}  
                                ></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-black font-bold">Web Design</span>
                                <span className="text-gray-600">85%</span>
                            </div>
                            <div className="w-full bg-gray-300 h-2 rounded-full relative">
                                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                
                                <div
                                    className="absolute top-0 transform mt-1 -translate-y-1/2 bg-white border-2 border-orange-500 w-4 h-4 rounded-full shadow-lg"
                                    style={{ left: '83%' }}  
                                ></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-black font-bold">App Design</span>
                                <span className="text-gray-600">80%</span>
                            </div>
                            <div className="w-full bg-gray-300 h-2 rounded-full relative">
                                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                
                                <div
                                    className="absolute top-0 transform mt-1 -translate-y-1/2 bg-white border-2 border-orange-500 w-4 h-4 rounded-full shadow-lg"
                                    style={{ left: '78%' }}  
                                ></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-black font-bold">Graphic Design</span>
                                <span className="text-gray-600">75%</span>
                            </div>
                            <div className="w-full bg-gray-300 h-2 rounded-full relative">
                                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                <div
                                    className="absolute top-0 transform mt-1 -translate-y-1/2 bg-white border-2 border-orange-500 w-4 h-4 rounded-full shadow-lg"
                                    style={{ left: '73%' }}  
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;
