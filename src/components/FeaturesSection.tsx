import React from 'react';
import { motion } from 'framer-motion';
import { FolderRoot as Football, Activity, Calendar, BarChart3 } from 'lucide-react';

const FeaturesSection = () => {
  const sports = [
    {
      icon: Football,
      name: 'Football',
      description: 'Premier League, Champions League, and major tournaments worldwide',
      stats: '90%+ accuracy',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Activity,
      name: 'Tennis',
      description: 'ATP, WTA, Grand Slams, and qualifying matches',
      stats: '85%+ accuracy',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Calendar,
      name: 'Basketball',
      description: 'NBA, EuroLeague, and international competitions',
      stats: '82%+ accuracy',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: BarChart3,
      name: 'Baseball',
      description: 'MLB regular season and playoff coverage',
      stats: '88%+ accuracy',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
      
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
              Multi-Sport Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From football pitches to tennis courts, basketball arenas to baseball diamonds—our expert 
            analysis covers the sports that matter most to serious bettors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sports.map((sport, index) => {
            const Icon = sport.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 text-center hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-r ${sport.color} rounded-full shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {sport.name}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                  {sport.description}
                </p>
                
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={`inline-block px-3 py-1 bg-gradient-to-r ${sport.color} bg-opacity-20 border border-current rounded-full text-sm font-semibold`}
                  style={{ color: sport.color.split(' ')[0].replace('from-', '') }}
                >
                  {sport.stats}
                </motion.div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;