import { AiOutlineHome } from "react-icons/ai";
import { TbBrandBooking } from "react-icons/tb";
import { ImBook } from "react-icons/im";
import { TfiGallery } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";

export const userMenus = [
  { menuName: "home", icon: <AiOutlineHome className="text-[20px]" /> },
  { menuName: "bookings", icon: <TbBrandBooking className="text-[20px]" /> },
  { menuName: "blogs", icon: <ImBook className="text-[20px]" /> },
  { menuName: "gallery", icon: <TfiGallery className="text-[20px]" /> },
  { menuName: "Profile", icon: <FaUserAlt className="text-[20px]" /> },
];
