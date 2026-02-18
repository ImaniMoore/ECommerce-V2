import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      {/* Top grid */}
      <div className="footer-top">

        {/* Brand column */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link" aria-label="Velocity Auto Group Home">
            <img src="/images/logo.svg" alt="Velocity Logo" className="footer-logo" />
            <span className="footer-brand-name">
              Velocity<span className="footer-brand-accent"> Auto</span>
            </span>
          </Link>
          <p className="footer-tagline">
            Quality pre-owned vehicles.<br />Driven by trust.
          </p>

          {/* Social icons - use <a> tags for external links */}
          <div className="footer-socials">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              <i className="fa-brands fa-facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="social-icon"
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
          </div>
        </div>

        {/* Explore column */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Explore</h4>
          <ul className="footer-col-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/inventory">Search Cars</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services column */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Services</h4>
          <ul className="footer-col-links">
            <li><Link to="/financing">Financing Options</Link></li>
            <li><Link to="/financing">Get Pre-Approved</Link></li>
            <li><Link to="/sell">Sell Your Car</Link></li>
            <li><Link to="/sell">Trade-In Value</Link></li>
          </ul>
        </div>

        {/* Legal column */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Legal</h4>
          <ul className="footer-col-links">
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/policy">Return Policy</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          Copyright © {currentYear} Velocity Auto Group. All rights reserved.
        </p>
        <p className="footer-disclaimer">
          Velocity Auto Group is a student project for educational purposes and is not a registered auto sales group.
        </p>
      </div>

    </footer>
  );
};