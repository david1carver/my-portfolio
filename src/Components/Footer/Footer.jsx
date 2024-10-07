import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Footer.css';
import footer_logo from '../../assets/Dave\'s logo.png';
import user_icon from '../../assets/user_icon.svg';
import ChartComponent from '../Chart/ChartComponent';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/subscribe`, { email });
      setSubscriptionStatus(response.data.message);
      setEmail('');
    } catch (error) {
      setSubscriptionStatus('Subscription failed. Please try again.');
      console.error('Subscription error:', error);
    }
  }, [email]);

  const subscriptionData = useMemo(() => [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 278 },
    { name: 'May', value: 189 },
  ], []);

  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Dave's logo" className="logo" />
          <p>I am a frontend developer from Australia with 2 years of experience in companies like Amazon, Google and Department of Transport, NSW.</p>
          <ChartComponent data={subscriptionData} />
        </div>
        <div className="footer-top-right">
          <form onSubmit={handleSubscribe} className="footer-email-input">
            <img src={user_icon} alt="" />
            <input 
              type="email" 
              placeholder='Enter your email' 
              aria-label="Email for subscription" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="footer-subscribe">Subscribe</button>
          </form>
          {subscriptionStatus && <p role="alert" aria-live="polite">{subscriptionStatus}</p>}
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; {new Date().getFullYear()} David Carver. All rights reserved.</p>
        <nav className="footer-bottom-right">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Connect with me</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;