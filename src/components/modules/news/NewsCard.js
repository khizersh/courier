import React, { useState } from "react";
import "./news.css";

const NewsCard = ({ title, desc }) => {
  const [length, setLength] = useState(100);
  const [read, setRead] = useState(false);
  const onClickReadMore = () => {
    if (read) {
      setLength(100);
    } else {
      setLength(desc.length);
    }
    setRead(!read);
  };
  return (
    <div className="col">
      <div className=" d-flex justify-content-center ">
        <div>
          <div className="card card-news">
            <div className="card-header card-header-news pb-0 bg-white">
              <h5 className="font-weight-bold mt-2">{title}</h5>
            </div>
            <div className="card-body card-body-rad">
              <p className="text-muted ">
                {" "}
                {desc.length > 150 ? desc.slice(0, length) + "..." : desc}
              </p>
              <mark onClick={onClickReadMore} style={{ cursor: "pointer" }}>
                <small className="font-weight-bold">
                  {read ? "Read less" : "Read more"}
                </small>
              </mark>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
