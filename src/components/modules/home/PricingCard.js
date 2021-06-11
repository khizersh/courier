import React from "react";
import "./home.css";

const PricingCard = ({ title, price, array , subtitle }) => {
  return (
    <div className="card shad single-price-item mx-3">
      <h4 className="">{title}</h4>
      <p className="text-muted">
        <b>{price}</b>
        <br />
        {subtitle}
      </p>
      <br />
      <ul className="px-4 text-left">
        {array &&
          array.length &&
          array.map((m, i) => (
            <li key={i} className="text-left" style={{fontFamily:"sans-serif"}}>
              <span className="list" >{m.title}</span>{" "}
              <span className="text-muted"> : {m.value}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PricingCard;
