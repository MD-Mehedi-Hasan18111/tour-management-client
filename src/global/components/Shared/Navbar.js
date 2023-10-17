import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { HiDocumentText, HiOutlineMail } from "react-icons/hi";
import { useRouter } from "next/router";
import { BiLogOut, BiSolidDashboard } from "react-icons/bi";

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        // Check if the window object is available (client-side)
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      <nav
        id="navbar"
        className={`${
          isScrolled ? "bg-[#F9F9F9] shadow-lg" : "bg-transparent"
        } md:px-[40px] px-[20px] py-[14px] flex justify-between items-center fixed top-0 left-0 right-0 z-[20]`}
      >
        {/* Left Side */}
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="md:h-[50px] md:w-[50px] h-[40px] w-[40px] mr-2"
          />
          {/* Desktop Screen Menu */}
          <div className="hidden md:flex space-x-4 md:ml-[50px]">
            <Link href="/">
              <div
                className={`flex items-center ${
                  router.pathname === "/"
                    ? "text-[#262626] bg-[#DBB7FF]/25"
                    : "text-[#828282]"
                } hover:text-[#262626] hover:bg-[#DBB7FF]/25 px-4 py-[6px] rounded-[5px]`}
              >
                {router.pathname === "/" && (
                  <AiOutlineHome className="text-[#262626] text-[20px] mr-1.5" />
                )}
                <p className="ml-[6px] Dm">Home</p>
              </div>
            </Link>
            <Link href="/about">
              <div
                className={`flex items-center ${
                  router.pathname === "/about"
                    ? "text-[#262626] bg-[#DBB7FF]/25"
                    : "text-[#828282]"
                } hover:text-[#262626] hover:bg-[#DBB7FF]/25 px-4 py-[6px] rounded-[5px]`}
              >
                {router.pathname === "/about" && (
                  <HiDocumentText className="text-[#DBB7FF] md:text-[24px] text-[18px]" />
                )}
                <p className="ml-[6px] Dm">About</p>
              </div>
            </Link>
            <Link href="/contact">
              <div
                className={`flex items-center ${
                  router.pathname === "/contact"
                    ? "text-[#262626] bg-[#DBB7FF]/25"
                    : "text-[#828282]"
                } hover:text-[#262626] hover:bg-[#DBB7FF]/25 px-4 py-[6px] rounded-[5px]`}
              >
                {router.pathname === "/contact" && (
                  <HiDocumentText className="text-[#DBB7FF] md:text-[24px] text-[18px]" />
                )}
                <p className="ml-[6px] Dm">Contact</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center md:space-x-10 space-x-4">
          <div className="flex items-center space-x-6">
            {router.pathname === "/dashboard" ? (
              <Link
                href="/dashboard"
                className="bg-[#DBB7FF]/10 px-[16px] py-[6px] flex items-center space-x-3 text-[#262626] Dm rounded-[10px] md:text-[16px] text-[12px] shadow-xs"
              >
                <BiSolidDashboard className="md:text-[22px] text-[18px]" />
                <span>Settings</span>
              </Link>
            ) : (
              <Link href="/dashboard">
                <RxDashboard className="text-[#828282] hover:text-[#262626] md:text-[22px] text-[18px]" />
              </Link>
            )}

            <button className="text-[#828282] hover:text-[#262626]">
              <IoIosNotificationsOutline className="md:text-[24px] text-[20px]" />
            </button>
          </div>
          <div className="relative">
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
                <div className="bg-[#0D1218] md:h-[48px] h-[30px] md:w-[48px] w-[30px] rounded-[50%] flex items-center justify-center Dm text-white font-[700] md:text-[18px] text-[14px]">
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
                className="absolute right-0 mt-2 md:w-[300px] w-auto bg-white border rounded shadow"
              >
                <p className="md:hidden block w-full text-left p-2 md:text-[16px] text-[12px] text-[#262626] Dm">
                  MD Mehedi Hasan
                  <br />
                  <span className="md:text-[14px] text-[12px] text-[#828282] Dm">
                    Admin
                  </span>
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
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden block ml-1.5"
          >
            {showMenu ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Screen menu */}
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } bg-white shadow-lg h-auto w-full py-3 flex flex-col absolute top-[50px] left-0 right-0 z-10`}
      >
        <Link href="/">
          <div
            className={`flex items-center ${
              router.pathname === "/"
                ? "text-[#262626] bg-[#DBB7FF]/25"
                : "text-[#828282]"
            } hover:text-[#262626] hover:bg-[#DBB7FF]/25 px-4 py-[6px] rounded-[5px]`}
          >
            {router.pathname === "/" && (
              <AiOutlineHome className="text-[#262626] text-[20px] mr-1.5" />
            )}
            <p className="ml-[6px] Dm">Home</p>
          </div>
        </Link>
        <Link href="/about">
          <div
            className={`flex items-center ${
              router.pathname === "/about"
                ? "text-[#262626] bg-[#DBB7FF]/25"
                : "text-[#828282]"
            } hover:text-[#262626] hover:bg-[#DBB7FF]/25 px-4 py-[6px] rounded-[5px]`}
          >
            {router.pathname === "/about" && (
              <HiDocumentText className="text-[#DBB7FF] md:text-[24px] text-[18px] mr-1.5" />
            )}
            <p className="ml-[6px] Dm">About</p>
          </div>
        </Link>
        <Link href="/contact">
          <div
            className={`flex items-center ${
              router.pathname === "/contact"
                ? "text-[#262626] bg-[#DBB7FF]/25"
                : "text-[#828282]"
            } hover:text-[#262626] hover:bg-[#DBB7FF]/25 px-4 py-[6px] rounded-[5px]`}
          >
            {router.pathname === "/contact" && (
              <HiDocumentText className="text-[#DBB7FF] md:text-[24px] text-[18px]" />
            )}
            <p className="ml-[6px] Dm">Contact</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
