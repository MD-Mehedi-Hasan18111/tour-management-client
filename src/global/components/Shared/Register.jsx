import Link from "next/link";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import Image from "next/image";
// import img from "../../images/register-removebg-preview.png";

const Register = () => {
  const [value, setValue] = useState();
  function handleSubmit() {}

  return (
    // <div>
    //   <div className="card w-full flex flex-col items-center">
    //     <h4 className="card-header text-4xl font-bold my-6">Register</h4>
    //     <div className="card-body w-2/6  bg-sky-200">
    //       <form onSubmit={handleSubmit} className="md:w-[70%] w-10/12 grid">
    //         <div className="form-group pb-4">
    //           <label>First Name</label>
    //           <input
    //             name="firstName"
    //             type="text"
    //             className="input input-bordered w-full "
    //           />
    //         </div>
    //         <div className="form-group pb-4">
    //           <label>Last Name</label>
    //           <input
    //             name="lastName"
    //             type="text"
    //             className="input input-bordered w-full "
    //           />
    //         </div>
    //         <div className="form-group pb-4">
    //           <label>Email</label>
    //           <input
    //             name="email"
    //             type="email"
    //             className="input input-bordered w-full "
    //           />
    //         </div>
    //         <div className="form-group pb-4">
    //           <label>Gender</label>
    //           <input
    //             name="gender"
    //             type="text"
    //             className="input input-bordered w-full "
    //           />
    //         </div>
    //         <div className="form-group pb-4">
    //           <label>Mobile Code</label>
    //           <input
    //             name="mobilecode"
    //             type="text"
    //             className="input input-bordered w-full "
    //           />
    //         </div>
    //         <div className="form-group pb-4">
    //           <label>Phone Number</label>
    //           <input
    //             name="phonenumber"
    //             type="number"
    //             className="input input-bordered w-full "
    //           />
    //         </div>

    //         <div className="form-group pb-6">
    //           <label>Password</label>
    //           <input
    //             name="password"
    //             type="password"
    //             className="input input-bordered w-full "
    //           />
    //         </div>
    //         <button className="btn btn-primary">Register</button>
    //         <Link href="/login" className="btn btn-link">
    //           Cancel
    //         </Link>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <div class="flex flex-row justify-start bg-[#e4eaf1] ">
      <div class="basis-1/2 ">
        <Image
          src="/../images/register-removebg-preview.png"
          alt="Picture of the author"
          height={1000}
          width={1000} // just an example
        />
      </div>
      <div class="basis-1/2 p-5 text-start drop-shadow-lg">
        <form className="container mx-auto w-[600px]">
          <div className="space-y-12 ">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-4xl font-bold my-6 text-center">
                Register Form
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Gender
                  </label>
                  <div className="mt-2">
                    <select
                      id="gender"
                      name="gender"
                      autoComplete="gender-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <PhoneInput
                      className="block text-sm font-medium leading-10 text-gray-900"
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
            <br />
            <Link href="/" className="btn btn-link mx-auto no-underline ">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
