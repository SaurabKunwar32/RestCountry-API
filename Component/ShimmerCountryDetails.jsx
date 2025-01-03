import React from "react";
import "./ShimmerCountryDetails.css";

export default function ShimmerCountryDetails() {
  return (
    <>
      <div className="ContainerM">
        <div className="C_items Max_wid_Con">
          <p className=" back"></p>
          <div className="Country_context">
            <div className="cFlag ">
              <div className="flag" />
            </div>

            <div className="country_data cdat">
              <h2 className="head"></h2>

              <div className="CD_in">
                <div className="innerData">
                  <p className="cbox"></p>

                  <p className="cbox"></p>

                  <p className="cbox"></p>

                  <p className="cbox"></p>

                  <p className="cbox"></p>

                  <p className="cbox"></p>

                  <p className="cbox"></p>

                  <p className="cbox"></p>
                </div>
              </div>

              <div className="border_Countries">
                <p className="bdr"></p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
