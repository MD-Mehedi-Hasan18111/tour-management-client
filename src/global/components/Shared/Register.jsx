import Link from "next/link";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import Image from "next/image";
import backgroundImage from "@/../../public/images/regis1.webp";
import { FaUser } from "react-icons/fa";
// import img from "../../images/register-removebg-preview.png";

const Register = () => {
  const [value, setValue] = useState();
  function handleSubmit() {}

  return (
    <div
      className="flex md:flex-row flex-col justify-center items-center h-[80vh]"
      style={{
        // use the src property of the image object
        backgroundImage: `url(${backgroundImage.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" drop-shadow-lg ">
        <form className="container  md:w-[800px] w-full bg-white p-16 ">
          <div className="space-y-12 ">
            <div className="border-b mx-auto border-gray-900/10 pb-12">
              <h3 className="lg:text-[24px] text-[20px] flex items-center mx-auto font-bold my-6">
                {" "}
                <span className="me-3">
                  <FaUser className="text-blue-400 lg:text-[24px] text-[20px]" />{" "}
                </span>{" "}
                Register Form
              </h3>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block md:text-2xl text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="px-2 block w-full rounded-md border-0 py-1.5 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm md:text-2xl font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="px-2 block w-full rounded-md border-0 py-1.5 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-2xl font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="px-2 block w-full rounded-md border-0 py-1.5 md:py-3 shadow-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="block text-sm md:text-2xl font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      className="px-2 block w-full rounded-md border-0 py-1.5 md:py-3.5 shadow-sm sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="city"
                    className="block text-sm md:text-2xl font-medium leading-6 text-gray-900"
                  >
                    Gender
                  </label>
                  <div className="mt-2">
                    <select
                      id="gender"
                      name="gender"
                      autoComplete="gender-name"
                      className="block md:max-w-full w-full rounded-md border-0 py-1.5 md:py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs md:text-xl sm:text-sm sm:leading-6"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="city"
                    className="block text-sm md:text-2xl font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <PhoneInput
                      className="block text-sm md:py-3.5 rounded-md py-1.5 font-medium leading-10 text-gray-900"
                      placeholder="Enter phone number"
                      international
                      defaultCountry="AF"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-info w-full px-6 ">
            Register
          </button>
          <p className="text-center my-4">
            <Link
              href="/"
              className="btn btn-link mx-auto text-sky-500 no-underline "
            >
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
