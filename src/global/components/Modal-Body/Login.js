import React, { useState } from "react";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { HiShieldCheck } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { LoginUser } from "@/global/services/Auth";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "@/global/redux/features/Auth/AuthSlice";
import { toast } from "react-toastify";
import MyToastify from "../Shared/MyToastify";

// Email regular expression
const regexEmailValidation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPasswordValidation =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const Login = ({ setIsOpenLoginModal, setIsOpenRegisterModal }) => {
  const dispatch = useDispatch();

  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  // Email input validation
  const handleEmail = (e) => {
    if (regexEmailValidation.test(e.target.value) || e.target.value === "") {
      setEmail(e.target.value);
      setErrorEmail("");
    } else {
      setErrorEmail("Enter valid email address ");
    }
  };
  // Password input validation
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (regexPasswordValidation.test(e.target.value) || e.target.value === "") {
      setPassword(e.target.value);
      setErrorPassword("");
    } else {
      setErrorPassword(
        "Minimum 8 characters with at least one capital letter, a small letter, a number and a special character."
      );
    }
  };

  // handle login validation
  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    setIsLoad(true);
    const res = await LoginUser(userData);
    if (res?.status === 200) {
      setIsLoad(false);
      setIsOpenLoginModal(false);
      dispatch(setUser(res?.data?.data?.userData));
      dispatch(setToken(res?.data?.data?.accessToken));
      setEmail("");
      setPassword("");
      e.target.reset();
    } else {
      setIsLoad(false);
      toast.error(res?.response?.data?.message);
    }
  };

  return (
    <>
      <MyToastify />
      <div class="w-full flex flex-col items-center">
        <h3 className="lg:text-[24px] text-[20px] flex items-center font-bold my-6">
          {" "}
          <span className="me-3">
            <FaUser className="text-blue-400 lg:text-[24px] text-[20px]" />{" "}
          </span>{" "}
          Login
        </h3>
        <form onSubmit={handleLogin} className="lg:mt-[30px] mt-[20px]">
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
                  defaultValue={email}
                  onChange={(e) => handleEmail(e)}
                  type="email"
                  placeholder="Email Address"
                  className="lg:w-[623px] w-full lg:h-[52px] h-[38px] focus:outline-none bg-transparent border border-gray-300 border-l-0 rounded-r-[10px] px-1 lg:text-[16px] text-[12px]"
                  required
                />
              </div>
              {errorEmail && (
                <span className="text-red-500 lg:text-[16px] text-[12px] lg:ml-[10px]">
                  {errorEmail}
                </span>
              )}
            </div>

            <div className="flex items-center lg:w-[630px] w-full mx-auto">
              <div className="flex items-center border border-r-0 border-gray-300 rounded-l-[10px] lg:px-5 px-2.5 lg:h-[52px] h-[38px]">
                <HiShieldCheck className="lg:text-[24px] text-[20px] text-[#7E8597]" />
              </div>
              <input
                defaultValue={password}
                onChange={(e) => handlePassword(e)}
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
                className="lg:text-[16px] text-[14px] rounded-[10px] bg-blue-400 hover:bg-blue-300 text-white lg:w-[336px] w-[236px] lg:py-[16px] py-[12px] mx-auto font-[600]"
              >
                Log in
              </button>
            )}
          </div>
        </form>
        <p className="text-[#828282] mt-4 text-[14px]">
          Haven't register yet?{" "}
          <button
            onClick={() => {
              setIsOpenLoginModal(false);
              setIsOpenRegisterModal(true);
            }}
            className="text-blue-400 font-[500]"
          >
            Register
          </button>
        </p>
      </div>
    </>
  );
};

export default Login;
