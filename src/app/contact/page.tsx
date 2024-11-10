import React from 'react';
import '@/app/styles/contact.css'; // Import the CSS file for styling
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form">
        <div className="contact-input-group">
          <input type="text" placeholder="Name" className="contact-input" required />
          <input type="email" placeholder="Email" className="contact-input" required />
        </div>
        <input type="text" placeholder="Subject" className="contact-input" required />
        <textarea rows={6} placeholder="Message" className="contact-textarea" required></textarea>
        <div className="contact-button-container">
          <button type="submit" className="contact-button">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
