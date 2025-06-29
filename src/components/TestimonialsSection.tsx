import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Send } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Marcus Johnson',
      role: 'Professional Bettor',
      location: 'London, UK',
      rating: 5,
      text: 'Statsinfoz completely transformed my betting approach. Their analytics are spot-on and I\'ve seen a 180% increase in my ROI since joining. The VIP community is incredibly supportive and the tips are consistently profitable.',
      profit: '+£15,240',
      months: 8,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      role: 'Sports Analyst',
      location: 'Manchester, UK',
      rating: 5,
      text: 'As someone who works in sports analytics professionally, I can confidently say Statsinfoz provides some of the most accurate predictions I\'ve ever seen. Their football analysis is particularly impressive.',
      profit: '+£8,950',
      months: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Investment Banker',
      location: 'Birmingham, UK',
      rating: 5,
      text: 'I treat betting like any other investment, and Statsinfoz provides the data-driven approach I need. Their risk management strategies have helped me maintain consistent profits while minimizing losses.',
      profit: '+£22,100',
      months: 12,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    },
    {
      id: 4,
      name: 'Emma Thompson',
      role: 'Tennis Enthusiast',
      location: 'Liverpool, UK',
      rating: 5,
      text: 'Their tennis predictions are absolutely incredible. I\'ve been following their ATP and WTA tips for 6 months and my success rate has gone from 45% to 87%. The detailed analysis helps me understand each bet.',
      profit: '+£6,780',
      months: 6,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    },
    {
      id: 5,
      name: 'James Wilson',
      role: 'Business Owner',
      location: 'Leeds, UK',
      rating: 5,
      text: 'The Telegram channel is pure gold. Real-time updates, instant notifications for value bets, and a community of like-minded professionals. Best investment I\'ve made this year.',
      profit: '+£11,500',
      months: 7,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    },
    {
      id: 6,
      name: 'Rachel Green',
      role: 'Marketing Director',
      location: 'Bristol, UK',
      rating: 5,
      text: 'I was skeptical at first, but the results speak for themselves. The monthly reports are detailed, transparent, and show exactly how they achieve such high win rates. Highly recommended!',
      profit: '+£9,320',
      months: 4,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Sparkle animation component
  const SparkleEffect = ({ className = "" }) => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {[...Array(5)].map((_, i) => (
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
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      <SparkleEffect />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 mb-6 relative overflow-hidden"
          >
            <SparkleEffect className="rounded-full" />
            <Star className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm text-yellow-300">Client Success Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Our Members
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of successful bettors who have transformed their approach with our 
            professional guidance and data-driven insights.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
              >
                <SparkleEffect />
                
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full flex items-center justify-center"
                >
                  <Quote className="h-8 w-8 text-yellow-400" />
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Avatar and Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-center lg:text-left"
                  >
                    <div className="relative inline-block mb-4">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-500/30 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-blue-300 font-medium mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      {testimonials[currentIndex].location}
                    </p>

                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-400">
                          {testimonials[currentIndex].profit}
                        </div>
                        <div className="text-xs text-gray-400">Total Profit</div>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                        <div className="text-lg font-bold text-blue-400">
                          {testimonials[currentIndex].months} months
                        </div>
                        <div className="text-xs text-gray-400">Member Since</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="lg:col-span-2"
                  >
                    <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
                      "{testimonials[currentIndex].text}"
                    </blockquote>

                    {/* Telegram CTA */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
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
                        Join Our Success Community
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center bg-gradient-to-br from-slate-800/30 to-blue-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 relative overflow-hidden"
          >
            <SparkleEffect />
            <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center bg-gradient-to-br from-slate-800/30 to-green-900/20 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 relative overflow-hidden"
          >
            <SparkleEffect />
            <div className="text-3xl font-bold text-green-400 mb-2">£180K+</div>
            <div className="text-gray-400">Total Member Profits</div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center bg-gradient-to-br from-slate-800/30 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 relative overflow-hidden"
          >
            <SparkleEffect />
            <div className="text-3xl font-bold text-purple-400 mb-2">2,500+</div>
            <div className="text-gray-400">Success Stories</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;