import React from "react";
import "../../App.css";
import Quotation from "../modules/home/Quotation";
import { Helmet } from "react-helmet";

export default function ContactUs() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pdhscourier | Contacts</title>
        <meta name="contact" content="Pdhs contact and support" />
      </Helmet>
      <Quotation />
    </div>
  );
}
