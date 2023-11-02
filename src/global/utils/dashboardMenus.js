import { AiOutlineHome } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { ImBook } from "react-icons/im";
import { TfiGallery } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";

export const userMenus = [
  { menuName: "home", icon: <AiOutlineHome className="lg:text-[20px] text-[18px]" /> },
  { menuName: "bookings", icon: <TbBrandBooking className="lg:text-[20px] text-[18px]" /> },
  { menuName: "blogs", icon: <ImBook className="lg:text-[20px] text-[18px]" /> },
  { menuName: "gallery", icon: <TfiGallery className="lg:text-[20px] text-[18px]" /> },
  { menuName: "Profile", icon: <FaUserAlt className="lg:text-[20px] text-[18px]" /> },
];
