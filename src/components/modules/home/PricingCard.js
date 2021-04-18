import React from "react";
import "./home.css";

const PricingCard = ({ title, price, array }) => {
  return (
    <div className="card shad single-price-item mx-3">
      <h4 className="">{title}</h4>
      <p className="text-muted">
        <b>{price}</b>
        <br />
        For single Product
      </p>
      <br />
      <ul className="px-4">
        {array &&
          array.length &&
          array.map((m, i) => (
            <li key={i}>
              <span className="list">{m.title}</span>{" "}
              <span className="text-muted"> : {m.value}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PricingCard;
