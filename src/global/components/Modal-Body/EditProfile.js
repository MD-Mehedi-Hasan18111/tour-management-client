import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import MyToastify from "../Shared/MyToastify";
import { IoIosArrowDown, IoIosArrowUp, IoMdGlobe } from "react-icons/io";
import { useRef } from "react";
import { UpdateUser } from "@/global/services/Profile";
import { toast } from "react-toastify";
import { setUser } from "@/global/redux/features/Profile/ProfileSlice";
import { BsPencil } from "react-icons/bs";

const EditProfile = ({ setIsProfileEditModal }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileCode, setMobileCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      setMobileCode(user?.mobileCode);
      setPhoneNumber(user?.phoneNumber);
    }
  }, [user]);

  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectCountry1, setSelectCountry1] = useState("");

  // ================================
  //     phone number code handle
  // =======================================
  const fetchCountries = async () => {
    try {
      const data = await axios("https://restcountries.com/v3.1/all");
      const sortData = Object.keys(data).sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCountries(sortData);
      const myC = data.find(
        (country) => country.altSpellings && country.altSpellings[0] === "BD"
      );
      setSelectCountry1(myC);
      setMobileCode(`+${myC.callingCodes[0]}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [countries]);

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
    Update User Integration
    *****************************/
  const [isLoad, setIsLoad] = useState(false);
  const handleUpdateUser = async (e) => {
    e.preventDefault();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      mobileCode: mobileCode,
      phoneNumber: phoneNumber,
    };
    setIsLoad(true);
    const res = await UpdateUser(userData);
    if (res?.status === 200) {
      setIsLoad(false);
      dispatch(setUser(res?.data?.data));
      setIsProfileEditModal(false);
    } else {
      setIsLoad(false);
      toast.error(res?.response?.data?.message);
    }
  };

  return (
    <>
      <MyToastify />
      <div className="w-full flex flex-col items-center">
        <h3 className="lg:text-[24px] text-[20px] flex items-center font-bold my-6">
          {" "}
          <span className="me-3">
            <FaUser className="text-blue-400 lg:text-[24px] text-[20px]" />{" "}
          </span>{" "}
          Update Information
        </h3>
        <form onSubmit={handleUpdateUser} className="lg:mt-[30px] mt-[20px]">
          <div className={`flex flex-col justify-center  space-y-4`}>
            <div>
              <label className="text-xl font-bold">First Name:</label>
              <div
                className={`flex items-center lg:w-[630px] w-full mx-auto my-2`}
              >
                <div className="flex items-center border border-r-0 border-gray-300 rounded-l-[10px] lg:px-5 px-2.5 lg:h-[52px] h-[38px]">
                  <BsPencil className="lg:text-[24px] text-[20px] text-[#7E8597]" />
                </div>
                <input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  placeholder="First Name"
                  className="lg:w-[623px] w-full lg:h-[52px] h-[38px] focus:outline-none bg-transparent border border-gray-300 border-l-0 rounded-r-[10px] px-1 lg:text-[16px] text-[12px]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xl font-bold ">Last Name:</label>
              <div
                className={`flex items-center lg:w-[630px] w-full mx-auto my-2`}
              >
                <div className="flex items-center border border-r-0 border-gray-300 rounded-l-[10px] lg:px-5 px-2.5 lg:h-[52px] h-[38px]">
                  <BsPencil className="lg:text-[24px] text-[20px] text-[#7E8597]" />
                </div>
                <input
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="text"
                  placeholder="Last Name"
                  className="lg:w-[623px] w-full lg:h-[52px] h-[38px] focus:outline-none bg-transparent border border-gray-300 border-l-0 rounded-r-[10px] px-1 lg:text-[16px] text-[12px]"
                  required
                />
              </div>
            </div>
            <label className="text-xl font-bold ">Contact Number:</label>
            <div className="flex items-center md:w-[630px] w-full mx-auto my-2">
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
                            {countries}
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
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                value={phoneNumber}
                placeholder="Phone Number"
                className="Dm md:w-[500px] w-full md:h-[52px] h-[38px] focus:outline-none bg-transparent border border-gray-300 border-l-0 rounded-r-[10px] md:text-[16px] text-[12px]"
                required
              />
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
                UPDATE
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;
