import React, { useState } from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../tokenStore/Auth';
const defaultInputs={
  userName:"",email:"",subject:"",message:""
}

const ContactUs = () => {
  const {user}=useAuth()
  // console.log(user)
  const [userData,setUserData]=useState(true)
  const [contactInputs,setContactInputs]=useState(defaultInputs);
  if(userData && user){
    setContactInputs({
      userName:user.name,
      email:user.email,
      subject:"",
      message:""
    })
    setUserData(false)
  }
  const handleInputChange=(e)=>{
     const {name,value}=e.target;
     setContactInputs({
      ...contactInputs,[name]:value
     })
  }
  const handleContactSubmitForm= async(e)=>{
      e.preventDefault();
      try{
      const response=await fetch("https://agritrade-hub-backend.vercel.app/",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(contactInputs)
      })
     if(response.ok){
      const data=await response.json();
      console.log(data)
      setContactInputs(defaultInputs)
     }
    }catch(error){
      alert("error while posting the data")
      console.log("error while posting the data ",error)
    };

  }
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Contact AgriTradeHub</h1>
          <p>We are here to help you with your questions and inquiries.</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <div className="info-section">
          <h2>Our Address</h2>
          <p>Muhala Ghazi Abad SyedWala District Nankana Sahib Punjab</p>
        </div>
        <div className="info-section">
          <h2>Email Us</h2>
          <p><a href="mailto:m.nawaztopper@gmail.com">m.nawaztopper@gmail.com.com</a></p>
        </div>
        <div className="info-section">
          <h2>Call Us</h2>
          <p>03190467365</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleContactSubmitForm}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="uname" value={contactInputs.userName} onChange={handleInputChange} placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={contactInputs.email} onChange={handleInputChange} placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={contactInputs.subject} onChange={handleInputChange} placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={contactInputs.message} onChange={handleInputChange} placeholder="Write your message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      {/* Customer Support Section */}
      <section className="support-section">
        <h2>Need Additional Support?</h2>
        <p>Visit our <Link to="/faqs">FAQ's</Link> page or reach out to our customer support team for more information.</p>
      </section>
    </div>
  );
};

export default ContactUs;
