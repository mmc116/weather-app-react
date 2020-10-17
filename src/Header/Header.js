import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="row">
      <div className="col-sm">
        <button id="current-location">Current Location</button>
        <button id="metric">°C | Km/h</button>
        <button id="imperial">°F | Mp/h</button>
      </div>
      <div className="col-sm">
        <div className="search">
          <form>
            <input
              type="search"
              id="search-input"
              placeholder="Search City"
              autoComplete="off"
            />
            <button id="search-button">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
