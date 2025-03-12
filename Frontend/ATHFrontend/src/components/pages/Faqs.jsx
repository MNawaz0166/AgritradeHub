import React, { useState } from 'react';
import './Faqs.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqsData = [
    {
      question: "What is AgriTradeHub?",
      answer: "AgriTradeHub is an online marketplace connecting farmers and buyers for trading agricultural seeds."
    },
    {
      question: "How do I register?",
      answer: "You can register by clicking the 'Register' button on our homepage and filling out the required information."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods, including credit/debit cards and digital wallets."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support through the 'Contact Us' page, or email us at support@agritradehub.com."
    },
    {
      question: "What is the return policy?",
      answer: "Our return policy allows you to return products within 30 days of purchase if they are unopened and in original condition."
    },
    // Add more FAQs as needed
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      {/* Hero Section */}
      <section className="faqs-hero">
        <div className="hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Your queries answered!</p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        {faqsData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Need More Help?</h2>
        <p>If you have more questions, feel free to reach out to our customer support team.</p>
      </section>
    </div>
  );
};

export default FAQs;
