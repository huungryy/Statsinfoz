import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye, FileText, TrendingUp, BarChart3, Send } from 'lucide-react';

const RecentStats = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const statsFiles = [
    {
      id: 1,
      month: 'June 2024',
      title: 'June Performance Report',
      description: 'Complete analysis of betting performance, ROI, and winning strategies for June 2024. Includes detailed breakdowns of football, tennis, and basketball tips with comprehensive statistics.',
      fileSize: '2.8 MB',
      uploadDate: '2024-06-30',
      winRate: '89%',
      roi: '+32.4%',
      category: 'june',
      highlights: [
        'Premier League season finale analysis',
        'Euro 2024 tournament predictions',
        'Wimbledon tennis betting guide',
        'NBA Finals comprehensive coverage'
      ]
    }
  ];

  const months = [
    { id: 'all', name: 'All Months', count: statsFiles.length },
    { id: 'june', name: 'June 2024', count: 1 }
  ];

  const filteredFiles = selectedMonth === 'all' 
    ? statsFiles 
    : statsFiles.filter(file => file.category === selectedMonth);

  const totalStats = {
    avgWinRate: '89%',
    avgROI: '+32.4%'
  };

  // Sparkle animation component
  const SparkleEffect = ({ className = "" }) => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {[...Array(6)].map((_, i) => (
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
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Background Sparkles */}
      <SparkleEffect />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30 mb-6 relative"
          >
            <SparkleEffect className="rounded-full" />
            <BarChart3 className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-sm text-green-300">Performance Analytics</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Recent Stats
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Access detailed performance reports and statistics from our betting analysis. 
            Download comprehensive data sheets organized by month for in-depth review.
          </p>

          {/* Telegram Channel CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-flex items-center gap-4"
          >
            <motion.a
              href="https://t.me/+b-Fnu4EtaQY1MmY0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center relative overflow-hidden"
            >
              <SparkleEffect />
              <Send className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              Join Our Telegram Channel
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Summary Stats - Only Win Rate and ROI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 text-center relative overflow-hidden"
          >
            <SparkleEffect />
            <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">{totalStats.avgWinRate}</div>
            <div className="text-sm text-gray-400">Win Rate</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-slate-800/50 to-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center relative overflow-hidden"
          >
            <SparkleEffect />
            <BarChart3 className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">{totalStats.avgROI}</div>
            <div className="text-sm text-gray-400">ROI</div>
          </motion.div>
        </motion.div>

        {/* Month Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {months.map((month) => (
              <motion.button
                key={month.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMonth(month.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative overflow-hidden ${
                  selectedMonth === month.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 hover:text-white border border-blue-500/20 hover:border-blue-400/50'
                }`}
              >
                {selectedMonth === month.id && <SparkleEffect />}
                {month.name} ({month.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Stats Files Grid */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {filteredFiles.map((file, index) => (
            <motion.div
              key={file.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden"
            >
              <SparkleEffect />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-6 relative overflow-hidden"
                  >
                    <SparkleEffect />
                    <FileText className="h-8 w-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                      {file.title}
                    </h3>
                    <p className="text-lg text-blue-400 font-semibold">{file.month}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">File Size</div>
                  <div className="text-white font-medium text-lg">{file.fileSize}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-base leading-relaxed">
                {file.description}
              </p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Highlights:</h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {file.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3" />
                      {highlight}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats - Only Win Rate and ROI */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{file.winRate}</div>
                  <div className="text-sm text-gray-500">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{file.roi}</div>
                  <div className="text-sm text-gray-500">ROI</div>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Uploaded: {new Date(file.uploadDate).toLocaleDateString()}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                >
                  <SparkleEffect />
                  <FileText className="h-5 w-5 mr-2" />
                  View Report
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-4 border border-blue-500/50 text-blue-300 rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  <Eye className="h-5 w-5" />
                </motion.button>
                <motion.a
                  href="https://t.me/+b-Fnu4EtaQY1MmY0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                >
                  <SparkleEffect />
                  <Send className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Telegram Channel Promotion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-900/30 to-blue-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 relative overflow-hidden"
        >
          <SparkleEffect />
          <div className="text-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4"
            >
              <Send className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Telegram Community</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get instant notifications for new tips, exclusive content, and connect with fellow bettors. 
              Join our growing community of successful bettors on Telegram!
            </p>
            <motion.a
              href="https://t.me/+b-Fnu4EtaQY1MmY0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <SparkleEffect />
              <Send className="h-5 w-5 mr-2" />
              Join Telegram Channel
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Admin Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-slate-800/30 to-blue-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 relative overflow-hidden"
        >
          <SparkleEffect />
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Admin Upload Section</h3>
            <p className="text-gray-400 mb-6">
              This section is available for administrators to upload new monthly statistics and performance reports.
            </p>
            <div className="text-sm text-gray-500 bg-slate-800/50 rounded-lg p-4 max-w-2xl mx-auto">
              <strong>For Admins:</strong> Use the admin panel to upload Google Sheets exports and performance data. 
              Files will be automatically processed and made available to VIP members for download.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecentStats;