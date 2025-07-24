import React from "react";
import { Link } from "react-router-dom";

function Navbar({ filters, onFilterChange }) {
  return (
    <nav className="navbar">
      <h2>Apartment Finder</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/apartments">Apartments</Link></li>
        <li><Link to="/add">Add Apartment</Link></li>
        <li><Link to="/interested">Interested</Link></li> {/* 👈 NEW */}
      </ul>

      <div className="filters">
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={onFilterChange}
        />

        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={onFilterChange}
        />

        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={onFilterChange}
        />

        <select
          name="bedrooms"
          value={filters.bedrooms}
          onChange={onFilterChange}
        >
          <option value="">All Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
