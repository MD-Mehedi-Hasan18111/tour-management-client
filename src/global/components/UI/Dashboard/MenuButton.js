import React from "react";

const MenuButton = ({ activeMenu, setActiveMenu, menu, setIsOpen }) => {
  return (
    <button
      onClick={() => {
        setActiveMenu(menu?.menuName);
        setIsOpen(false);
      }}
      className={`flex items-center space-x-2.5 w-full px-[10px] py-[6px] rounded-[8px] ${
        activeMenu == menu?.menuName
          ? "bg-[#13467B]/80 text-white"
          : "text-[#7f8c8d] hover:bg-[#13467B]/80 hover:text-white"
      }`}
    >
      {menu?.icon}
      <h4 className="lg:text-[18px] text-[16px] font-[400] capitalize">
        {menu?.menuName}
      </h4>
    </button>
  );
};

export default MenuButton;
