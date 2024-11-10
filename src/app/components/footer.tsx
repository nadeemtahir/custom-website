"use client";
import React from "react";
import Link from "next/link";
import "@/app/styles/footer.css"; // CSS ko import karna na bhoolna

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Address Section */}
        <div className="footer-logo">
          <address className="footer-address">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </address>
        </div>
        
        {/* Links Section */}
        <div className="footer-links">
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </div>
        
        {/* Subscribe Button */}
        <div className="footer-newsletter">
          <p className="newsletter-title">Stay Updated</p>
          <button className="subscribe-button">SUBSCRIBE</button>
        </div>
        
      </div>
      
      {/* Footer Bottom Text */}
      <div className="footer-bottom">
        <p>&copy; 2023 Tech Insights. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
