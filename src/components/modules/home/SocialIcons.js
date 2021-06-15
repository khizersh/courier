import React from "react";
import "./SocialIcon.css";

const SocialIcons = () => {
  return (
    <div className="d-none d-sm-block top-icon font-size">
      <div className="container">
        <div className="row py-2">
          <div className="col-6">
            <span className="hov-green">
              <i className="fa fa-phone "></i> +9221 34322571-72
            </span>
            <span className="ml-3">
              <a className="hov-green text-white" href="mailto:info@pdhscourier.com">
                <i className="fa fa-envelope"></i> <span className="hov-green">info@pdhscourier.com</span> 
              </a>
            </span>
          </div>
          <div className="col-6 text-right ">
          <ul className="list-inline m-0">
            <li className="list-inline-item soc-icon">
              <a href="https://www.facebook.com/pdhscourier">
                <i className="fa fa-facebook hov-green"></i>
              </a>
            </li>
            <li className="list-inline-item soc-icon">
              <a href="https://www.instagram.com/pdhscouriers/">
                <i className="fa fa-instagram hov-green"></i>
              </a>
            </li>
            <li className="list-inline-item soc-icon">
              <a href="https://wa.me/message/UA5HMKIDUZF5D1">
                <i className="fa fa-whatsapp hov-green"></i>
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
