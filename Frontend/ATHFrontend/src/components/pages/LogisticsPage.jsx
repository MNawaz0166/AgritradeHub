import React, { useState } from 'react';
import './LogisticsPage.css'; // Custom CSS for styling

const logisticsPartners = [
  { id: 1, name: 'AgriLogistics', pricePerKg: 10, estimatedDelivery: '3-5 Days' },
  { id: 2, name: 'GreenPath Delivery', pricePerKg: 8, estimatedDelivery: '5-7 Days' },
  { id: 3, name: 'Farmer’s Logistics', pricePerKg: 12, estimatedDelivery: '2-4 Days' },
];

const LogisticsPage = () => {
  const [formData, setFormData] = useState({
    selectedPartner: '',
    deliveryAddress: '',
    deliveryCity: '',
    postalCode: '',
    weight: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you will handle the form submission, such as sending logistics details to the backend
    console.log('Logistics Data:', formData);
  };

  return (
    <div className="logistics-page">
      <h1>Logistics and Delivery Information</h1>

      <form onSubmit={handleSubmit} className="logistics-form">
        {/* Logistics Partner Selection */}
        <h2>Select a Logistics Partner</h2>
        {logisticsPartners.map((partner) => (
          <div key={partner.id} className="logistics-option">
            <input
              type="radio"
              id={partner.id}
              name="selectedPartner"
              value={partner.name}
              onChange={handleChange}
              required
            />
            <label htmlFor={partner.id}>
              {partner.name} - ${partner.pricePerKg} per kg, Estimated Delivery: {partner.estimatedDelivery}
            </label>
          </div>
        ))}

        {/* Delivery Information */}
        <h2>Delivery Details</h2>
        <label>
          Delivery Address:
          <input
            type="text"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input type="text" name="deliveryCity" value={formData.deliveryCity} onChange={handleChange} required />
        </label>
        <label>
          Postal Code:
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </label>

        <label>
          Product Weight (in kg):
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
        </label>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Confirm Logistics
        </button>
      </form>
    </div>
  );
};

export default LogisticsPage;
