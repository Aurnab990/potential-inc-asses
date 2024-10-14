import React from 'react';

const testimonial = {
    name: "John Doe",
    role: "Web Developer",
    review: "Working with Aurnab was a great experience! Their attention to detail and design skills are top-notch.Working with Aurnab was a great experience! Their attention to detail and design skills are top-notch.Working with Aurnab was a great experience! Their attention to detail and design skills.",
    image: "https://via.placeholder.com/100" 
};

const Testimonials = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-black mb-4">Testimonials</h2>
                    <p className="text-lg text-black">
                        Hear what my clients have to say about my work. Their feedback motivates me to deliver the best.Their feedback motivates me to deliver the best
                    </p>
                </div>

                <div className="bg-gray-100 rounded-lg p-6 flex flex-col lg:flex-row items-center text-center">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full border-2 border-orange-500 mr-4"
                    />
                    <div>
                        <p className="text-black text-left mt-2">{testimonial.review}</p>
                        <h3 className="text-lg font-bold text-left text-black">{testimonial.name}</h3>
                        <p className="text-sm text-left text-gray-600">{testimonial.role}</p>
                        
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <div className="flex space-x-2">
                        <span className="block w-8 h-3 bg-gray-400 rounded-full"></span>
                        <span className="block w-8 h-3 bg-orange-500 rounded-full"></span>
                        <span className="block w-8 h-3 bg-gray-400 rounded-full"></span>
                        <span className="block w-8 h-3 bg-gray-400 rounded-full"></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
