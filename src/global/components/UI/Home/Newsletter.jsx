import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import backgroundImage from "@/../../public/images/footer-bg.jpg";

const Newsletter = () => {
  return (
    <div
      className="flex flex-row items-center mx-0 my-5 p-5 md:h-[400px] "
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:basis-4/5 w-full ">
        <div className="flex flex-col  md:flex-row md:items-center md:justify-between  md:px-48 text-white">
          <div className="md:me-36 me-0 md:basis-3/5 md:text-start text-center">
            <p className="text-5xl font-bold  mb-10">
              Sign up to our monthly newsletter
            </p>
            <p className="text-xl p">
              Save up to 50% on tours! Get exelusive access to memebers only
              deals by email.
            </p>
          </div>
          <div className="md:basis-3/5 w-full my-5" data-aos="fade-up">
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-5 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Email address"
            ></input>
            <button
              data-aos-anchor-placement="bottom-bottom"
              className="flex items-center h-[60px] gap-2 text-xl text-white btn btn-info btn-block my-8"
            >
              Subscribe <BsArrowRightCircleFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
