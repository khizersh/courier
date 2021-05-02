import React from "react";
import "./SocialIcon.css"

const SocialIcons = () => {
  return (
    <div className="d-none d-sm-block top-icon font-size">
      <div className="container">
        <div className="row py-2">
          <div className="col-6">
            <span>
              <i className="fa fa-phone"></i> +1-1245-678-980
            </span>
            <span className="ml-3">
              <i className="fa fa-envelope"></i> info@yourdomain.com
            </span>
          </div>
          <div className="col-6 text-right ">
            <ul className="list-inline m-0">
              <li className="list-inline-item soc-icon">
                <i className="fa fa-facebook"></i>
              </li>
              <li className="list-inline-item soc-icon">
                <i className="fa fa-instagram"></i>
              </li>
              <li className="list-inline-item soc-icon">
                <i className="fa fa-twitter"></i>
              </li>
              <li className="list-inline-item soc-icon">
                <i className="fa fa-dribbble"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
