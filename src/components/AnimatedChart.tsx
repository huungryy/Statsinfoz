import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const AnimatedChart = () => {
  const [animatedValues, setAnimatedValues] = useState([20, 45, 30, 60, 40, 75, 55, 85]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues(prev => 
        prev.map(() => Math.floor(Math.random() * 60) + 30)
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Sparkle animation component
  const SparkleEffect = ({ className = "" }) => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
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
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="relative w-72 h-72 bg-gradient-to-br from-slate-800/40 to-blue-900/30 rounded-2xl p-5 backdrop-blur-lg border border-blue-500/20 overflow-hidden shadow-2xl">
      <SparkleEffect />
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-white/90 drop-shadow-md">ROI Performance</h3>
          <p className="text-xs text-gray-300/80">Last 8 months</p>
        </div>
        <motion.div 
          className="flex items-center text-green-400/90"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <TrendingUp className="h-4 w-4 mr-1" />
          <span className="text-xs font-medium drop-shadow-md">+24.5%</span>
        </motion.div>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between h-32 mb-4">
        {animatedValues.map((value, index) => (
          <motion.div
            key={index}
            className="w-5 bg-gradient-to-t from-blue-600/80 to-purple-500/80 rounded-t-sm relative overflow-hidden shadow-lg"
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              ease: "easeInOut"
            }}
          >
            {/* Sparkle effect on bars */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-transparent"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs text-gray-400/80">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map(month => (
          <span key={month} className="drop-shadow-sm text-xs">{month}</span>
        ))}
      </div>

      {/* Profit Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute top-4 right-4 bg-green-500/20 border border-green-500/40 rounded-lg px-2 py-1 relative overflow-hidden backdrop-blur-sm shadow-lg"
      >
        <SparkleEffect />
        <span className="text-green-300/90 text-xs font-semibold drop-shadow-md">+£15,240</span>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400/30 rounded-full shadow-lg"
            style={{
              left: `${25 + i * 40}%`,
              top: `${35 + i * 25}%`,
            }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedChart;