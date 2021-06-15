import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="wt-section bg-blue text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div className="foot-div">
              <h4 className="footer-heading">Reach us</h4>
              <ul>
                <li>
                  <span>
                    <i className="fa fa-location-arrow mr-2"></i>
                  </span>{" "}
                  #123, Manhatt 7 Avenu, NYC
                </li>
                <li>
                  <i className="fa fa-phone mr-2"></i> +1-1234-567-987
                </li>

                <li>
                  <a href="mailto:info@pdhscourier.com" className="hov-green ">
                    <i className="fa fa-envelope"></i>{" "}
                    <span className="text-white">info@pdhscourier.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="foot-div">
              <h4 className="footer-heading">Site links</h4>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Pricing</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="foot-div">
              <h4 className="footer-heading"> Quick links</h4>
              <ul>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="social-icons">
              <h4 className="footer-heading">Follow us</h4>
              <ul className="list-inline m-0">
                <li className="list-inline-item soc-icon hov-green">
                  <a href="https://www.facebook.com/pdhscourier">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item soc-icon hov-green">
                  <a href="https://www.instagram.com/pdhscouriers/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item soc-icon hov-green">
                  <a href="https://wa.me/message/UA5HMKIDUZF5D1">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center ">
            <p className="foot-rights text-white">
              This website hosted by PDHS Courier.
            </p>
            <p className="foot-rights  text-white">© All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
