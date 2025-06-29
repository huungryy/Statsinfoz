import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Trophy,
      value: '85%+',
      label: 'Success Rate',
      description: 'Consistent winning predictions across all sports',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Target,
      value: '250%',
      label: 'Average ROI',
      description: 'Return on investment for VIP members',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Users,
      value: '4,000+',
      label: 'Active Members',
      description: '3,000+ public channel + 1,000+ VIP members',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Client Rating',
      description: 'Based on 2,500+ verified reviews',
      color: 'from-pink-400 to-red-500'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Proven Track Record
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our data-driven approach and expert analysis deliver consistent results 
            for serious bettors looking to maximize their profits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 text-center hover:border-blue-400/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r ${stat.color} rounded-full`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                
                <h3 className="text-lg font-semibold text-blue-300 mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;