import React, { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useLocation, useParams } from "react-router-dom";
import ShimmerCountryDetails from "./ShimmerCountryDetails";
import { useModes } from "../hooks/useModes";

export default function CountryDetail() {
  const params = useParams();
  const { state } = useLocation();
  const Countryname = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notfound, setnotfound] = useState(false);

  const [isDarkApplied] = useModes();

  // console.log(state);

  function useStoredData(data) {
    setCountryData({
      name: data.name.common,
      tld: data.tld[0],
      native: Object.values(data.name.nativeName || {})[0]?.common || data.name.common,
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      language: Object.values(data.languages || {}).join(', '),
      currencies:Object.values(data.currencies || {})
        .map((curr) => curr.name)
        .join(", "),
      flags: data.flags.svg,
      borders: [],
    });

    if (data.borders && data.borders.length > 0) {
      Promise.all(
        data.borders.map((bor) => {
          return fetch(`https://restcountries.com/v3.1/alpha/${bor}`)
            .then((response) => response.json())
            .then(([data]) => data.name.common);
        })
      ).then((bordersName) => {
        setTimeout(() =>
          setCountryData((prevState) => ({
            ...prevState,
            borders: bordersName,
          }))
        );
      });
    }
  }
  useEffect(() => {
    if (state) {
      useStoredData(state);
      return;
    }

    if (Countryname) {
      fetch(`https://restcountries.com/v3.1/name/${Countryname}?fullText=true`)
        .then((res) => res.json())
        .then(([data]) => {
          useStoredData(data);
        })
        .catch((err) => setnotfound(true));
    }
  }, [Countryname]);

  if (notfound) {
    return (
      <p className="bl">Double-check the spelling !! Country Not Found!</p>
    );
  }

  if (!countryData) {
    return <ShimmerCountryDetails />;
  }

  return (
    <main className={` ${isDarkApplied ? "darkM" : ""}`}>
      <div className="ContainerM">
        <div className="C_items Max_wid_Con">
          <p className="back_button" onClick={() => history.back()}>
            <i className="fa-solid fa-arrow-left-long"></i>&nbsp;&nbsp;Back
          </p>

          {countryData ? (
            <div className="Country_context">
              <div className="cFlag">
                <img src={countryData.flags} alt={countryData.name} />
              </div>

              <div className="country_data">
                <h2 className="CName">{countryData.name} </h2>

                <div className="CD_in">
                  <div className="innerData">
                    <p>
                      <b>Native Name:</b>
                      <span className="native">&nbsp;{countryData.native}</span>
                    </p>
                    <p>
                      <b>Population:</b>
                      <span className="population">
                        &nbsp;{countryData.population}
                      </span>
                    </p>
                    <p>
                      <b>Region:</b>
                      <span className="region">&nbsp;{countryData.region}</span>
                    </p>
                    <p>
                      <b>Sub region:</b>
                      <span className="subRegion">
                        &nbsp;{countryData.subregion}
                      </span>
                    </p>

                    <p>
                      <b>Capital:</b>
                      <span className="Capital">
                        &nbsp;{countryData.capital}
                      </span>
                    </p>
                    <p>
                      <b>Top Level Domain:</b>
                      <span className="topLevelDomain">
                        &nbsp;{countryData.tld}
                      </span>
                    </p>
                    <p>
                      <b>Currencies:</b>
                      <span className="Currencies">
                        &nbsp; {countryData.currencies}
                      </span>
                    </p>
                    <p>
                      <b>Languages:</b>
                      <span className="Language">
                        &nbsp;{countryData.language}
                      </span>
                    </p>
                  </div>

                  {countryData.borders.length !== 0 && (
                    <div className="border_Countries">
                      <p className="bCon">
                        <b>Border Countries:</b>
                        {countryData.borders.map((mdata) => (
                          <Link key={mdata} to={`/${mdata}`}>
                            {mdata}
                          </Link>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p className="noINternet">loading country details....</p>
          )}
        </div>
      </div>
    </main>
  );
}
