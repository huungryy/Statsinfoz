import React from 'react';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';
import GuidanceSection from '../components/GuidanceSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <GuidanceSection />
      <FeaturesSection />
      <TestimonialsSection />
      {/* Shop section anchor for smooth scrolling */}
      <div id="shop-section" className="h-0" />
    </div>
  );
};

export default Home;