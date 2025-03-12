import React, { useEffect } from 'react';
import './AdminDashboard.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to listings by default
    navigate('/admin/listings');
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin/users">Manage Users</Link></li>
          <li><Link to="/admin/listings">Manage Listings</Link></li>
          <li><Link to="/admin/contacts">Manage Contacts</Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
