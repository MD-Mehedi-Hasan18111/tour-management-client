import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiSolidHide } from "react-icons/bi";
// const axios = require("axios");

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     console.log(email, password);

  //     if (email && password) {
  //       const options = {
  //         method: "post",
  //         url: "http://localhost:3000/login",
  //         headers: {
  //           "Content-Type": "application/json; charset=utf-8",
  //         },
  //         data: {
  //           email,
  //           password,
  //         },
  //       };
  //       const response = await axios(options);
  //       if (response.status == "200") {
  //         router.push("/home");
  //       }
  //     }
  //   };

  useEffect(() => {
    // Prefetch the home page for faster transition
    router.prefetch("/home");
  }, []);
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Login Now
      </button>
      <dialog id="my_modal_5" className="modal ">
        <div className="modal-box w-11/12 max-w-5xl">
          <div class=" w-full flex flex-col items-center">
            <h3 className="text-4xl flex font-bold my-6">
              {" "}
              <span className="me-3">
                <FaUser className="text-info" />{" "}
              </span>{" "}
              Login Now{" "}
            </h3>
            <form
              // onSubmit={handleSubmit}
              className="md:w-[90%] w-10/12 grid"
            >
              <div className="relative  bg-white ">
                <label
                  class="block text-gray-700 text-2xl font-medium mb-2"
                  for="username"
                >
                  Username:
                </label>
                <MdEmail className="absolute text-4xl text-sky-300 z-2 mt-4 mx-3 rounded-md" />
                <input
                  type="email"
                  placeholder={` Enter Your Email `}
                  className="input input-bordered w-full h-16 z-1 py-[3px] pl-14 "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <br />
              <div className="relative  bg-white ">
                <label
                  class="block text-gray-700 text-2xl font-medium mb-2"
                  for="username"
                >
                  Password:
                </label>
                <BiSolidHide className="absolute text-4xl text-sky-300 z-2 mt-4 mx-3 rounded-md" />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered w-full h-16 z-1 py-[3px] pl-14 "
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <br />
              <p className="text-center my-4 ">
                {" "}
                <Link
                  href="/register"
                  className="btn btn-link mx-auto no-underline text-red-500"
                >
                  Forgot Password
                </Link>
              </p>
              <button
                type="submit"
                className="btn mx-auto md:w-2/5 w-full btn-info md:px-40 px-6 "
              >
                Login
              </button>
              <Link
                href="/register"
                className="btn btn-link text-sky-500 no-underline"
              >
                Create An Account
              </Link>
            </form>
            {/* <div class="w-full max-w-xs">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p class="text-red-500 text-xs italic">
                    Please choose a password.
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                  <a
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
              <p class="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
              </p>
            </div> */}
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
