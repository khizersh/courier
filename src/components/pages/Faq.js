import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import bg from "../../images/service/bgservice.jpg";
import "../modules/faq/faq.css";
import { Helmet } from "react-helmet";

const data = {
  title: "Most Asked Questions",
  rows: [
    {
      title:
        "What happens if the consignee is not available at home/delivery address?",
      content: (
        <p>
          If the consignee is not available at the given address, our courier
          will deliver the shipment to a person who is available and will take
          down the signatures and relation of that person to the consignee. In
          case no one is available at the given address or if the address is
          closed, our courier would leave a message card for the consignee.
          After coordinating with the consignee, our courier will make a second
          attempt the following day. However, certain sensitive shipments
          governed by shipper regulations can only be received either by
          consignee or his/her blood relative at given address.
        </p>
      ),
    },
    {
      title:
        "In case a shipment is lost; will PDHS be liable to give us the market value of the good that has been lost?",
      content: (
        <p>
          If the shipment is insured then yes, PDHS is liable to pay the market
          value of the lost shipment. If the shipment is not insured, then the
          liability of PDHS is limited as mentioned in the terms & conditions of
          carriage.
        </p>
      ),
    },
    {
      title: "How does shipper know if his shipment is dutiable?",
      content: (
        <p>
          Each country establishes its own standards as to which goods are
          considered dutiable. For further details, please call us at
          922134322571.
        </p>
      ),
    },
    {
      title:
        "What happens if an international shipment is pending and no new details are provided?",
      content: (
        <p>
          On all such pending shipments, the shipper will have to send new
          details within 5 working days from the date informed. If not, then
          shipper will have to abandon the shipment and it will be destroyed or
          disposed off. However, shipper still remains liable for all additional
          costs (including duty and taxes).
        </p>
      ),
    },
    {
      title: "How do I find out the domestic rates?",
      content: (
        <p>
          For domestic rates, use the Rate Calculator under Quick Start on
          homepage.
          <br />
          Alternatively, follow the steps below on homepage
          <br />
          Please note that the rates given are not final and are subject to
          changes. PDHS will share the final rates at the time of pick-up.
        </p>
      ),
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "#152425",
  rowTitleColor: "#152425",
  rowContentColor: "grey",
  arrowColor: "#12610f",
};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true,
};

const FaqComponent = () => {
  useEffect(() => {
    // console.log(document.title);
    document.title = "FAQ";
  }, []);
  return (
    <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Pdhscourier | FAQ</title>
        <meta name="title" content="Courier Frequent ask questions" />
      </Helmet>
      <div
        className="container-fluid height"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="section-heading text-center">
          <h1>FAQ</h1>
        </div>
        <div className="container card ">
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
    </>
  );
};

export default FaqComponent;
