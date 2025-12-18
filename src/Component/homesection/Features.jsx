import React from 'react';
import { FaChartLine, FaLock, FaMobileAlt, FaSync } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: <FaChartLine className="text-3xl text-cyan-600 dark:text-cyan-400" />,
            title: "Advanced Analytics",
            description: "Get detailed insights into your spending habits with interactive charts and reports."
        },
        {
            icon: <FaLock className="text-3xl text-cyan-600 dark:text-cyan-400" />,
            title: "Bank-Level Security",
            description: "Your financial data is protected with military-grade encryption and multi-factor authentication."
        },
        {
            icon: <FaMobileAlt className="text-3xl text-cyan-600 dark:text-cyan-400" />,
            title: "Mobile Accessibility",
            description: "Access your accounts anytime, anywhere with our fully responsive mobile application."
        },
        {
            icon: <FaSync className="text-3xl text-cyan-600 dark:text-cyan-400" />,
            title: "Real-Time Sync",
            description: "All your transactions are automatically synced across all your devices instantly."
        }
    ];

    return (
        <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Powerful Features</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Everything you need to take control of your finances and achieve your financial goals
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;