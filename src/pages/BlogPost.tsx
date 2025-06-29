import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowLeft, 
  Share2, 
  BookOpen, 
  Clock,
  TrendingUp,
  Target,
  BarChart3,
  Send,
  Star,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load posts from localStorage (where admin panel saves them)
    const savedPosts = localStorage.getItem('blogPosts');
    let blogPosts = {};
    
    if (savedPosts) {
      const posts = JSON.parse(savedPosts);
      // Convert array to object with id as key for easy lookup
      posts.forEach((post: any) => {
        blogPosts[post.id] = post;
      });
    }

    // Simulate loading delay
    setTimeout(() => {
      if (id && blogPosts[id as keyof typeof blogPosts]) {
        setPost(blogPosts[id as keyof typeof blogPosts]);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  // Sparkle animation component
  const SparkleEffect = ({ className = "" }) => (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {[...Array(4)].map((_, i) => (
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
            delay: i * 0.7,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full"
        />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/tips-blogs"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      <SparkleEffect />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/tips-blogs"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tips & Blogs
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                post.category === 'football' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                post.category === 'tennis' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                post.category === 'basketball' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                post.category === 'baseball' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                'bg-purple-500/20 text-purple-300 border border-purple-500/30'
              }`}>
                {post.category}
              </span>
            </div>

            {/* Share Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-blue-500/20 rounded-full flex items-center justify-center text-white hover:bg-blue-500/20 transition-colors"
            >
              <Share2 className="h-5 w-5" />
            </motion.button>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags?.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                {post.views?.toLocaleString() || 0} views
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between bg-gradient-to-r from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 relative overflow-hidden">
              <SparkleEffect />
              <div className="flex items-center">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{post.author}</h3>
                  <p className="text-gray-400 text-sm max-w-md">{post.authorBio}</p>
                </div>
              </div>
              
              {/* Engagement Stats */}
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {post.likes || 0}
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {post.comments || 0}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="prose prose-lg prose-invert max-w-none mb-12"
          >
            <div 
              className="blog-content text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Telegram CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-900/30 to-blue-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-12 relative overflow-hidden"
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
              <h3 className="text-2xl font-bold text-white mb-4">Get More Expert Analysis</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Join our Telegram channel for daily tips, live updates, and exclusive content from our expert analysts.
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
                Join Our Telegram Channel
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="border-t border-gray-700 pt-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Related article cards would go here */}
              <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 relative overflow-hidden">
                <SparkleEffect />
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">More Expert Analysis</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Discover more professional betting insights and strategies
                  </p>
                  <Link
                    to="/tips-blogs"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    View All Articles
                    <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 relative overflow-hidden">
                <SparkleEffect />
                <div className="text-center">
                  <Star className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-2">VIP Membership</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Get access to premium tips and exclusive analysis
                  </p>
                  <Link
                    to="/shop"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Join VIP
                    <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom Styles for Blog Content */}
      <style jsx>{`
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: white;
          margin: 2rem 0 1rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(59, 130, 246, 0.3);
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: rgb(147, 197, 253);
          margin: 1.5rem 0 0.75rem 0;
        }
        
        .blog-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: rgb(196, 181, 253);
          margin: 1rem 0 0.5rem 0;
        }
        
        .blog-content p {
          margin: 1rem 0;
          line-height: 1.75;
        }
        
        .blog-content ul, .blog-content ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }
        
        .blog-content li {
          margin: 0.5rem 0;
          line-height: 1.6;
        }
        
        .blog-content blockquote {
          border-left: 4px solid rgb(59, 130, 246);
          background: rgba(59, 130, 246, 0.1);
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          border-radius: 0.5rem;
          font-style: italic;
          color: rgb(196, 181, 253);
        }
        
        .blog-content .stats-box,
        .blog-content .strategy-box,
        .blog-content .accumulator-box,
        .blog-content .disclaimer-box {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin: 1.5rem 0;
          backdrop-filter: blur(8px);
        }
        
        .blog-content .stats-box {
          border-color: rgba(34, 197, 94, 0.3);
          background: rgba(34, 197, 94, 0.1);
        }
        
        .blog-content .strategy-box {
          border-color: rgba(168, 85, 247, 0.3);
          background: rgba(168, 85, 247, 0.1);
        }
        
        .blog-content .accumulator-box {
          border-color: rgba(249, 115, 22, 0.3);
          background: rgba(249, 115, 22, 0.1);
        }
        
        .blog-content .disclaimer-box {
          border-color: rgba(239, 68, 68, 0.3);
          background: rgba(239, 68, 68, 0.1);
        }
        
        .blog-content strong {
          color: white;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;