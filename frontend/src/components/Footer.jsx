import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <Link to="/" className="footer-brand">
          <img
            src="/images/logo.svg"
            alt="Velocity Logo"
            className="footer-logo"
          />
          <span>
            Velocity<span className="footer-brand-accent"> Auto</span>
          </span>
        </Link>

        <nav className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/contact">Financing</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="footer-copy">© 2026 Velocity Auto Group</p>
      </div>
    </footer>
  );
};
