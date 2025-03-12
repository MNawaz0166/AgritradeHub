import React from 'react';
import { SlSocialInstagram, SlSocialTwitter,SlSocialLinkedin } from "react-icons/sl";
import {TiSocialTwitterCircular} from "react-icons/ti"
import logo from "../images/logo2.png"
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>AgriTradeHub</h2>
          <p>Your trusted marketplace for agricultural products.</p>
          <img src={logo} alt="footerlogo" />
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/sell">Sell</a></li>
            <li><a href="/buy">Buy</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: m.nawaztopper@gmail.com</p>
          <p>Phone: 0300-4281853</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><SlSocialInstagram /></a>
            <a href="#"><SlSocialLinkedin /></a>
            <a href="#"><SlSocialTwitter/></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 AgriTradeHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
