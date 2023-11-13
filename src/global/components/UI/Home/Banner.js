import React from "react";
import styles from "@/styles/banner.module.css";
import Login from "@/global/components/Shared/Login";
import backgroundImage from "@/../../public/images/banner2.jpg";

const Banner = () => {
  return (
    <div
      className="flex flex-row items-center mx-0 my-5 p-5 md:h-[800px] "
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" md:ps-40 ps-5">
        <h2 className="text-white md:text-[60px] text-[24px] md:font-[700]">
          Explore all available listings
        </h2>
        <h5 className="text-white md:text-[28px] text-[18px] font-[400] mt-5">
          One site, 300.000+ experiences you'll remember.
        </h5>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <Login />
      </div>
    </div>
  );
};

export default Banner;
