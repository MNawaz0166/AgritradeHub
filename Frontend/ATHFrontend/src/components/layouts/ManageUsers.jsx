import React, { useEffect, useState } from 'react';
import './ManageUsers.css';
import { useAuth } from '../tokenStore/Auth';
// import { deleteUser } from '../../../../../Backend/Controllers/admin_controller';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    // Fetch all users from the backend
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/admin/users', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log('data : ', data);
        // setUsers(data);
        setUsers((prevUsers) => prevUsers.filter(user => user._id !== id));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);
  //delete a user
    const deleteUser = async (id) => {
      try {
        const response = await fetch(`http://localhost:8000/api/admin/users/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if(response.ok){
        const data = await response.json();
        console.log('data after deleted : ', data);
        setUsers(data);
          }
      } catch (error) {
        console.error('Error deleting users:', error);
      }
    };

  return (
    <div className="manage-users">
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <span>{user.userName} - {user.email} - {user.userType === 'admin' ? '' : 'User'}</span>
            <div className="user-actions">
              {/* <button>Edit</button> */}
              <button onClick={()=>deleteUser(user._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
