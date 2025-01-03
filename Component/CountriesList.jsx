import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import ShimmerCountryList from "./ShimmerCountryList";

export default function CountriesList({ query }) {
  const [CountryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data);
      });
  }, []);

  if (!CountryData.length) {
    return <ShimmerCountryList />;
  }

  return (
    <>
      <div className="Country_container Max_wid_Con">
        {CountryData.filter((country) =>
          country.name.common.toLowerCase().includes(query.trim()) ||
          country.region.toLowerCase().includes(query.trim())
        ).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              cname={country.name.common}
              flags={country.flags.svg}
              region={country.region}
              population={country.population.toLocaleString("en-IN")}
              capital={country.capital}
              alldata={country}
            />
          );
        })}
      </div>
    </>
  );
}
