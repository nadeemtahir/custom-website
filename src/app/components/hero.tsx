import React from 'react';
import '@/app/styles/hero.css'; // Link to the dark-themed CSS file

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to TechInsight</h1>
          <h4 className="hero-subtitle">Innovative insights for a digital world</h4>
          <p className="hero-description">
            Join us to explore the latest trends and breakthroughs in technology. Discover insights, expert analysis, and tools to keep you at the forefront of innovation.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
