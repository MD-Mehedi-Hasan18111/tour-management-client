import React, { useEffect, useRef, useState } from "react";
import { AiFillEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { HiShieldCheck } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoMdGlobe } from "react-icons/io";
import { RegisterUser } from "@/global/services/Auth";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "@/global/redux/features/Auth/AuthSlice";
import { toast } from "react-toastify";
import MyToastify from "../Shared/MyToastify";

// Email regular expression
const regexEmailValidation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPasswordValidation =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const Register = ({ setIsOpenLoginModal, setIsOpenRegisterModal }) => {
  const dispatch = useDispatch();

  const [passwordType, setPasswordType] = useState("password");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [mobileCode, setMobileCode] = useState("");
  const [mobile, setMobile] = useState("");
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

  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectCountry1, setSelectCountry1] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.sort((a, b) => a.name.localeCompare(b.name)));
        const myC = data.find(
          (country) => country.altSpellings && country.altSpellings[0] === "BD"
        );
        setSelectCountry1(myC);
        setMobileCode(`+${myC.callingCodes[0]}`);
      });
  }, []);

  // Outside click remove dropdown Wrapper Function
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenDropdown1(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  /******************************
    Sign Up User Integration
    *****************************/
  const signUpUser = async (e) => {
    e.preventDefault();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      gender: gender,
      email: email,
      mobileCode: mobileCode,
      phoneNumber: mobile,
    };
    setIsLoad(true);
    const res = await RegisterUser(userData);
    if (res?.status === 200) {
      setIsLoad(false);
      // console.log(res);
      setIsOpenRegisterModal(false);
      dispatch(setUser(res?.data?.data?.userData));
      dispatch(setToken(res?.data?.data?.accessToken));
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
          Register
        </h3>
        <form onSubmit={signUpUser} className="lg:mt-[20px] mt-[10px]">
          <div
            className={`flex flex-col justify-center lg:space-y-8 space-y-6`}
          >
            <div className={`flex items-center lg:w-[630px] w-full mx-auto`}>
              <div className="flex items-center border border-r-0 border-gray-300 rounded-l-[10px] lg:px-5 px-2.5 lg:h-[52px] h-[38px]">
                <FaUser className="lg:text-[24px] text-[20px] text-[#7E8597]" />
              </div>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
                className="lg:w-[623px] w-full lg:h-[52px] h-[38px] focus:outline-none bg-transparent border border-gray-300 border-l-0 rounded-r-[10px] px-1 lg:text-[16px] text-[12px]"
                required
              />
            </div>

            <div className={`flex items-center lg:w-[630px] w-full mx-auto`}>
              <div className="flex items-center border border-r-0 border-gray-300 rounded-l-[10px] lg:px-5 px-2.5 lg:h-[52px] h-[38px]">
                <FaUser className="lg:text-[24px] text-[20px] text-[#7E8597]" />
              </div>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Last Name"
                className="lg:w-[623px] w-full lg:h-[52px] h-[38px] focus:outline-none bg-transparent border border-gray-300 border-l-0 rounded-r-[10px] px-1 lg:text-[16px] text-[12px]"
                required
              />
            </div>

            <div className={`flex items-center lg:w-[630px] w-full mx-auto`}>
              <div className="flex items-center space-x-10 lg:ml-5">
                <div className="flex items-center space-x-6">
                  <FaUser className="lg:text-[24px] text-[20px] text-[#7E8597]" />
                  <h3 className="lg:text-[16px] text-[12px]">Choose Gender:</h3>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <input
                      onChange={(e) => setGender(e.target.value)}
                      id="male"
                      type="radio"
                      name="gender"
                      value="male"
                      className="h-[18px] w-[18px]"
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      onChange={(e) => setGender(e.target.value)}
                      id="female"
                      type="radio"
                      name="gender"
                      value="female"
                      className="h-[18px] w-[18px]"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
            </div>

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

            <div className="flex items-center md:w-[630px] w-full mx-auto">
              <div
                className="relative flex justify-between items-center Dm md:w-[150px] w-[160px] md:h-[52px] h-[38px] focus:outline-none bg-transparent border border-gray-300 border-r-0 rounded-l-[10px] md:text-[16px] text-[12px] cursor-pointer md:px-[20px] px-[10px]"
                onClick={() => setOpenDropdown1(!openDropdown1)}
                ref={wrapperRef}
              >
                {selectCountry1 !== "" ? (
                  <div className="flex items-center md:space-x-3">
                    {!selectCountry1?.flags ? (
                      ""
                    ) : (
                      <img
                        src={`${selectCountry1?.flags.png}`}
                        alt="flag"
                        className="md:h-[24px] md:w-[34px] h-[20px] w-[30px] shadow-md"
                      />
                    )}
                    <h4 className="md:text-[16px] text-[12px] Dm ml-[10px]">
                      {!selectCountry1?.callingCodes ? (
                        <div className="flex items-center space-x-6">
                          <IoMdGlobe className="md:text-[24px] text-[20px] text-[#7E8597]" />
                          <h4 className="Dm text-[#828282]/90 md:text-[16px] text-[12px]">
                            --
                          </h4>
                        </div>
                      ) : (
                        `+${selectCountry1.callingCodes[0]}`
                      )}
                    </h4>
                  </div>
                ) : (
                  <div className="flex items-center space-x-6">
                    <IoMdGlobe className="md:text-[24px] text-[20px] text-[#7E8597]" />
                    <h4 className="Dm text-[#828282]/90 md:text-[16px] text-[12px]">
                      --
                    </h4>
                  </div>
                )}
                {openDropdown1 ? (
                  <IoIosArrowUp className="md:text-[18px] text-[#828282]" />
                ) : (
                  <IoIosArrowDown className="md:text-[18px] text-[#828282]" />
                )}

                <div
                  className={`${
                    openDropdown1 ? "block" : "hidden"
                  } absolute md:bottom-14 bottom-10 left-0 right-0 z-30 bg-white h-[220px] overflow-y-scroll border-2 border-gray-300 rounded-b-[14px]`}
                >
                  {/* Singapore Indonesia Country find */}
                  {countries
                    ?.filter(
                      (con) =>
                        con?.altSpellings && con?.altSpellings[0] === "BD"
                    )
                    .map((country, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3 px-[20px] hover:bg-gray-200 cursor-pointer py-[15px] border-b"
                          onClick={() => {
                            setSelectCountry1(country);
                            setMobileCode(`+${country.callingCodes[0]}`);
                          }}
                        >
                          <img
                            src={`${country?.flags.png}`}
                            alt="flag"
                            className="md:h-[28px] md:w-[36px] h-[20px] w-[30px] shadow-md"
                          />
                          <h4 className="md:text-[16px] text-[12px] Dm ml-[10px]">
                            {!country.callingCodes
                              ? "--"
                              : `+${country.callingCodes[0]}`}
                          </h4>
                        </div>
                      );
                    })}
                  <div className="border-b border-b-[#828282] w-full"></div>
                  {countries
                    ?.filter(
                      (con) =>
                        con.name !== "United States Minor Outlying Islands" ||
                        !con.name
                    )
                    .map((country, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3 px-[20px] hover:bg-gray-200 cursor-pointer py-[15px] border-b"
                          onClick={() => {
                            setSelectCountry1(country);
                            setMobileCode(`+${country.callingCodes[0]}`);
                          }}
                        >
                          <img
                            src={`${country.flags.png}`}
                            alt="flag"
                            className="md:h-[28px] md:w-[36px] h-[20px] w-[30px] shadow-md"
                          />
                          <h4 className="md:text-[16px] text-[12px] Dm ml-[10px]">
                            {!country.callingCodes
                              ? "--"
                              : `+${country.callingCodes[0]}`}
                          </h4>
                        </div>
                      );
                    })}
                </div>
              </div>
              <input
                onChange={(e) => setMobile(e.target.value)}
                type="text"
                placeholder="Phone Number"
                className="Dm md:w-[500px] w-full md:h-[52px] h-[38px] focus:outline-none bg-transparent border border-gray-300 border-l-0 rounded-r-[10px] md:text-[16px] text-[12px]"
                required
              />
            </div>

            <div>
              <div
                className={`flex items-center lg:w-[630px] w-full mx-auto ${
                  errorPassword !== "" ? "lg:mb-1.5" : "mb-0"
                }`}
              >
                <div className="flex items-center border border-r-0 border-gray-300 rounded-l-[10px] lg:px-5 px-2.5 lg:h-[52px] h-[38px]">
                  <HiShieldCheck className="lg:text-[24px] text-[20px] text-[#7E8597]" />
                </div>
                <input
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
              {errorPassword && (
                <span className="text-red-500 lg:text-[16px] text-[12px]">
                  {errorPassword}
                </span>
              )}
            </div>

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
                Submit
              </button>
            )}
          </div>
        </form>
        <p className="text-[#828282] mt-4 text-[14px]">
          Already registered?{" "}
          <button
            onClick={() => {
              setIsOpenLoginModal(true);
              setIsOpenRegisterModal(false);
            }}
            className="text-blue-400 font-[500]"
          >
            Log In
          </button>
        </p>
      </div>
    </>
  );
};

export default Register;
