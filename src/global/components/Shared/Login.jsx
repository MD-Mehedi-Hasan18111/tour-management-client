import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdSecurity } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BiSolidHide } from "react-icons/bi";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { HiShieldCheck } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
// const axios = require("axios");

const Login = () => {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [isLoad, setIsLoad] = useState(false);

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
        <div className="modal-box lg:w-8/12 md:w-7/12 w-11/12 max-w-2xl">
          <div class="w-full flex flex-col items-center">
            <h3 className="lg:text-[24px] text-[20px] flex items-center font-bold my-6">
              {" "}
              <span className="me-3">
                <FaUser className="text-blue-400 lg:text-[24px] text-[20px]" />{" "}
              </span>{" "}
              Login
            </h3>
            <form
              // onSubmit={handleManualLogin}
              className="lg:mt-[30px] mt-[20px]"
            >
              <div
                className={`flex flex-col justify-center lg:space-y-8 space-y-6`}
              >
                <div>
                  <div
                    className={`flex items-center lg:w-[630px] w-full mx-auto ${
                      errorEmail !== "" ? "lg:mb-1.5" : "mb-0"
                    }`}
                  >
                    <div className="flex items-center border border-r-0 border-gray-300 rounded-l-[10px] lg:px-5 px-2.5 lg:h-[52px] h-[38px]">
                      <GrMail className="lg:text-[24px] text-[20px] text-[#7E8597]" />
                    </div>
                    <input
                      // onChange={(e) => handleEmail(e)}
                      type="email"
                      placeholder="Email Address"
                      className="lg:w-[623px] w-full lg:h-[52px] h-[38px] focus:outline-none bg-transparent border border-gray-300 border-l-0 rounded-r-[10px] px-1 lg:text-[16px] text-[12px]"
                      required
                    />
                  </div>
                  {errorEmail && (
                    <span className="text-red-500 lg:text-[16px] text-[12px]  lg:ml-[130px]">
                      {errorEmail}
                    </span>
                  )}
                </div>

                <div className="flex items-center lg:w-[630px] w-full mx-auto">
                  <div className="flex items-center border border-r-0 border-gray-300 rounded-l-[10px] lg:px-5 px-2.5 lg:h-[52px] h-[38px]">
                    <HiShieldCheck className="lg:text-[24px] text-[20px] text-[#7E8597]" />
                  </div>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type={passwordType}
                    placeholder="Password"
                    className=" lg:w-[623px] w-full lg:h-[52px] h-[38px] focus:outline-none bg-transparent border border-gray-300 border-l-0 border-r-0 px-1 lg:text-[16px] text-[12px]"
                    required
                  />
                  <div className="flex items-center border border-l-0 border-gray-300 rounded-r-[10px] lg:px-5 px-2.5 lg:h-[52px] h-[38px]">
                    {passwordType == "password" ? (
                      <AiFillEye
                        onClick={() => setPasswordType("text")}
                        className="cursor-pointer lg:text-[26px] text-[22px] text-blue-400"
                      />
                    ) : (
                      <AiTwotoneEyeInvisible
                        onClick={() => setPasswordType("password")}
                        className="cursor-pointer lg:text-[26px] text-[22px] text-blue-400"
                      />
                    )}
                  </div>
                </div>
                <h4
                  // onClick={() => {
                  //   router.push("/forgot-password");
                  // }}
                  className="cursor-pointer text-[#828282] hover:text-gray-700 lg:text-[14px] text-[12px] text-center"
                >
                  Forgot Password?
                </h4>
                {isLoad ? (
                  <button
                    disabled
                    className="lg:text-[16px] text-[14px] rounded-[10px] bg-[#DBB7FF] lg:w-[336px] w-[236px] lg:py-[12px] py-[10px]  text-[#262626] mx-auto font-[600] flex justify-center"
                  >
                    <span className="loading loading-spinner loading-md"></span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="lg:text-[16px] text-[14px] rounded-[10px] bg-blue-400 text-white lg:w-[336px] w-[236px] lg:py-[16px] py-[12px]  text-[#262626] mx-auto font-[600]"
                  >
                    Log in
                  </button>
                )}
              </div>
            </form>
            <p className="text-[#828282] mt-4 text-[14px]">
              Haven't register yet?{" "}
              <Link className="text-blue-400 font-[500]" href="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Login;
