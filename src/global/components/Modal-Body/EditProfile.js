import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import MyToastify from "../Shared/MyToastify";
import { GrMail } from "react-icons/gr";

const EditProfile = () => {
  const user = useSelector((state) => state.auth.user);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [mobileCode, setMobileCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (user) {
      setFirstName(user?.firstName);
      setLasttName(user?.lastName);
      setMobileCode(user?.mobileCode);
      setPhoneNumber(user?.phoneNumber);
    }
  }, [user]);

  /******************************
    Update User Integration
    *****************************/
  const [isLoad, setIsLoad] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    // const userData = {
    //   email: email,
    //   password: password,
    // };
    // setIsLoad(true);
    // const res = await LoginUser(userData);
    // if (res?.status === 200) {
    //   setIsLoad(false);
    //   setIsOpenLoginModal(false);
    //   dispatch(setUser(res?.data?.data?.userData));
    //   dispatch(setToken(res?.data?.data?.accessToken));
    //   setEmail("");
    //   setPassword("");
    //   e.target.reset();
    // } else {
    //   setIsLoad(false);
    //   toast.error(res?.response?.data?.message);
    // }
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
          Update Information
        </h3>
        <form onSubmit={handleLogin} className="lg:mt-[30px] mt-[20px]">
          <div
            className={`flex flex-col justify-center lg:space-y-8 space-y-6`}
          >
            <div className={`flex items-center lg:w-[630px] w-full mx-auto`}>
              <div className="flex items-center border border-r-0 border-gray-300 rounded-l-[10px] lg:px-5 px-2.5 lg:h-[52px] h-[38px]">
                <GrMail className="lg:text-[24px] text-[20px] text-[#7E8597]" />
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
