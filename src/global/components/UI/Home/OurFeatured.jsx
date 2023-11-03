import Image from "next/image";
import React, { Component } from "react";
import { GrLocation } from "react-icons/gr";
import { IoIosTimer, IoIosArrowForward } from "react-icons/io";
import { BsStarFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurFeatured = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:flex  md:flex-row block my-16">
      <div className=" md:basis-2/5">
        {/* <Image
          src="@/images/featured.png"
          height={100}
          width={100}
          alt="featured"
        /> */}
        <img
          className="max-w-[95%] h-[100%]"
          src="https://camo.githubusercontent.com/72ac79d3cd4deebec2b74f28f34b32d9ae8dfdac/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f2d6e4545505a4138383767632f5352476244506c366a67492f4141414141414141444f632f4c48355759752d5663316b2f73323536302f3730305f313930352e4a5047"
          alt=""
        />
      </div>
      <div className=" md:basis 3/5">
        <div className="w-[74rem]">
          <div>
            <p className=" text-2xl font-bold">Discover Weekly</p>
            <div className="flex justify-between my-5 text-xl font-medium">
              <p className="">Our featured tours</p>
              <p className="flex items-center">
                View All Tours <IoIosArrowForward />
              </p>
            </div>
            <Slider {...settings1}>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-13.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full bg-sky-500">
                          More Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-07.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full bg-sky-500">
                          More Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-05.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full bg-sky-500">
                          More Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-13.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full">More Information</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-07.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full">More Information</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-05.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full">More Information</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="w-[74rem] mt-6">
          <div>
            <Slider {...settings}>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-13.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full bg-sky-500">
                          More Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-07.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full bg-sky-500">
                          More Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-05.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full bg-sky-500">
                          More Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-13.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full bg-sky-500">
                          More Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-07.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full bg-sky-500">
                          More Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img
                      src="https://demo2.themelexus.com/bexper/wp-content/uploads/2023/07/tour-05.jpg"
                      alt="Shoes"
                      height={100}
                    />
                  </figure>
                  <div className="card-body">
                    <div className="mt-24">
                      <div className="flex items-center font-medium">
                        <GrLocation className="me-2" /> Edinburgh Scotland
                      </div>
                      <p className="card-title text-2xl">
                        Original Harry Potter Locations Tour
                      </p>
                      <p>
                        From $50.99{" "}
                        <span>
                          <del className="ms-2">$120.00</del>
                        </span>
                      </p>
                      <div className="my-6">
                        <div className="flex justify-between pe-2">
                          <div className="flex">
                            {" "}
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                          </div>
                          <div className="flex items-center ">
                            <IoIosTimer /> 2 days
                          </div>
                        </div>
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn w-full bg-sky-500">
                          More Information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatured;
