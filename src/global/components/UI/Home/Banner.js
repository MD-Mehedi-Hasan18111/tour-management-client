import React from "react";
import styles from "@/styles/banner.module.css";

const Banner = () => {
  return (
    // <div className={`${styles.container}`}>
    <div className="bg-gradient-to-tr from-gray-700 to-gray-700 md:h-[600px] md:object-cover h-auto w-full relative">
      <img
        // src="https://i.ibb.co/PrG2DCZ/banner.jpg"
        src="/images/banner.jpg"
        className={`${styles.container} w-full object-cover absolute mix-blend-overlay`}
      />
      <div
        className="md:px-[160px] px-[20px] md:py-[100px] py-[50px]"
        data-aos="fade-up"
      >
        <h2 className="text-white md:text-[60px] text-[24px] md:font-[700]">
          Explore all available listings
        </h2>
        <h5 className="text-white md:text-[28px] text-[18px] font-[400] mt-5">
          One site, 300.000+ experiences you'll remember.
        </h5>
      </div>
    </div>
  );
};

export default Banner;
