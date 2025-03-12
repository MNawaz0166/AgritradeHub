
import React, { useState } from 'react';
import './PaymentPage.css'; // Assuming you'll add custom CSS for styling

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    paymentMethod: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you will handle the form submission, such as calling the backend API for payment processing
    console.log('Form Data: ', formData);
  };

  return (
    <div className="payment-page">
      <h1>Payment for Your Order</h1>

      <form onSubmit={handleSubmit} className="payment-form">
        {/* User Information */}
        <h2>Billing Information</h2>
        <label>
          Full Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label>
          State:
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </label>
        <label>
          Postal Code:
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </label>

        {/* Payment Information */}
        <h2>Payment Information</h2>
        <label>
          Payment Method:
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="">Select Payment Method</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </label>

        {/* Card Details only if Payment Method is Credit/Debit */}
        {(formData.paymentMethod === 'credit' || formData.paymentMethod === 'debit') && (
          <>
            <label>
              Card Number:
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
            </label>
            <label>
              Expiry Date:
              <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
            </label>
            <label>
              CVV:
              <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
            </label>
          </>
        )}

        {/* Submit Button */}
        <button type="submit" className="submit-btn">Make Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
