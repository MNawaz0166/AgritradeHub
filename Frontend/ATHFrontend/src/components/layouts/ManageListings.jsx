import React, { useEffect, useState } from 'react';
import './ManageListings.css';
import { useAuth } from '../tokenStore/Auth';

const ManageListings = () => {
  const [listings, setListings] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    // Fetch all listings from the backend
    const fetchListings = async () => {
      try {
        const response = await fetch('https://agritrade-hub-backend.vercel.app/', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        // setListings(data);
        setListings((prevListings) => prevListings.filter(listing => listing._id !== id));
      } catch (error) {
        console.log('Error while fetching all listings:', error);
      }
    };
    fetchListings();
  }, [token]);
  const deleteListing=async(id)=>{
    try {
      const response = await fetch(`http://localhost:8000/api/admin/listings/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setListings(data);
    } catch (error) {
      console.log('Error while deleting listings:', error);
    }

  }

  return (
    <div className="manage-listings">
      <h2>All Listings</h2>
      <ul>
        {listings.map((listing) => (
          <li key={listing._id}>
            <span>{listing.proName} - ${listing.price}</span>
            <div className="listing-actions">
              {/* <button>Edit</button> */}
              <button onClick={()=>deleteListing(listing._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageListings;
