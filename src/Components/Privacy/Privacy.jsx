import React from 'react';
import './Privacy.css';

const Privacy = () => {
  // Using modern JavaScript (ES6+) with arrow function
  return (
    <div className="privacy">
      <h1>Privacy Policy</h1>
      <section>
        <h2>1. Information Collection</h2>
        <p>We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.</p>
      </section>
      <section>
        <h2>2. Information Use</h2>
        <p>Any of the information we collect from you may be used in one of the following ways: To personalize your experience, to improve our website, to improve customer service, to process transactions, to send periodic emails.</p>
      </section>
      <section>
        <h2>3. Information Protection</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
      </section>
      {/* More sections can be added as needed */}
    </div>
  );
};

export default Privacy;