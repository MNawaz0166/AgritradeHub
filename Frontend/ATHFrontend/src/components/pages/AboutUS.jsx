import React from 'react';
import './AboutUs.css';
import {Link} from "react-router-dom"
import { useAuth } from '../tokenStore/auth';

const AboutUs = () => {
  const {isLoggedin}=useAuth();
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About AgriTradeHub</h1>
          <p>Connecting farmers and buyers through a trusted and innovative agricultural marketplace.</p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mission-vision">
        <div className="mv-section">
          <h2>Our Mission</h2>
          <p>To provide a seamless online marketplace that empowers farmers and buyers to trade agricultural seeds directly, ensuring fair prices and access to quality products.</p>
        </div>
        <div className="mv-section">
          <h2>Our Vision</h2>
          <p>To become the most trusted platform for agricultural trade, driving growth and prosperity for farmers and buyers alike.</p>
        </div>
        <div className="mv-section">
          <h2>Our Values</h2>
          <p>Integrity, Innovation, Sustainability, and Commitment to Excellence are the core values that guide everything we do.</p>
        </div>
      </section>

      {/* Story and Team Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>AgriTradeHub was founded with the idea of revolutionizing agricultural trade by leveraging modern technology. We recognized the gap between farmers and buyers and created a platform that enables efficient, transparent, and direct transactions, benefiting both parties.</p>
        <div className="team-section">
          <div className="team-member">
            <img src="images/founder.jpg" alt="Founder" />
            <h3>Muhammad Hussain</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="images/cofounder.jpg" alt="Co-Founder" />
            <h3>Ghulam Murtaza</h3>
            <p>Co-Founder & CTO</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Join AgriTradeHub Today</h2>
        <p>Whether you're a farmer looking to expand your market or a buyer searching for quality seeds, AgriTradeHub has the solution for you.</p>
        {isLoggedin?"":<Link to="/register"><button className="cta-btn">Get Started</button></Link>}
      </section>
    </div>
  );
}

export default AboutUs;
