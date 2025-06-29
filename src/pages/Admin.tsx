import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  Eye, 
  Lock, 
  User,
  Calendar,
  Tag,
  FileText,
  Image,
  Send
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  author: string;
  authorBio: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
  views: number;
  likes: number;
  comments: number;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    content: '',
    excerpt: '',
    category: 'football',
    author: '',
    authorBio: '',
    authorImage: '',
    image: '',
    tags: [],
    featured: false
  });

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'statsinfoz2024';

  useEffect(() => {
    // Load posts from localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with existing posts
      const initialPosts: BlogPost[] = [
        {
          id: 1,
          title: 'Premier League Week 15: Top Betting Opportunities & Analysis',
          content: `<h2>Introduction</h2><p>Welcome to our comprehensive analysis...</p>`,
          excerpt: 'Comprehensive analysis of this weekend\'s Premier League fixtures with detailed statistics, team form, and value betting opportunities.',
          category: 'football',
          author: 'James Wilson',
          authorBio: 'Senior Football Analyst with 8+ years of experience in sports betting and statistical analysis.',
          authorImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
          date: '2024-01-15',
          readTime: '8 min read',
          image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
          tags: ['Premier League', 'Analysis', 'Statistics', 'Value Betting'],
          featured: true,
          views: 2847,
          likes: 156,
          comments: 23
        },
        {
          id: 2,
          title: 'Tennis Betting Strategy: How to Profit from ATP Tournaments',
          content: `<h2>Understanding Tennis Betting Markets</h2><p>Tennis betting offers unique opportunities...</p>`,
          excerpt: 'Learn advanced tennis betting strategies including surface analysis, head-to-head records, and weather impact on player performance.',
          category: 'tennis',
          author: 'Sarah Chen',
          authorBio: 'Former professional tennis player turned analyst. Specializes in ATP/WTA tour analysis.',
          authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
          date: '2024-01-14',
          readTime: '12 min read',
          image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
          tags: ['ATP', 'Strategy', 'Tennis', 'Surface Analysis'],
          featured: false,
          views: 1923,
          likes: 89,
          comments: 15
        }
      ];
      setPosts(initialPosts);
      localStorage.setItem('blogPosts', JSON.stringify(initialPosts));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password!');
    }
  };

  const savePosts = (updatedPosts: BlogPost[]) => {
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  const handleSavePost = () => {
    if (!formData.title || !formData.content || !formData.excerpt) {
      alert('Please fill in all required fields');
      return;
    }

    const newPost: BlogPost = {
      id: editingPost ? editingPost.id : Date.now(),
      title: formData.title!,
      content: formData.content!,
      excerpt: formData.excerpt!,
      category: formData.category!,
      author: formData.author || 'Admin',
      authorBio: formData.authorBio || 'Statsinfoz Team Member',
      authorImage: formData.authorImage || 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
      date: editingPost ? editingPost.date : new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil(formData.content!.length / 1000)} min read`,
      image: formData.image || 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600',
      tags: formData.tags || [],
      featured: formData.featured || false,
      views: editingPost ? editingPost.views : 0,
      likes: editingPost ? editingPost.likes : 0,
      comments: editingPost ? editingPost.comments : 0
    };

    let updatedPosts;
    if (editingPost) {
      updatedPosts = posts.map(post => post.id === editingPost.id ? newPost : post);
    } else {
      updatedPosts = [newPost, ...posts];
    }

    savePosts(updatedPosts);
    setShowForm(false);
    setEditingPost(null);
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      category: 'football',
      author: '',
      authorBio: '',
      authorImage: '',
      image: '',
      tags: [],
      featured: false
    });
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setFormData(post);
    setShowForm(true);
  };

  const handleDeletePost = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      const updatedPosts = posts.filter(post => post.id !== id);
      savePosts(updatedPosts);
    }
  };

  const handleTagsChange = (tagsString: string) => {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData({ ...formData, tags });
  };

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
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-20 pb-16 flex items-center justify-center relative overflow-hidden">
        <SparkleEffect />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 w-full max-w-md relative overflow-hidden"
        >
          <SparkleEffect />
          
          <div className="text-center mb-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"
            >
              <Lock className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gray-400">Enter password to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors"
                required
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <SparkleEffect />
              Login to Admin Panel
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      <SparkleEffect />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-gray-400">Manage your blog posts and content</p>
          </div>
          
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowForm(true);
                setEditingPost(null);
                setFormData({
                  title: '',
                  content: '',
                  excerpt: '',
                  category: 'football',
                  author: '',
                  authorBio: '',
                  authorImage: '',
                  image: '',
                  tags: [],
                  featured: false
                });
              }}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center relative overflow-hidden"
            >
              <SparkleEffect />
              <Plus className="h-5 w-5 mr-2" />
              New Post
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAuthenticated(false)}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Logout
            </motion.button>
          </div>
        </motion.div>

        {/* Form Modal */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-slate-800/90 to-blue-900/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
            >
              <SparkleEffect />
              
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors"
                      placeholder="Enter post title"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Excerpt *
                    </label>
                    <textarea
                      value={formData.excerpt || ''}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
                      placeholder="Brief description of the post"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Category
                      </label>
                      <select
                        value={formData.category || 'football'}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white focus:outline-none focus:border-blue-400/50 transition-colors"
                      >
                        <option value="football">Football</option>
                        <option value="tennis">Tennis</option>
                        <option value="basketball">Basketball</option>
                        <option value="baseball">Baseball</option>
                        <option value="general">General</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Author
                      </label>
                      <input
                        type="text"
                        value={formData.author || ''}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors"
                        placeholder="Author name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Author Bio
                    </label>
                    <textarea
                      value={formData.authorBio || ''}
                      onChange={(e) => setFormData({ ...formData, authorBio: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
                      placeholder="Brief author biography"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      value={formData.tags?.join(', ') || ''}
                      onChange={(e) => handleTagsChange(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors"
                      placeholder="e.g., Premier League, Analysis, Tips"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Featured Image URL
                    </label>
                    <input
                      type="url"
                      value={formData.image || ''}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Author Image URL
                    </label>
                    <input
                      type="url"
                      value={formData.authorImage || ''}
                      onChange={(e) => setFormData({ ...formData, authorImage: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors"
                      placeholder="https://example.com/author.jpg"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured || false}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="mr-3 w-4 h-4 text-blue-600 bg-slate-800 border-blue-500/20 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-gray-300">
                      Featured Post
                    </label>
                  </div>

                  <div className="bg-slate-800/30 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Quick Tips:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Use Pexels.com for free stock images</li>
                      <li>• Keep excerpts under 200 characters</li>
                      <li>• Use HTML tags in content for formatting</li>
                      <li>• Featured posts appear at the top</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content Editor */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Content * (HTML supported)
                </label>
                <textarea
                  value={formData.content || ''}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={12}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors resize-none font-mono text-sm"
                  placeholder="Write your blog content here. You can use HTML tags like <h2>, <p>, <strong>, <ul>, <li>, etc."
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-4 mt-8">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSavePost}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center relative overflow-hidden"
                >
                  <SparkleEffect />
                  <Save className="h-5 w-5 mr-2" />
                  {editingPost ? 'Update Post' : 'Create Post'}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden"
            >
              <SparkleEffect />
              
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                      post.category === 'football' ? 'bg-green-500/20 text-green-300' :
                      post.category === 'tennis' ? 'bg-yellow-500/20 text-yellow-300' :
                      post.category === 'basketball' ? 'bg-orange-500/20 text-orange-300' :
                      post.category === 'baseball' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-purple-500/20 text-purple-300'
                    }`}>
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views} views
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleEditPost(post)}
                    className="p-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                    title="Edit Post"
                  >
                    <Edit className="h-4 w-4" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDeletePost(post.id)}
                    className="p-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
                    title="Delete Post"
                  >
                    <Trash2 className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {posts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-white mb-2">No posts yet</h3>
            <p className="text-gray-400 mb-6">Create your first blog post to get started.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create First Post
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Admin;