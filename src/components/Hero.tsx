import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, TrendingUp, Shield, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedChart from './AnimatedChart';

const Hero = () => {
  // Sparkle animation component
  const SparkleEffect = ({ className = "" }) => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
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
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  const handleGetStarted = () => {
    // Scroll to the shop section or navigate to shop page
    const shopElement = document.getElementById('shop-section');
    if (shopElement) {
      shopElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to shop page if not on home page
      window.location.href = '/shop';
    }
  };

  const handleViewStats = () => {
    // Navigate to recent stats page
    window.location.href = '/recent-stats';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sports Arena Background - Option 1: Basketball Arena */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Sports Arena"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60" />
      </div>

      {/* Alternative Background Options (uncomment to use):
      
      Option 2: Tennis Court
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Tennis Court"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60" />
      </div>

      Option 3: Baseball Stadium
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1661915/pexels-photo-1661915.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Baseball Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60" />
      </div>

      Option 4: Modern Sports Stadium (Night)
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Sports Stadium Night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60" />
      </div>

      Option 5: Abstract Sports/Data Visualization
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Data Analytics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60" />
      </div>

      Option 6: Soccer/Football Field Aerial
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Football Field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60" />
      </div>

      */}

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <SparkleEffect />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6 relative overflow-hidden backdrop-blur-sm"
            >
              <SparkleEffect className="rounded-full" />
              <Shield className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-sm text-blue-300">Professional Betting Analytics</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                Smart Betting
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Starts Here
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md"
            >
              Transform your betting strategy with professional insights, proven analytics, and expert guidance. 
              Join thousands of successful bettors who trust Statsinfoz for consistent ROI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden backdrop-blur-sm"
              >
                <SparkleEffect />
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              <motion.button
                onClick={handleViewStats}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-blue-500/50 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Target className="mr-2 h-5 w-5" />
                View Success Stats
              </motion.button>
            </motion.div>

            {/* Telegram CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mb-8"
            >
              <motion.a
                href="https://t.me/+b-Fnu4EtaQY1MmY0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <SparkleEffect />
                <Send className="h-4 w-4 mr-2" />
                Join Our Telegram Channel
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700/50"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center relative backdrop-blur-sm bg-slate-900/20 rounded-lg p-4"
              >
                <SparkleEffect />
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 drop-shadow-lg">85%+</div>
                <div className="text-sm text-gray-300">Win Rate</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center relative backdrop-blur-sm bg-slate-900/20 rounded-lg p-4"
              >
                <SparkleEffect />
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1 drop-shadow-lg">250%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-center relative backdrop-blur-sm bg-slate-900/20 rounded-lg p-4"
              >
                <SparkleEffect />
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1 drop-shadow-lg">4K+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Animated Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end relative"
          >
            <SparkleEffect />
            <AnimatedChart />
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-blue-400/20 rounded-full"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;