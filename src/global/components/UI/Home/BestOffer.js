import React from "react";
import styles from "@/styles/bestOffer.module.css";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuBookMarked } from "react-icons/lu";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import Image from "next/image";

const BestOffer = () => {
  return (
    <div className="flex md:flex-row flex-col lg:gap-24 md:gap-10 justify-center items-center my-12">
      <div className="basis-1/3 lg:mx-32 my-10 " data-aos="fade-left">
        <p className="px-5 text-[40px] font-[600]">Key features</p>
        <p className="px-5 text-[40px] font-[900]">We offer best service</p>
        <p className="px-5">
          Bexper never ceases to serve you with the best tours and hotels
          offers. Our aim in making your travel booking experience a good one is
          beginning to take shape.
        </p>
        <br />
        <br />
        <div className="flex justify-start">
          <LiaCertificateSolid className="text-5xl" />
          <div className=" ms-5">
            <p className="text-[20px] font-[600]">Lot of choices</p>
            <p>Lorem ipsum dolor sit amet, sed doadipiscing elit</p>
            <br />
          </div>
        </div>
        <div className="flex justify-start">
          <LuBookMarked className="text-4xl" />
          <div className=" ms-8">
            <p className="text-[20px] font-[600]">Lot of choises</p>
            <p>Lorem ipsum dolor sit amet, sed doadipiscing elit</p>
            <br />
          </div>
        </div>
        <div className="flex justify-start">
          <HiOutlineClipboardDocumentCheck className="text-5xl" />
          <div className=" ms-5">
            <p className="text-[20px] font-[600]">Lot of choises</p>
            <p>Lorem ipsum dolor sit amet, sed doadipiscing elit</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="basis-2/3" data-aos="fade-right">
        <Image
          src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/08/h4-img-bg01.jpg"
          alt="best choices"
          height={700}
          width={700}
        />
      </div>
    </div>
  );
};

export default BestOffer;
