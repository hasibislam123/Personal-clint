import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About FinEase</h1>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-8">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        FinEase is a modern financial management platform designed to help individuals and businesses 
                        take control of their finances with ease and precision.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Our Mission</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                To empower people with intuitive tools that simplify financial management, 
                                enabling smarter decisions and greater financial well-being.
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Our Vision</h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                To become the most trusted and user-friendly financial management platform 
                                worldwide, helping millions achieve their financial goals.
                            </p>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Why Choose FinEase?</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mr-3 mt-1">
                                    <span className="text-cyan-600 dark:text-cyan-400 text-lg">✓</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">Intuitive and user-friendly interface</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mr-3 mt-1">
                                    <span className="text-cyan-600 dark:text-cyan-400 text-lg">✓</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">Real-time expense tracking</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mr-3 mt-1">
                                    <span className="text-cyan-600 dark:text-cyan-400 text-lg">✓</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">Comprehensive reporting and analytics</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center mr-3 mt-1">
                                    <span className="text-cyan-600 dark:text-cyan-400 text-lg">✓</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">Bank-level security and encryption</p>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We are a dedicated team of financial experts, developers, and designers committed to 
                        delivering the best financial management experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;