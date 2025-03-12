import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import { useAuth } from '../tokenStore/Auth';

const Registration = () => {
  const { setTokenInLS } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    userType: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [message,setMessage]=useState("")
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)
      });
      const res_data = await response.json();
      if (response.ok) {
        setMessage(res_data.msg)
        setTokenInLS(res_data.token);
        setFormData({
          name: '',
          email: '',
          password: '',
          phone: '',
          address: '',
          userType: ''
        });
        setShowModal(true); 
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="registration-page">
      <h2>Register with AgriTradeHub</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        {/* Form fields */}
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="number" 
            name="phone" 
            value={formData.phone} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input 
            type="text" 
            name="address" 
            value={formData.address} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>User Type</label>
          <select name="userType" value={formData.userType} onChange={handleInputChange} required>
            <option value="">Select</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{message}</h3>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
