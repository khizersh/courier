import React from "react";
import logo from "../../../images/section/1.svg";

import "./home.css";

const DealCard = ({bg , title , desc}) => {
  return (
    <div class="text-center">
      <div
        class="card-border rounded-md p-4 pad-100 mb-3 bg-img"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h4 class="mb-2">{title}</h4>
        <p class="text-muted lead text-center">
          {desc}
        </p>
        <div>
          <a href="#" class="btn  mr-3 mb-md-0 mb-3 btnc pl-3 pr-3">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
