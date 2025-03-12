import React from 'react';
import rice1 from "../images/rice1.png"
import wheat1 from "../images/wheat1.png"
import maize1 from "../images/maize1.png"
import seasame from "../images/seasme.png"
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to AgriTradeHub</h1>
          <p>Your one-stop solution for buying and selling agricultural seeds.</p>
          <Link to="/buy"><button className="explore-btn">Explore Products</button></Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-item">
            <img src={wheat1} alt="Wheat Seeds" />
            <h3>Wheat Seeds</h3>
          </div>
          <div className="product-item">
            <img src={rice1} alt="Rice Seeds" />
            <h3>Rice Seeds</h3>
          </div>
          <div className="product-item">
            <img src={maize1} alt="Maize Seeds" />
            <h3>Maize Seeds</h3>
          </div>
          <div className="product-item">
            <img src={seasame} alt="Maize Seeds" />
            <h3>Seasame Seeds</h3>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-item">
            <i className="fas fa-truck"></i>
            <h3>Fast Delivery</h3>
            <p>We ensure quick and safe delivery of your products.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-handshake"></i>
            <h3>Secure Transactions</h3>
            <p>All transactions are secure and verified for your safety.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-seedling"></i>
            <h3>Quality Seeds</h3>
            <p>We provide top-quality agricultural seeds from trusted suppliers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
