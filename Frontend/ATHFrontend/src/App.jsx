import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import Sell from './components/pages/Sell';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Buy from './components/pages/Buy';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUS';
import ContactUs from './components/pages/ContactUs';
import FAQs from './components/pages/Faqs';
import Registration from './components/authforms/Registration';
import Login from './components/authforms/Login';
import ProductDetails from './components/pages/ProductDetails';
import ErrorPage from './components/pages/ErrorPage';
import Logout from './components/pages/Logout';
import UserProfile from './components/pages/UserProfile';
import PaymentPage from './components/pages/PaymentPage';
import LogisticsPage from './components/pages/LogisticsPage';
import AdminDashboard from './components/layouts/AdminDashboard';
import ManageUsers from './components/layouts/ManageUsers';
import ManageListings from './components/layouts/ManageListings';
import ManageContacts from './components/layouts/ManageContacts';
import { useAuth } from './components/tokenStore/Auth';


function App() {
  const {user}=useAuth()
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/user' element={<UserProfile/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/payments" element={<PaymentPage/>} />
        <Route path="/logistics" element={<LogisticsPage/>} />
        <Route path='*' element={<ErrorPage/>}/>
        {user.userType==="admin"?
        <Route path='/admin' element={<AdminDashboard/>}>
          <Route path='users' element={<ManageUsers/>}/>
          <Route path='listings' element={<ManageListings/>}/>
          <Route path='contacts' element={<ManageContacts/>}/>
        </Route>:""}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
