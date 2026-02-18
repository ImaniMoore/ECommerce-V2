import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-socials">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-icon"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="social-icon"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="social-icon"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>

      <p className="footer-copy">
        Copyright {currentYear} Velocity Auto Group. All rights reserved.
      </p>
    </footer>
  );
};