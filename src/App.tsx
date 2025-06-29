import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TipsBlogs from './pages/TipsBlogs';
import BlogPost from './pages/BlogPost';
import Shop from './pages/Shop';
import RecentStats from './pages/RecentStats';
import Admin from './pages/Admin';
import Footer from './components/Footer';
import NetlifyCMSScript from './components/NetlifyCMSScript';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <NetlifyCMSScript />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips-blogs" element={<TipsBlogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/recent-stats" element={<RecentStats />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;