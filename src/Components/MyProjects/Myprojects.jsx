import React, { useState } from 'react';

const MyProjects = () => {
    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState('Web Design');

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                {/* Title and Description */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-black mb-4">My Projects</h2>
                    <p className="text-lg text-black">
                        Check out some of the projects I've worked on. These reflect my expertise in various design domains.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 border rounded-lg transition-colors duration-200 ${
                                selectedCategory === category
                                    ? 'bg-orange-500 text-white font-bold'
                                    : 'bg-gray-200 text-black font-bold hover:bg-gray-300'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Display */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="rounded-lg p-6">
                        <img
                            src="https://i.pinimg.com/736x/df/08/a5/df08a58fcf8fb02e4723d6af0e539aed.jpg"
                            alt="Project 1"
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-sm font-bold text-orange-500">Web Design</h3>
                        <p className="text-black text-sm">A modern, responsive website built with a clean user interface.</p>
                    </div>

                    {/* Project 2 */}
                    <div className="rounded-lg p-6">
                        <img
                            src="https://i.pinimg.com/236x/23/4e/e9/234ee9e2184d9982d21595adbc28950b.jpg"
                            alt="Project 2"
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-sm font-bold text-orange-500">App Design</h3>
                        <p className="text-black text-sm">An intuitive mobile application with user-friendly design.</p>
                    </div>

                    {/* Project 3 */}
                    <div className="rounded-lg p-6">
                        <img
                            src="https://i.pinimg.com/736x/4a/a7/c9/4aa7c92e6abc2411bab7c6e07f1e3e08.jpg"
                            alt="Project 3"
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-sm font-bold text-orange-500">Graphic Design</h3>
                        <p className="text-black text-sm">A stunning graphic design that enhances brand visibility.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProjects;
