"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/app/styles/navbar.css";

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-brand">Tech Insights</div>
                    <div className="navbar-links desktop">
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href="/about" className="nav-link">About</Link>
                        <Link href="/contact" className="nav-link">Contact</Link>
                    </div>
                    <div className="hamburger" onClick={toggleMobileMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="navbar-links mobile">
                        <Link href="/" className="nav-link" onClick={toggleMobileMenu}>Home</Link>
                        <Link href="/about" className="nav-link" onClick={toggleMobileMenu}>About</Link>
                        <Link href="/contact" className="nav-link" onClick={toggleMobileMenu}>Contact</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
