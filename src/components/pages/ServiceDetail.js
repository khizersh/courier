import React, { useEffect, useState } from "react";
import ServiceDetailBanner from "../modules/service/ServiceDetailBanner";
import { useParams } from "react-router";
import { getServiceByName } from "../data/helper";
import "../../components/modules/service/service.css";
import QuestionSide from "../modules/service/QuestionSide";
import Helpine from "../modules/service/Helpine";

const ServiceDetail = () => {
  const { page } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    let d = getServiceByName(page);
    setData(d);
    console.log("ddd: ", d);
  }, [page]);
  return (
    <>
      <div className="container-fluid p-0">
        {data && <ServiceDetailBanner image={data.banner} />}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="mt-2">
              <QuestionSide />
            </div>
            <div className=" mb-3">
              <Helpine />
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="single-service">
            <h2>{data && data.title}</h2>
              {data && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.description,
                  }}
                />
              )}
             
            </div>
            <hr />
            {data && data.image1 && data.image2 && (
              <div className="row mb-5">
                <div className="col-6">
                  <img src={data.image1} width="100%" height="230px" />
                </div>
                <div className="col-6">
                  <img src={data.image2} width="100%" height="230px" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
