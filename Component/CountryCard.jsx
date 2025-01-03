import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({cname,flags,region,population,capital,alldata}) {
  // console.log(alldata);
  return (
    <Link className="CountryCard" to={`/${cname}`} state={alldata}>
      <div className="flagss">
      <img src={flags} alt={cname} />
      </div>
      <div className="country_text">
        <h3 className="country_Title">{cname}</h3>
        <p>
          <b>Population: </b>{population}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capital}
        </p>
      </div>
    </Link>
  );
}
