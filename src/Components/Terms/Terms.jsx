import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <main className="terms">
      <h1>Terms of Service</h1>
      <section aria-labelledby="acceptance">
        <h2 id="acceptance">1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
      </section>
      <section aria-labelledby="usage">
        <h2 id="usage">2. Use of Website</h2>
        <p>You agree to use the website for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>
      </section>
      <section aria-labelledby="intellectual-property">
        <h2 id="intellectual-property">3. Intellectual Property</h2>
        <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary rights.</p>
      </section>
      {/* More sections can be added as needed */}
    </main>
  );
};

export default Terms;