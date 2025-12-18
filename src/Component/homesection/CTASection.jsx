import React from 'react';

const CTASection = () => {
    return (
        <div className="py-16 px-4 bg-gradient-to-br from-[#2196f3] to-[#64b5f6] dark:from-gray-800 dark:to-gray-900 ">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to Take Control of Your Finances?
                </h2>
                <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
                    Join thousands of users who have transformed their financial lives with FinEase
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-[#1e88e5] text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#1976d2] transition duration-300 transform hover:scale-105">
                        Get Started Free
                    </button>
                    <button className=" border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg  transition duration-300">
                        Schedule a Demo
                    </button>
                </div>
                <p className="text-cyan-200 mt-6 text-sm">
                    No credit card required • 14-day free trial • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default CTASection;