import React from "react";
import { CgMail } from "react-icons/cg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const ContactForm = () => {
  return (
    <div className="md:flex items-center flex-row md:my-40 my-16">
      <div className="md:basis-2/3 w-full flex flex-col items-center">
        <h3 className="text-4xl font-semibold"> Get in touch </h3>
        <p className="text-xl my-4 mx-8">
          Your email address will not be published. Required fields are marked *
        </p>
        <form action="" className="md:w-[70%] w-10/12 grid">
          <input
            type="text"
            placeholder="Your Name *"
            className="input input-bordered w-full "
          />{" "}
          <br />
          <input
            type="email"
            placeholder="Email Address *"
            className="input input-bordered  w-full "
          />{" "}
          <br />
          <textarea
            type="text"
            placeholder="Your Message *"
            className="input input-bordered w-full row-span-3 h-40"
          />{" "}
          <br />
          <button className="btn btn-info md:px-40 px-6 ">Post Message </button>
        </form>
      </div>
      <div className="md:basis-1/3 w-full my-8 md:gap-7 gap-0">
        <div>
          <div className="flex items-center justify-evenly p-4 gap-4 bg-gray-100 md:w-4/6 w-full rounded-md">
            <CgMail className="text-6xl text-sky-500" />
            <div className="my-4">
              <h5 className="text-xl font-bold">Contact us</h5>
              <p>Call us: +(406) 555-0120</p>
              <p>Email: support@example.com</p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-evenly p-6 gap-4 bg-gray-100 md:w-4/6 w-full  rounded-md">
            <AiOutlineClockCircle className="text-6xl text-sky-500" />
            <div>
              <h5 className="text-xl font-bold">Opening hours</h5>
              <p>Mon-Sat: 7:00am-8:00pm</p>
              <p>Sunday:8:00am-6.00pm</p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-evenly p-6 gap-4 bg-gray-100 md:w-4/6 w-full rounded-md">
            <GoLocation className="text-6xl text-sky-500" />
            <div>
              <h5 className="text-xl font-bold">Our Office</h5>
              <p>2972 Westheimer Rd. Santa</p>
              <p>Ana, Illinois, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
