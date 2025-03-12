import React from 'react';
import './UserProfile.css';
import { useAuth } from '../tokenStore/Auth';

const UserProfile = () => {
  const {user,token}=useAuth()
  console.log(token)
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <div className="profile-item">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="profile-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="profile-item">
          <strong>Phone:</strong> {user.phone}
        </div>
        <div className="profile-item">
          <strong>Address:</strong> {user.address}
        </div>
        <div className="profile-item">
          <strong>Role:</strong> {user.userType}
        </div>
      </div>
      <button className="edit-btn">Edit Profile</button>
    </div>
  );
};

export default UserProfile;
