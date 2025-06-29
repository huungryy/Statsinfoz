import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Users } from 'lucide-react';

declare global {
  interface Window {
    paypal: any;
  }
}

const Shop = () => {
  const plans = [
    {
      name: 'Monthly VIP',
      price: '40',
      period: 'month',
      description: 'Perfect for getting started with professional betting tips',
      buttonId: '7DR7SWM8ULHK8',
      containerId: 'paypal-container-7DR7SWM8ULHK8',
      popular: false,
      icon: Users,
      features: [
        'Daily betting tips',
        'Football, Tennis, Basketball tips',
        'Basic analytics dashboard',
        'Email support',
        'Win rate tracking'
      ]
    },
    {
      name: 'Quarterly VIP',
      price: '99',
      period: '3 months',
      description: 'Most popular choice for serious bettors',
      buttonId: 'ANAFRQRXH97K4',
      containerId: 'paypal-container-ANAFRQRXH97K4',
      popular: true,
      icon: Crown,
      features: [
        'Everything in Monthly VIP',
        'Priority customer support',
        'Advanced analytics & insights',
        'Exclusive VIP community access',
        'Personal betting strategies',
        'Risk management guidance'
      ]
    },
    {
      name: 'Annual VIP',
      price: '199',
      period: 'year',
      description: 'Best value for professional bettors',
      buttonId: '9PV8LR4UUCMLE',
      containerId: 'paypal-container-9PV8LR4UUCMLE',
      popular: false,
      icon: Zap,
      features: [
        'Everything in Quarterly VIP',
        '1-on-1 strategy consultations',
        'Custom betting plans',
        'Early access to new features',
        'VIP-only webinars',
        'Dedicated account manager',
        'Highest priority support'
      ]
    }
  ];

  React.useEffect(() => {
    // Initialize PayPal buttons after component mounts
    const initializePayPalButtons = () => {
      plans.forEach(plan => {
        if (window.paypal && document.getElementById(plan.containerId)) {
          window.paypal.HostedButtons({
            hostedButtonId: plan.buttonId,
          }).render(`#${plan.containerId}`);
        }
      });
    };

    // Check if PayPal SDK is loaded
    if (window.paypal) {
      initializePayPalButtons();
    } else {
      // Wait for PayPal SDK to load
      const checkPayPal = setInterval(() => {
        if (window.paypal) {
          initializePayPalButtons();
          clearInterval(checkPayPal);
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6"
          >
            <Crown className="h-4 w-4 text-purple-400 mr-2" />
            <span className="text-sm text-purple-300">VIP Membership Plans</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Join the Elite
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Betting Community
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan to unlock professional betting insights, expert analysis, 
            and join thousands of successful bettors who trust Statsinfoz.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                    : 'border-blue-500/20'
                } hover:border-blue-400/40 transition-all duration-500`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  >
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Plan Details */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">£{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * featureIndex, duration: 0.3 }}
                      className="flex items-center text-gray-300"
                    >
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* PayPal Button */}
                <div className="space-y-4">
                  <div 
                    id={plan.containerId}
                    className="w-full"
                  />
                  
                  {/* Fallback button (shown until PayPal loads) */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    }`}
                  >
                    Choose {plan.name}
                  </motion.button>
                </div>

                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                  Secure PayPal Payment
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Statsinfoz VIP?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">85%+</div>
                <div className="text-sm text-gray-400">Average Win Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                <div className="text-sm text-gray-400">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">250%</div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
            </div>
            <p className="text-gray-400 mt-6">
              Join thousands of successful bettors who have transformed their betting approach with our professional guidance.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;