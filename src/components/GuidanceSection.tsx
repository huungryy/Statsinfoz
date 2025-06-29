import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calculator, Shield, Zap, Users, Award, Send } from 'lucide-react';

const GuidanceSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Strategic Learning',
      description: 'Learn proven betting strategies from industry professionals with years of experience.'
    },
    {
      icon: Calculator,
      title: 'Smart Staking',
      description: 'Discover optimal staking plans and bankroll management techniques for long-term success.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Understand when to play, when to pause, and how to protect your capital effectively.'
    },
    {
      icon: Zap,
      title: 'Real-time Alerts',
      description: 'Receive instant notifications for high-value betting opportunities across all sports.'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Join our exclusive VIP group for direct access to professional tipsters and analysts.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track your progress with detailed analytics and performance metrics.'
    }
  ];

  // Sparkle animation component
  const SparkleEffect = ({ className = "" }) => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-slate-900/20" />
      <SparkleEffect />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-6 relative overflow-hidden"
            >
              <SparkleEffect className="rounded-full" />
              <Award className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300">Professional Guidance</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Master the Art of
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Strategic Betting
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Don't gamble with your future. At Statsinfoz, we transform casual bettors into strategic professionals 
              through proven methodologies, expert insights, and comprehensive guidance. Learn not just what to bet, 
              but when to bet, how much to stake, and most importantly—when to step back.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 mb-6 relative overflow-hidden"
            >
              <SparkleEffect />
              <h3 className="text-xl font-semibold text-white mb-3">Why Choose Professional Guidance?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                  Eliminate emotional betting decisions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                  Maximize long-term profitability
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                  Learn sustainable betting practices
                </li>
              </ul>
            </motion.div>

            {/* Telegram CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://t.me/+b-Fnu4EtaQY1MmY0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <SparkleEffect />
                <Send className="h-4 w-4 mr-2" />
                Get Live Updates on Telegram
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-slate-800/40 to-blue-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300 relative overflow-hidden"
                >
                  <SparkleEffect />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg relative overflow-hidden"
                  >
                    <SparkleEffect />
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuidanceSection;