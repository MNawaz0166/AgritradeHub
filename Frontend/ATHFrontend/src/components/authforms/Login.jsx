import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../tokenStore/Auth';

const Login = () => {
  const [popUp,setPopUp]=useState(false)
  const handleClosePopUp=()=>{
    setPopUp(false)
  }
  const {setTokenInLS}=useAuth()
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Logic for form submission (e.g., send data to backend)
    try {
       const response=await fetch("agritrade-hub-backend1.vercel.app",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(formData)
       })
       if(response.ok){
        const res_data=await response.json();
        // alert(res_data.msg);
        setTokenInLS(res_data.token)
        setPopUp(true)
        // console.log(response)
        navigate('/');
       }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="login-page">
      <h2>Login to AgriTradeHub</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit">Login</button>
      </form>
      {
        popUp &&(
          <div className="modal-overlay">
          <div className="modal">
            <h3>Login Successful!</h3>
            <button onClick={handleClosePopUp}>Close</button>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default Login;
