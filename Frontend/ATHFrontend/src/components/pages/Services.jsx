import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import logisticsIMG from "../images/logisticsSupport.png";
import transactionIMG from "../images/transactions.png";
import messagingIMG from "../images/messaging.png";
import listingIMG from "../images/productlisting.png";
import { useAuth } from "../tokenStore/Auth";


const servicesData = [
  {
    id: 1,
    title: "Logistics Support",
    description:
      "We provide a trusted logistics network to ensure your products are delivered safely and on time.",
    img: logisticsIMG,
  },
  {
    id: 2,
    title: "Secure Transactions",
    description:
      "Our platform ensures secure payment gateways, protecting both buyers and sellers during transactions.",
    img: transactionIMG,
  },
  {
    id: 3,
    title: "Buyer-Seller Messaging",
    description:
      "Communicate with your buyers or sellers directly through our in-built messaging system.",
    img: messagingIMG,
  },
  {
    id: 4,
    title: "Product Listings",
    description:
      "Easily list and manage your agricultural products for maximum visibility on our marketplace.",
    img: listingIMG,
  },
];

const Services = () => {
  const { isLoggedin,user } = useAuth();
  
  return (
    <div className="services-page">
      {/* Header Section */}
      <section className="services-header">
        <h2 style={{color:"yellow"}}>Welcome, {user.name} to our Plateform</h2>
        <h1>Our Services</h1>
        <p>
          At AgriTradeHub, we offer services that connect buyers and sellers to
          streamline the trade of agricultural products.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <img
              src={service.img}
              alt={service.title}
              className="service-img"
            />
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Why Choose AgriTradeHub?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>For Sellers</h3>
            <p>
              Expand your reach by listing your products to a wide audience of
              buyers. We provide the tools to manage sales and track
              transactions with ease.
            </p>
          </div>
          <div className="benefit-card">
            <h3>For Buyers</h3>
            <p>
              Find high-quality agricultural products from trusted sellers. Our
              platform offers a user-friendly experience to purchase products
              securely and reliably.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="cta-section">
        <h2>Get Started with AgriTradeHub Today!</h2>
        <p>
          Sign up now to take advantage of our comprehensive agricultural
          trading services.
        </p>
        {isLoggedin ? null : (
          <Link to="/register">
            <button className="cta-btn">Join Now</button>
          </Link>
        )}
      </section>
    </div>
  );
};

export default Services;
