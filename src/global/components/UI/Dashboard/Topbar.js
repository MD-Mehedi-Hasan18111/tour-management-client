import React, { useEffect, useRef, useState } from "react";
import { BiLogOut, BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Topbar = ({ toggleDrawer }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {};

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="py-6 px-10">
      <div className="relative flex items-center justify-between">
        <button onClick={toggleDrawer}>
          <FiMenu className="text-[20px] text-gray-500" />
        </button>
        <button className="md:text-[18px] text-[16px] font-[500] text-[#7f8c8d] hover:text-[#7f8c8d]/80">
          Back to website
        </button>
        <button
          ref={wrapperRef}
          className="flex items-center"
          onClick={toggleDropdown}
        >
          {false ? (
            <img
              src={""}
              alt="User"
              className="md:h-[48px] md:w-[48px] h-[30px] w-[30px] rounded-full"
            />
          ) : (
            <div className="bg-[#0D1218] md:h-[48px] h-[35px] md:w-[48px] w-[35px] rounded-[50%] flex items-center justify-center Dm text-white font-[700] md:text-[18px] text-[14px]">
              {"M"}
              {"H"}
            </div>
          )}
          <div className="md:block hidden text-left ml-2">
            <p className="ml-2 md:text-[16px] text-[12px] text-[#262626] Dm">
              MD Mehedi Hasan
            </p>
            <p className="ml-2 md:text-[14px] text-[12px] text-[#828282] Dm capitalize">
              Admin
            </p>
          </div>
          {isDropdownOpen ? (
            <MdKeyboardArrowUp className="md:text-[20px] text-[16px] ml-1.5" />
          ) : (
            <MdKeyboardArrowDown className="md:text-[20px] text-[16px] ml-1.5" />
          )}
        </button>
        {isDropdownOpen && (
          <div
            ref={wrapperRef}
            className="absolute right-0 md:top-10 top-8 mt-2 md:w-[300px] w-auto bg-white border rounded shadow"
          >
            <p className="md:hidden block flex items-center space-x-2 w-full text-left p-2 md:text-[16px] text-[12px] text-[#262626] Dm">
              <BiUser className="text-[#828282] md:text-[20px] text-[16px]" />
              <span>MD Mehedi Hasan</span>
            </p>
            <p className="block flex items-center space-x-2 w-full text-left px-2 py-2 hover:bg-gray-100 Dm">
              <HiOutlineMail className="text-[#828282] md:text-[20px] text-[16px]" />
              <span className="md:text-[14px] text-[12px]">
                mdmehedihasan18111@gmail.com
              </span>
            </p>
            <button
              onClick={handleLogout}
              className="block flex items-center space-x-2 w-full text-left px-2 py-2 hover:bg-gray-100 Dm"
            >
              <BiLogOut className="text-[#828282] md:text-[20px] text-[16px]" />
              <span className="md:text-[14px] text-[12px]">Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
