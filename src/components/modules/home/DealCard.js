import React from "react";
import logo from "../../../images/section/1.svg";

import "./home.css";

const DealCard = ({bg , title , desc}) => {
  return (
    <div className="text-center">
      <div
        className="card-border rounded-md p-4 pad-100 mb-3 bg-img"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h4 className="mb-2">{title}</h4>
        <p className="text-muted lead text-center">
          {desc}
        </p>
        <div>
          <a href="#" className="btn  mr-3 mb-md-0 mb-3 btnc pl-3 pr-3">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
