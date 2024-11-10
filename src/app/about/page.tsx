import React from 'react';
import '@/app/styles/about.css'; // Link to the external CSS file
import Link from 'next/link';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About TechInsight</h2>
          <p className="about-description">
            TechInsight is your gateway to the latest in technology, innovation, and industry trends. Our mission is to empower enthusiasts and professionals alike with deep insights, expert analysis, and the latest news shaping the future of technology. Join us as we delve into the ever-evolving digital landscape, covering everything from AI advancements to software development, cybersecurity, and beyond.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/download 1.jpg" alt="About TechInsight" />
        </div>
      </div>
    </section>
  );
};

export default About;
