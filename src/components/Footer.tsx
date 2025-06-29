import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, MapPin, Twitter, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    services: [
      { name: 'VIP Tips', href: '#' },
      { name: 'Analytics', href: '#' },
      { name: 'Consultation', href: '#' },
      { name: 'Training', href: '#' }
    ],
    sports: [
      { name: 'Football', href: '#' },
      { name: 'Tennis', href: '#' },
      { name: 'Basketball', href: '#' },
      { name: 'Baseball', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Disclaimer', href: '#' },
      { name: 'Responsible Gambling', href: '#' }
    ]
  };

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/statsinfoz', 
      name: 'Instagram',
      username: '@statsinfoz',
      color: 'from-pink-500 to-purple-500'
    },
    { 
      icon: Twitter, 
      href: 'https://x.com/statsinfoz', 
      name: 'Twitter/X',
      username: '@statsinfoz',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      icon: Send, 
      href: 'https://t.me/+b-Fnu4EtaQY1MmY0', 
      name: 'Telegram',
      username: '@statsinfoz_official',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  // Sparkle animation component
  const SparkleEffect = ({ className = "" }) => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {[...Array(3)].map((_, i) => (
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
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-blue-800/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-slate-900/10" />
      <SparkleEffect />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg relative overflow-hidden"
                  >
                    <SparkleEffect />
                    <TrendingUp className="h-6 w-6 text-white" />
                  </motion.div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Statsinfoz
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Professional betting analytics and expert guidance for serious bettors. 
                  Join thousands of successful members who trust our proven strategies and data-driven insights.
                </p>
                
                {/* Contact Info - Only Location and Telegram */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                    <span>London, United Kingdom</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Send className="h-4 w-4 mr-3 text-cyan-400" />
                    <span>@statsinfoz_official</span>
                  </div>
                </div>

                {/* Primary Telegram CTA */}
                <motion.div className="mb-6">
                  <motion.a
                    href="https://t.me/+b-Fnu4EtaQY1MmY0"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    <SparkleEffect />
                    <Send className="h-5 w-5 mr-2" />
                    Join Our Telegram Channel
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                </motion.div>

                {/* Contact Note */}
                <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-lg p-4 relative overflow-hidden">
                  <SparkleEffect />
                  <p className="text-sm text-cyan-300 font-medium mb-1">📱 Get in Touch</p>
                  <p className="text-xs text-gray-400">
                    For all inquiries, support, and VIP access, connect with us on Telegram. 
                    Our team responds within minutes during business hours.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">Sports</h3>
              <ul className="space-y-2 mb-6">
                {footerLinks.sports.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Community Stats */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Our Community</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between text-gray-400">
                    <span>Public Channel:</span>
                    <span className="text-cyan-400 font-semibold">3,000+</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-400">
                    <span>VIP Members:</span>
                    <span className="text-purple-400 font-semibold">1,000+</span>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
                <p className="text-sm text-gray-400 mb-3">
                  Get the latest tips and updates directly on Telegram
                </p>
                <motion.a
                  href="https://t.me/+b-Fnu4EtaQY1MmY0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm relative overflow-hidden w-full justify-center"
                >
                  <SparkleEffect />
                  <Send className="h-4 w-4 mr-2" />
                  Join Channel
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Links & Legal */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-gray-400 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`group w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-r hover:${social.color} border border-blue-500/20 hover:border-transparent rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 relative overflow-hidden`}
                    title={`${social.name} - ${social.username}`}
                  >
                    <SparkleEffect />
                    <Icon className="h-5 w-5" />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {social.username}
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-6 text-sm"
            >
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">
              © {currentYear} Statsinfoz. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> Betting involves risk and should be done responsibly. 
              Past performance does not guarantee future results. Please gamble responsibly and only bet what you can afford to lose. 
              If you have a gambling problem, seek professional help.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;