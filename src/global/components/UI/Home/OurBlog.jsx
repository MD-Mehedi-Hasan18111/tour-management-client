import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiPen } from "react-icons/bi";

const OurBlog = () => {
  return (
    <div className="bg-sky-100 p-5">
      <p className="text-4xl font-bold text-center">Our Blog</p>
      <p className="text-xl text-center">Travel tips and advice</p>
      <div className="">
        <div className="md:grid md:grid-cols-2 md:gap-4 md:place-items-stretch">
          <div className="md:grid md:grid-cols-2 md:gap-4 md:m-5">
            <div className="  bg-base-100 mb-5 p-3 rounded">
              <figure>
                <img src="/images/our1.jpg" />
              </figure>
              <div className="my-8">
                <li className="text-secondary my-2 font-2xl">
                  HEALTH & FITNESS
                </li>
                <p className="text-2xl font-bold">
                  Europe's finest and most scenic train journeys
                </p>
                <div className="flex text-slate-600 my-3">
                  <div className="flex items-center gap-2">
                    <AiOutlineCalendar /> july 25, 2023
                  </div>
                  <div className="flex items-center gap-2 ms-8">
                    <BiPen /> By <span className="font-bold">Admin</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="  bg-base-100 mb-5 p-3 rounded">
              <figure>
                <img src="/images/our2.jpg" />
              </figure>
              <div className="my-8">
                <li className="text-secondary my-2 font-2xl">
                  HEALTH & FITNESS
                </li>
                <p className="text-2xl font-bold">
                  Europe's finest and most scenic train journeys
                </p>
                <div className="flex text-slate-600 my-3">
                  <div className="flex items-center gap-2">
                    <AiOutlineCalendar /> july 25, 2023
                  </div>
                  <div className="flex items-center gap-2 ms-8">
                    <BiPen /> By <span className="font-bold">Admin</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-base-100 mt-5 p-3 rounded">
              <figure>
                <img src="/images/our3.jpg" />
              </figure>
              <div className="my-8">
                <li className="text-secondary my-2 font-2xl">
                  HEALTH & FITNESS
                </li>
                <p className="text-2xl font-bold">
                  Europe's finest and most scenic train journeys
                </p>
                <div className="flex text-slate-600 my-3">
                  <div className="flex items-center gap-2">
                    <AiOutlineCalendar /> july 25, 2023
                  </div>
                  <div className="flex items-center gap-2 ms-8">
                    <BiPen /> By <span className="font-bold">Admin</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-base-100 mt-5 p-3 rounded">
              <figure>
                <img src="/images/our4.webp" />
              </figure>
              <div className="my-8">
                <li className="text-secondary my-2 font-2xl">
                  HEALTH & FITNESS
                </li>
                <p className="text-2xl font-bold">
                  Europe's finest and most scenic train journeys
                </p>
                <div className="flex text-slate-600 my-3">
                  <div className="flex items-center gap-2">
                    <AiOutlineCalendar /> july 25, 2023
                  </div>
                  <div className="flex items-center gap-2 ms-8">
                    <BiPen /> By <span className="font-bold">Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`bg-base-100 p-3 rounded  md:visible`}
              // style={{ display: "none" }}
            >
              <figure>
                <img src="/images/our6.jpg" />
              </figure>
              <div className="my-8">
                <li className="text-secondary my-2 font-2xl">
                  HEALTH & FITNESS
                </li>
                <p className="text-2xl font-bold">
                  Europe's finest and most scenic train journeys
                </p>
                <div className="flex text-slate-600 mt-3">
                  <div className="flex items-center gap-2">
                    <AiOutlineCalendar /> july 25, 2023
                  </div>
                  <div className="flex items-center gap-2 ms-8">
                    <BiPen /> By <span className="font-bold">Admin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="card   image-full">
              <figure>
                <img src="/images/our6.jpg" alt="Shoes" />
              </figure>
              <div> </div>
              <div className="card-body mb-5  items-center ">
                <li className="text-secondary my-2 font-2xl">
                  HEALTH & FITNESS
                </li>
                <p className="text-2xl font-bold">
                  Europe's finest and most scenic train journeys
                </p>
                <div className="flex text-slate-600 mt-3">
                  <div className="flex items-center gap-2">
                    <AiOutlineCalendar /> july 25, 2023
                  </div>
                  <div className="flex items-center gap-2 ms-8">
                    <BiPen /> By <span className="font-bold">Admin</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
