import React, { useState } from "react";
import MenuButton from "../components/UI/Dashboard/MenuButton";
import { userMenus } from "../utils/dashboardMenus";
import { TbLogout } from "react-icons/tb";
import Topbar from "../components/UI/Dashboard/Topbar";
// import component 👇
import Drawer from "react-modern-drawer";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import Private from "./Private";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/features/Auth/AuthSlice";
import Heading from "../components/Shared/Heading";

const DashboardLayout = ({ children }) => {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("home");

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Heading title="Dashboard" />
      <div className="flex bg-[#ecf0f1]/60 w-screen h-screen">
        {/* Sidebar Start */}
        <div className="lg:block hidden bg-[white] border h-screen shadow-md w-[350px] py-4 px-6 relative">
          {/* logo */}
          <div className="mb-2">
            <img
              src="/images/logo.png"
              className="h-[75px] w-[110px] mx-auto"
            />
          </div>
          <hr />
          {/* Menus Start */}
          <div className="mt-6">
            <h3 className="lg:text-[18px] text-[16px] font-[500] mb-4 ml-3">
              MENU
            </h3>
            <div className="flex flex-col space-y-6">
              {userMenus?.map((menu, i) => {
                return <MenuButton menu={menu} setIsOpen={setIsOpen} key={i} />;
              })}
            </div>
            <button
              onClick={() => {
                dispatch(logOut());
              }}
              className="absolute bottom-0 left-0 right-0 bg-[#34495e] hover:bg-[#34495e]/80 text-[white] py-[6px] px-[10px] w-full flex items-center justify-center space-x-2.5"
            >
              <TbLogout className="text-[18px]" />
              <h4 className="text-[18px]">Sign out</h4>
            </button>
          </div>
          {/* Menus End */}
        </div>
        {/* Sidebar End */}

        {/* Mobile Sidebar with drawer start */}
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className="bla bla bla"
        >
          <div className="py-4 px-6 relative">
            {/* logo */}
            <div className="mb-2">
              <img
                src="/images/logo.png"
                className="h-[75px] w-[110px] mx-auto"
              />
            </div>
            <hr />
            {/* Menus Start */}
            <div className="mt-6">
              <h3 className="text-[16px] font-[500] mb-4 ml-3">MENU</h3>
              <div className="flex flex-col space-y-6">
                {userMenus?.map((menu, i) => {
                  return (
                    <MenuButton menu={menu} setIsOpen={setIsOpen} key={i} />
                  );
                })}
              </div>
            </div>
            {/* Menus End */}
          </div>
        </Drawer>
        {/* Mobile Sidebar with drawer end */}

        {/* Child Content Start */}
        <div className="w-screen overflow-y-auto">
          <div className="bg-white sticky top-0">
            <Topbar toggleDrawer={toggleDrawer} />
          </div>
          {children}
        </div>
        {/* Child Content End */}
      </div>
    </div>
  );
};

export default Private(DashboardLayout);
