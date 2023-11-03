import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaCcAmazonPay } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";

const MakeHappy = () => {
  return (
    <div className="my-4">
      <p className="text-center md:text-2xl text-4xl font-medium">
        Make you happy
      </p>
      <p className="text-center text-2xl font-bold">
        How we can help your journey
      </p>
      <div className="my-4 md:mx-40 flex flex-col items-center gap-10 justify-center md:flex md:flex-row  md:justify-between">
        <div className="card md:w-96 w-[400px] bg-sky-100">
          <figure>
            <FaMapMarkerAlt className="text-8xl p-4 bg-green-500 m-4 text-orange-700 rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Find your travel destination</h2>
            <p>
              Find your travel destination, because we have covered all regions
              in the world
            </p>
          </div>
        </div>
        <div className="card w-96 bg-sky-100">
          <figure>
            <SiYourtraveldottv className="text-8xl p-4 bg-green-500 m-4 text-orange-700 rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Find your travel destination</h2>
            <p>
              Find your travel destination, because we have covered all regions
              in the world
            </p>
          </div>
        </div>
        <div className="card w-96 bg-sky-100">
          <figure>
            <FaCcAmazonPay className="text-8xl p-4 bg-green-500 m-4 text-orange-700 rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Find your travel destination</h2>
            <p>
              Find your travel destination, because we have covered all regions
              in the world
            </p>
          </div>
        </div>
      </div>

      {/* =========discount sale=========== */}

      {/* <div className="flex gap-20 mx-20 my-20">
        <div>
          <div className="card w-[600px]">
            <img
              src="https://img.freepik.com/premium-vector/final-sale-banner-special-offer-up-50-off-vector-illustration_275806-2080.jpg?w=1480"
              alt="Shoes"
              className="h-[200px]"
            />
          </div>
        </div>
        <div>
          <div className="card w-[600px] ">
            <figure>
              <img
                src="https://img.freepik.com/premium-vector/yellow-ticket_129820-23.jpg?w=1480"
                alt="Shoes"
                className="h-[200px]"
              />
            </figure>
            <div className="card-body"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MakeHappy;
