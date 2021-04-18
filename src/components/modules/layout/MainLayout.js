import React from "react";
import SocialIcons from "../home/SocialIcons";
import Navbar from "../navbar/Navbar";

const MainLayout = ({children}) => {
  return (
    <div className="overflow-hidden">
      <SocialIcons />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
