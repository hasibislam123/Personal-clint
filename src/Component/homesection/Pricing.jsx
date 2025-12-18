import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: "Basic",
            price: "Free",
            description: "Perfect for individuals getting started",
            features: [
                "Track up to 5 accounts",
                "Basic expense categorization",
                "Monthly reports",
                "Email support"
            ],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Premium",
            price: "$9.99",
            period: "per month",
            description: "Ideal for serious financial management",
            features: [
                "Unlimited accounts",
                "Advanced analytics",
                "Budgeting tools",
                "Goal tracking",
                "Priority support",
                "Export data (CSV, PDF)"
            ],
            cta: "Try Free for 14 Days",
            popular: true
        },
        {
            name: "Business",
            price: "$29.99",
            period: "per month",
            description: "For freelancers and small businesses",
            features: [
                "Everything in Premium",
                "Multi-user access",
                "Invoice generation",
                "Tax reporting",
                "Dedicated account manager",
                "API access"
            ],
            cta: "Start Free Trial",
            popular: false
        }
    ];

    return (
        <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Choose the plan that works best for you. All plans include our core features.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`rounded-2xl shadow-lg p-6 relative flex flex-col ${
                                plan.popular 
                                    ? 'bg-gradient-to-br from-[#64b5f6] to-[#2d88ff] text-white ring-4 ring-cyan-300 dark:ring-cyan-700' 
                                    : 'bg-white dark:bg-gray-800'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-white text-sm font-bold px-4 py-1 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}
                            
                            <div className="text-center mb-6">
                                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                                    {plan.name}
                                </h3>
                                <div className="mb-4">
                                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span className={`text-lg ${plan.popular ? 'text-cyan-100' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {plan.period}
                                        </span>
                                    )}
                                </div>
                                <p className={plan.popular ? 'text-cyan-100' : 'text-gray-600 dark:text-gray-400'}>
                                    {plan.description}
                                </p>
                            </div>
                            
                            <ul className="mb-8 space-y-3 flex-grow">
                                {plan.features.map((feature, featureIndex) => (
                                    <li 
                                        key={featureIndex} 
                                        className="flex items-center"
                                    >
                                        <svg 
                                            className={`w-5 h-5 mr-2 ${plan.popular ? 'text-cyan-200' : 'text-cyan-500'}`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth="2" 
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        <span className={plan.popular ? 'text-white' : 'text-gray-600 dark:text-gray-300'}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button 
                                className={`w-full py-3 rounded-lg font-semibold transition duration-300 mt-auto ${
                                    plan.popular 
                                        ? 'bg-[#1e88e5] text-white hover:bg-[#1976d2]' 
                                        : 'bg-[#1e88e5] text-white hover:bg-[#1976d2]'
                                }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;