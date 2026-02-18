import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1400&q=80",
    headline: "Your Dream Car Awaits",
    sub: "Premium Pre-Owned Vehicles",
    cta: "Browse Inventory",
    ctaLink: "/inventory",
  },
  {
    img: "https://images.unsplash.com/photo-1547744152-14d985cb937f?w=1400&q=80",
    headline: "Get Pre-Approved Today",
    sub: "Fast & Easy Financing for Every Budget",
    cta: "Apply Now",
    ctaLink: "/contact",
  },
  {
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400&q=80",
    headline: "Sell or Trade Your Car",
    sub: "We Make It Simple — Get a Free Offer",
    cta: "Get My Offer",
    ctaLink: "/contact",
  },
];

const TRUST = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Certified Inspected",
    desc: "Every vehicle passes a 150-point quality inspection.",
  },
  {
    icon: "fa-solid fa-tag",
    title: "Transparent Pricing",
    desc: "No hidden fees. The price you see is the price you pay.",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    title: "Flexible Financing",
    desc: "Multiple lenders, competitive rates, fast approvals.",
  },
  {
    icon: "fa-solid fa-rotate-left",
    title: "7-Day Returns",
    desc: "Drive it. Love it — or return it within 7 days.",
  },
];

const FEATURED = [
  {
    id: 1,
    year: 2021,
    make: "BMW",
    model: "3 Series",
    price: 33750,
    mileage: 22000,
    type: "Sedan",
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
  },
  {
    id: 2,
    year: 2022,
    make: "Tesla",
    model: "Model 3",
    price: 38500,
    mileage: 9800,
    type: "Electric",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80",
  },
  {
    id: 3,
    year: 2020,
    make: "Ford",
    model: "Mustang",
    price: 31900,
    mileage: 18500,
    type: "Coupe",
    img: "https://images.unsplash.com/photo-1547744152-14d985cb937f?w=600&q=80",
  },
];

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "Bought my Mustang here and couldn't be happier. The team was straightforward — no pressure, no surprises at signing.",
  },
  {
    name: "Aisha R.",
    rating: 5,
    text: "Got pre-approved online in 10 minutes. By the afternoon I was driving off the lot in my new CR-V. Incredible experience.",
  },
  {
    name: "Jordan L.",
    rating: 5,
    text: "Traded in my old car and got a fair value without any back-and-forth haggling. Will definitely be back for my next car.",
  },
];

export const Home = () => (
  <>
    {/* ── HERO SLIDER ── */}
    <section className="hero-slider">
      <Fade duration={3000} transitionDuration={800} arrows infinite>
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="slide"
            style={{
              backgroundImage: `linear-gradient(160deg,rgba(5,8,18,.72),rgba(37,63,134,.42)),url(${s.img})`,
            }}
          >
            <div className="slide-content">
              <p className="slide-eyebrow">Velocity Auto Group</p>
              <h1 className="slide-headline">{s.headline}</h1>
              <p className="slide-sub">{s.sub}</p>
              <Link to={s.ctaLink} className="btn">
                {s.cta}
              </Link>
            </div>
          </div>
        ))}
      </Fade>
    </section>

    {/* ── TRUST BADGES ── */}
    <section className="trust-section">
      <div className="trust-grid container">
        {TRUST.map((t, i) => (
          <div className="trust-card" key={i}>
            <i className={`${t.icon} trust-icon`} />
            <h3 className="trust-title">{t.title}</h3>
            <p className="trust-desc">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── WELCOME ── */}
    <section className="content container">
      <h2>Welcome to Velocity Auto Group</h2>
      <p>
        We specialize in quality pre-owned vehicles with transparent pricing and
        exceptional service. Our team is dedicated to helping you find the
        perfect vehicle that fits your lifestyle and budget.
      </p>
    </section>

    {/* ── FEATURED INVENTORY ── */}
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Vehicles</h2>
          <Link to="/inventory" className="section-link">
            View All Inventory →
          </Link>
        </div>
        <div className="featured-grid">
          {FEATURED.map((car) => (
            <div className="feat-card" key={car.id}>
              <div className="feat-img-wrap">
                <img
                  src={car.img}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  loading="lazy"
                />
                <div className="feat-img-overlay" />
              </div>
              <div className="feat-body">
                <div className="feat-year">{car.year}</div>
                <h3 className="feat-title">
                  {car.make} <span>{car.model}</span>
                </h3>
                <div className="feat-meta">
                  <span className="cc-chip">{car.type}</span>
                  <span className="cc-chip cc-chip-muted">
                    {car.mileage.toLocaleString()} mi
                  </span>
                </div>
                <div className="feat-footer">
                  <span className="feat-price">
                    ${car.price.toLocaleString()}
                  </span>
                  <Link to="/inventory" className="feat-cta-link">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── FINANCING BANNER ── */}
    <section className="finance-banner">
      <div className="finance-banner-inner container">
        <div>
          <h2 className="finance-banner-title">Get Pre-Approved in Minutes</h2>
          <p className="finance-banner-sub">
            Bad credit? No credit? No problem. We work with multiple lenders to
            find the rate that works for you.
          </p>
        </div>
        <div className="finance-banner-actions">
          <Link to="/contact" className="btn">
            Apply for Financing
          </Link>
          <Link to="/contact" className="btn-outline">
            Talk to an Advisor
          </Link>
        </div>
      </div>
    </section>

    {/* ── TESTIMONIALS ── */}
    <section className="testimonials-section">
      <div className="container">
        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          What Our Customers Say
        </h2>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-stars">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <i key={j} className="fa-solid fa-star" />
                ))}
              </div>
              <p className="testi-text">"{t.text}"</p>
              <p className="testi-name">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);
