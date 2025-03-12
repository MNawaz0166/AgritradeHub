import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="error-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
