import React from "react";

export default function SearchBar({ setQuery }) {
  return (
    <div className="sBox">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search by country name..."
      />
    </div>
  );
}