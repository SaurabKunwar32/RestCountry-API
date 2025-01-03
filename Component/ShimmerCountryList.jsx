import React from "react";
import "./ShimmerCountryList.css";

export default function ShimmerCountryList() {
  const arr = Array.from({ length: 50 }).map((shimmer, i) => {
    return (
      <div key={i} className="CountryCard shimmer">
        <div className="cfl"></div>
        <div className="cardDetail">
          <h3 className="cardTTL"></h3>
          <p className="pa"></p>
          <p className="pa"></p>
          <p className="pa"></p>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="Country_container Max_wid_Con">{arr}</div>
    </>
  );
}
