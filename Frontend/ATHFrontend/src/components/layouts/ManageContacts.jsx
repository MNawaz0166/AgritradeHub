import React, { useEffect, useState } from 'react';
import "./ManageContacts.css";
import { useAuth } from '../tokenStore/Auth';

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    // Fetch all contacts from the backend
    const fetchContacts = async () => {
      try {
      const response = await fetch('agritrade-hub-backend1.vercel.app', {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data);
      setContacts(data);
    } catch (error) {
        console.log("error while getting all contacts")
    }
    };
    fetchContacts();
  }, [token]);
  const deleteContact=async(id)=>{
    try {
      const response = await fetch(`http://localhost:8000/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data);
      // setContacts(data);
      setContacts((prevContacts) => prevContacts.filter(contact => contact._id !== id));
    } catch (error) {
        console.log("error while deleting a contacts")
    }
  }

  return (
    <div className="manage-contacts">
      <h2>All Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            <span>{contact.userName} - {contact.message}</span>
            <div className="contact-actions">
              {/* <button>View</button> */}
              <button onClick={()=>deleteContact(contact._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageContacts;
