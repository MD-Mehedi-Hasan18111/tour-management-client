import React from "react";
import Navbar from "../components/Shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px] md:px-[40px] px-[20px]">{children}</div>
    </div>
  );
};

export default RootLayout;
