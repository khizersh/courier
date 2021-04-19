import React from "react";
import SocialIcons from "../home/SocialIcons";
import Navbar from "../navbar/Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <div>
        <SocialIcons />
      </div>
      <div>
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
