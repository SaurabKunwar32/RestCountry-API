import React from "react";

export default function Regions({setQuery}) {
  return (
    <div className="Regions">
      <select className="S-Regions" onChange={(e)=> setQuery(e.target.value.toLowerCase())}>
        <option hidden>Filter by regions</option>
        <option value="America">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
  );
}
