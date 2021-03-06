import React, { useEffect, useState } from "react";
import { getStations } from "../data/httpService";
import "../modules/service/service.css";
import { Helmet } from "react-helmet";

const Stations = () => {
  const [row, setRow] = useState([]);
  useEffect(() => {
    getStations()
      .then((res) => {
        if (res && res.data.statusCode === 1) {
          if (res && res.data) {
            console.log(res.data.data);
            setRow(res.data.data);
          }
        }
      })
      .catch((e) => console.log());
  }, []);

  return (
    <div className="container card  card-body my-5 shadow">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pdhscourier | Stations</title>
        <meta name="title" content="Pdhs courier Station list" />
      </Helmet>
      <h2 className="text-center" style={{ fontFamily: "sans-serif" }}>
        Our Station List
      </h2>
      <hr />
      <div className="row ">
        {row.length
          ? row.map((m, i) => (
              <div className="col-12 col-md-3" key={i}>
                <h3 className="stationHeading">
                  Zone {m.zone} <span className="subtitle">({m.subtitle})</span>{" "}
                </h3>
                <ul>
                  {m.cityList.map((n, j) => (
                    <li key={j} className="stationList">
                      {n.city ? (
                        <>
                          <i class="fas fa-chevron-right pl-2"></i> {n.city}
                        </>
                      ) : (
                        "--"
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Stations;
