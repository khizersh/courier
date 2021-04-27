import React from "react";
import SocialIcons from "../home/SocialIcons";
import Navbar from "../navbar/Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div>
        <SocialIcons />
      </div>

      <Navbar />

      <div className="overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
