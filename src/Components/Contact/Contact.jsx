import React, { useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // enter your own web3 forms access key below
    formData.append("access_key", "xxxxxxxxxxxxxxxxxxxxxxxx");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await axios.post("https://api.web3forms.com/submit", json, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
      setSubmitStatus(res.data.message);
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again.');
    }
  };

  const contactData = [
    { name: 'Emails', value: 40 },
    { name: 'Calls', value: 30 },
    { name: 'Meetings', value: 20 },
  ];

  return (
    <div className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Decorative theme pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" /> <p>david.carver123456@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone" /> <p>+614444444</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" /> <p>Sydney, Australia</p>
            </div>
          </div>
          <BarChart width={300} height={200} data={contactData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder='Enter your name' name='name' required />
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder='Enter your email' name='email' required />
          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
          {submitStatus && <p className="submit-status">{submitStatus}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;