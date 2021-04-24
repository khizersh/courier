import React from "react";
import "./SocialIcon.css"

const SocialIcons = () => {
  return (
    <div class="d-none d-sm-block top-icon font-size">
      <div class="container">
        <div class="row py-2">
          <div class="col-6">
            <span>
              <i class="fa fa-phone"></i> +1-1245-678-980
            </span>
            <span class="ml-3">
              <i class="fa fa-envelope"></i> info@yourdomain.com
            </span>
          </div>
          <div class="col-6 text-right ">
            <ul class="list-inline m-0">
              <li class="list-inline-item soc-icon">
                <i class="fa fa-facebook"></i>
              </li>
              <li class="list-inline-item soc-icon">
                <i class="fa fa-instagram"></i>
              </li>
              <li class="list-inline-item soc-icon">
                <i class="fa fa-twitter"></i>
              </li>
              <li class="list-inline-item soc-icon">
                <i class="fa fa-dribbble"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
