import React from 'react';
import './Navbar.css';
import logo2 from "../images/logo2.png"
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../tokenStore/Auth';
const Navbar = () => {
  const {isLoggedin,user}=useAuth()
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <h2>AgriTradeHub</h2> */}
        <img src={logo2} alt="" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="auth-links">
        {isLoggedin?
        (<><Link to="/logout" className="register-btn">Logout</Link>
          <Link to="/user" className="register-btn">User</Link>
          {user.userType==="admin"?<Link to="/admin" className="register-btn">Admin Panal</Link>:""}
        </> ):
        (<><Link to="/login" className="login-btn">Login</Link>
        <Link to="/register" className="register-btn">Register</Link>
        </>)
           }
      </div>
      <Outlet/>
    </nav>
  );
}

export default Navbar;
