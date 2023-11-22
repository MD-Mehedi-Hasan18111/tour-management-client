import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const MenuButton = ({ menu, setIsOpen }) => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const pathNames = router.pathname.split("dashboard/");
    if (pathNames?.length === 1) {
      setActiveMenu("home");
    } else {
      setActiveMenu(pathNames[1]);
    }
  }, [router.pathname]);

  return (
    <button
      onClick={() => {
        setIsOpen(false);
        if (menu?.menuName !== "home") {
          router.push(`/dashboard/${menu?.menuName}`);
        } else {
          router.push(`/dashboard`);
        }
      }}
      className={`flex items-center space-x-2.5 w-full px-[10px] py-[6px] rounded-[8px] ${
        activeMenu === menu?.menuName
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
