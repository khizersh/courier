import React from "react";

const CardLayout = ({children}) => {
  return (
    <div className="container card shadow">
      <div className="card-body">
          {children}
      </div>
    </div>
  );
};

export default CardLayout;
