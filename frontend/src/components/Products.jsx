import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const SORT_OPTIONS = [
  { value: "default", label: "Sort: Default" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "mileage-asc", label: "Mileage: Low → High" },
  { value: "year-desc", label: "Year: Newest" },
];

const BODY_TYPES = ["All", "Sedan", "SUV"];

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(200000);

  useEffect(() => {
    fetch("/api/products")
      .then(async (res) => {
        if (!res.ok) throw new Error("response was not ok");
        return res.json();
      })
      .then((data) => setProducts(data || []))
      .catch((err) => {
        console.error("Failed to load products:", err);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let list = [...products];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.vin?.toLowerCase().includes(q),
      );
    }

    if (activeType !== "All") {
      list = list.filter((p) => p.type === activeType);
    }

    list = list.filter((p) => p.price <= maxPrice);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "mileage-asc":
        list.sort((a, b) => a.mileage - b.mileage);
        break;
      case "year-desc":
        list.sort(
          (a, b) =>
            (parseInt(b.name.split(" ")[0]) || 0) -
            (parseInt(a.name.split(" ")[0]) || 0),
        );
        break;
      default:
        break;
    }

    return list;
  }, [products, search, activeType, sort, maxPrice]);

  return (
    <main className="inventory-page">
      {/* Page Hero */}
      <div className="inventory-hero">
        <div className="container">
          <p className="inventory-eyebrow">
            <i className="fa-solid fa-car" /> Vehicle Inventory
          </p>
          <h1 className="inventory-hero-title">Find Your Next Car</h1>
          <p className="inventory-hero-sub">
            Browse our full selection of quality pre-owned vehicles — every one
            inspected, priced fairly, and ready to drive.
          </p>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="inventory-controls-bar">
        <div className="container inventory-controls-inner">
          {/* Search */}
          <div className="inv-search-wrap">
            <i className="fa-solid fa-magnifying-glass inv-search-icon" />
            <input
              className="inv-search"
              type="text"
              placeholder="Search by name, VIN…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                className="inv-search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="inv-select-wrap">
            <select
              className="inv-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            <i className="fa-solid fa-chevron-down inv-select-arrow" />
          </div>
        </div>
      </div>

      {/* Body-type filter pills */}
      <div className="inventory-filter-bar">
        <div className="container inventory-filter-inner">
          {BODY_TYPES.map((type) => (
            <button
              key={type}
              className={`filter-pill ${activeType === type ? "filter-pill-active" : ""}`}
              onClick={() => setActiveType(type)}
            >
              {type}
            </button>
          ))}
          <span className="inv-count">
            {loading
              ? "—"
              : `${filtered.length} vehicle${filtered.length !== 1 ? "s" : ""}`}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="container">
        {loading ? (
          <div className="inv-loading">
            <div className="inv-spinner" />
            <p>Loading inventory…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="inv-empty">
            <i className="fa-solid fa-car-side inv-empty-icon" />
            <h3>No vehicles found</h3>
            <p>Try adjusting your search or filters.</p>
            <button
              className="btn"
              onClick={() => {
                setSearch("");
                setActiveType("All");
                setSort("default");
                setMaxPrice(200000);
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <section className="inv-grid" id="inventory" aria-live="polite">
            {filtered.map((p, idx) => (
              <article className="inv-card" key={idx}>
                <div className="inv-card-img-wrap">
                  <img
                    src={`images/${p.image_path}`}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=60";
                    }}
                  />
                  <div className="inv-card-overlay" />
                  {p.type && <span className="inv-card-badge">{p.type}</span>}
                </div>

                <div className="inv-card-body">
                  <h3 className="inv-card-name">{p.name}</h3>
                  {p.description && (
                    <p className="inv-card-desc">{p.description}</p>
                  )}

                  <div className="inv-card-meta">
                    {p.mileage != null && (
                      <span className="cc-chip cc-chip-muted">
                        <i className="fa-solid fa-gauge-high" />{" "}
                        {p.mileage?.toLocaleString?.() ?? p.mileage} mi
                      </span>
                    )}
                    {p.vin && (
                      <span className="cc-chip cc-chip-muted">VIN {p.vin}</span>
                    )}
                  </div>

                  <div className="inv-card-footer">
                    <span className="inv-card-price">
                      ${Number(p.price).toLocaleString()}
                    </span>
                    <Link to="/contact" className="inv-card-cta btn">
                      Inquire
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </div>

      {/* Bottom CTA */}
      {!loading && filtered.length > 0 && (
        <div className="inv-bottom-cta">
          <div className="container">
            <p>
              Can't find what you're looking for?{" "}
              <Link to="/contact" className="inv-cta-link">
                Contact our team →
              </Link>
            </p>
          </div>
        </div>
      )}
    </main>
  );
};
