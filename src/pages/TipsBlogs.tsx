import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const TipsBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    // Load posts from localStorage (where admin panel saves them)
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setBlogPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with default posts if none exist
      const defaultPosts = [
        {
          id: 1,
          title: 'Premier League Week 15: Top Betting Opportunities & Analysis',
          excerpt: 'Comprehensive analysis of this weekend\'s Premier League fixtures with detailed statistics, team form, and value betting opportunities.',
          category: 'football',
          author: 'James Wilson',
          date: '2024-01-15',
          readTime: '8 min read',
          image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['Premier League', 'Analysis', 'Statistics'],
          featured: true
        },
        {
          id: 2,
          title: 'Tennis Betting Strategy: How to Profit from ATP Tournaments',
          excerpt: 'Learn advanced tennis betting strategies including surface analysis, head-to-head records, and weather impact on player performance.',
          category: 'tennis',
          author: 'Sarah Chen',
          date: '2024-01-14',
          readTime: '12 min read',
          image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['ATP', 'Strategy', 'Tennis'],
          featured: false
        }
      ];
      setBlogPosts(defaultPosts);
      localStorage.setItem('blogPosts', JSON.stringify(defaultPosts));
    }
  }, []);

  const categories = [
    { id: 'all', name: 'All Sports', count: blogPosts.length },
    { id: 'football', name: 'Football', count: blogPosts.filter(p => p.category === 'football').length },
    { id: 'tennis', name: 'Tennis', count: blogPosts.filter(p => p.category === 'tennis').length },
    { id: 'basketball', name: 'Basketball', count: blogPosts.filter(p => p.category === 'basketball').length },
    { id: 'baseball', name: 'Baseball', count: blogPosts.filter(p => p.category === 'baseball').length },
    { id: 'general', name: 'General', count: blogPosts.filter(p => p.category === 'general').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-6"
          >
            <Tag className="h-4 w-4 text-blue-400 mr-2" />
            <span className="text-sm text-blue-300">Expert Tips & Analysis</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tips & Blogs
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay ahead of the game with our expert analysis, betting strategies, and insights 
            across football, tennis, basketball, and baseball.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'bg-slate-800/50 text-gray-300 hover:text-white border border-blue-500/20 hover:border-blue-400/50'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-16"
          >
            <Link to={`/blog/${featuredPost.id}`}>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-500 cursor-pointer">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/50 lg:to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      {featuredPost.tags?.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 hover:text-blue-300 transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-gray-400 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-blue-400 hover:text-blue-300 font-medium"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${
                        post.category === 'football' ? 'bg-green-500/20 text-green-300' :
                        post.category === 'tennis' ? 'bg-yellow-500/20 text-yellow-300' :
                        post.category === 'basketball' ? 'bg-orange-500/20 text-orange-300' :
                        post.category === 'baseball' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags?.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 text-gray-400 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Read More */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-blue-400 hover:text-blue-300 font-medium mt-4 text-sm"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Filter className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p>Try adjusting your search terms or category filter.</p>
            </div>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TipsBlogs;