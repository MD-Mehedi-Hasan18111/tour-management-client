import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { FiPhoneCall, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="md:grid md:grid-cols-6 text-center md:text-start p-8  md:gap-4 mb:m-24">
        <div className="col-span-2">
          <div className="">
            <img
              src="/images/logo.png"
              alt=""
              className="w-full md:w-20 text-center"
            />
          </div>
          <p className="text-2xl md:text-xl font-semibold md:pe-12">
            {" "}
            Best website to book tours and make your vacation outstanding.
          </p>
          <div className="flex items-center my-4">
            <p className="font-bold me-4">Follow us: </p>
            <div className="flex gap-4 ">
              <TiSocialFacebook className="text-2xl hover:text-blue-800 cursor-pointer" />
              <TiSocialTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
              <TiSocialLinkedin className="text-2xl hover:text-sky-800 cursor-pointer" />
              <TiSocialYoutube className="text-2xl hover:text-red-900 cursor-pointer" />
            </div>
          </div>
        </div>
        <div>
          <ul className="type-none my-4">
            <li className="font-bold text-xl mb-2">OUR COMPANY</li>
            <li>Careers</li>
            <li>News and Blog</li>
            <li>Support Policy</li>
            <li>About Us</li>
            <li>Shop By Location</li>
          </ul>
        </div>
        <div>
          <ul className="type-none my-4">
            <li className="font-bold text-xl mb-2">QUICK LINKS</li>
            <li>View Account</li>
            <li>Track Your Order</li>
            <li>Return/Exchange</li>
            <li>Promotions</li>
            <li>Customer Reviews</li>
          </ul>
        </div>
        <div>
          <ul className="type-none my-4">
            <li className="font-bold text-xl mb-2">OUR SERVICES</li>
            <li>Tour Guide</li>
            <li>Tour Booking</li>
            <li>Mobile App</li>
            <li>Customer Services</li>
            <li>Account Signup</li>
          </ul>
        </div>
        <div>
          <ul className="type-none my-4">
            <li className="font-bold text-xl mb-2">CONTACT INFO</li>
            <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
            <li className="flex items-center justify-center gap-2 my-2 font-medium ">
              {" "}
              <FiPhoneCall />{" "}
              <span className="text-teal-300">+(406)555-0120</span>
            </li>
            <li className="flex items-center justify-center gap-2 my-2 font-medium">
              {" "}
              <FiMail /> <span>support@example.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
