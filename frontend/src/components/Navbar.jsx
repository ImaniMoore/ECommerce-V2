import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/inventory", label: "Inventory" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header className={`nav-header ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="nav-inner">
        {/* Logo + brand */}
        <Link
          to="/"
          className="nav-logo-link"
          aria-label="Velocity Auto Group Home"
        >
          <img
            className="nav-logo"
            src="/images/logo.svg"
            alt="Velocity Logo"
          />
          <span className="nav-brand">
            Velocity<span className="nav-brand-accent"> Auto</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link ${location.pathname === to ? "nav-link-active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="nav-cta-btn">
              Get Pre-Approved
            </Link>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          className={`nav-hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${menuOpen ? "drawer-open" : ""}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`drawer-link ${location.pathname === to ? "drawer-link-active" : ""}`}
          >
            {label}
          </Link>
        ))}
        <Link to="/contact" className="drawer-cta-btn">
          Get Pre-Approved
        </Link>
      </div>
    </header>
  );
};
