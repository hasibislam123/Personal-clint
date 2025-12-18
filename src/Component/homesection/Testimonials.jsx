import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Freelance Designer",
            content: "FinEase has completely transformed how I manage my finances. The intuitive interface and powerful analytics help me save 30% more each month.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
            name: "Michael Chen",
            role: "Small Business Owner",
            content: "As a business owner, keeping track of expenses was a nightmare. FinEase simplified everything and saved me hours of bookkeeping each week.",
            rating: 5,
            avatar: "https://randomuser.me/api/portraits/men/54.jpg"
        },
        {
            name: "Emma Rodriguez",
            role: "Marketing Manager",
            content: "The budgeting tools are exceptional. I've paid off my student loans 6 months early thanks to the smart recommendations and tracking features.",
            rating: 4,
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    return (
        <div className="py-12 px-4 ">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">What Our Users Say</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Join thousands of satisfied users who have transformed their financial lives
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar 
                                        key={i} 
                                        className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`} 
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                "{testimonial.content}"
                            </p>
                            <div className="flex items-center">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name} 
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;