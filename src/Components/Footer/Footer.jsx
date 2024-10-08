import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footer_logo from '../../assets/Dave\'s logo.png';
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Add your subscription logic here
    console.log('Subscribed with email:', email)
    // Reset email field after submission
    setEmail('')
  }

  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
        <img src={footer_logo} alt="Dave's logo" />
          <p>I am a frontend developer from Australia with 2 years of experience in companies like Amazon, Google and Department of Transport, NSW.</p>
        </div>
        <div className="footer-top-right">
          <form onSubmit={handleSubscribe} className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
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
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2024 David Carver. All rights reserved.</p>
        <div className="footer-bottom-right">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Connect with me</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer