import React from "react";
import "./news.css";

const NewsCard = ({ title, desc }) => {
  return (
    <div class="col">
      <div class=" d-flex justify-content-center ">
        <div>
          <div class="card card-news">
            <div class="card-header card-header-news pb-0 bg-white">
              <h5 class="font-weight-bold mt-2">{title}</h5>
            </div>
            <div class="card-body card-body-rad">
              <p class="text-muted "> {desc}</p>
              <mark>
                <small class="font-weight-bold">FREE SHIPPING</small>
              </mark>{" "}
              <div class="row justify-content-center mt-4">
                <div class="col-9">
                  <button
                    type="button"
                    class="btn btn-outline-success btn-block font-weight-bold text-dark"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
