import { BiSolidShow } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import {
  FaDownload,
  FaInstagram,
  FaStarOfLife,
  FaTelegram,
  FaUserGroup,
  FaMoon,
  FaSun,
  FaArrowTurnDown,
  FaArrowTurnUp,
} from "react-icons/fa6";
import { FcBusinessman, FcBusinesswoman, FcSportsMode } from "react-icons/fc";
import { FiHome } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { GrHide } from "react-icons/gr";
import { HiCollection } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import { MdLocationOn, MdOutlineStarPurple500, MdDelete } from "react-icons/md";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { GoArrowDown } from "react-icons/go";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BiErrorCircle } from "react-icons/bi";
import { ImEnlarge } from "react-icons/im";
import { ImShrink } from "react-icons/im";

export const localIcons = {
  Home: FiHome,
  AboutUs: FaUserGroup,
  Book: IoIosPaper,
  CiUser,
  GiNotebook,
  Hide: GrHide,
  Show: BiSolidShow,
  Sports: FcSportsMode,
  Phone: FaPhone,
  Download: FaDownload,
  Instagram: FaInstagram,
  Telegram: FaTelegram,
  Info: BsFillInfoSquareFill,
  Star: MdOutlineStarPurple500,
  Delete: MdDelete,
  Location: MdLocationOn,
  Collection: HiCollection,
  Man: FcBusinessman,
  Woman: FcBusinesswoman,
  StarSign: FaStarOfLife,
  OpenMenu: AiOutlineMenuFold,
  CloseMenu: AiOutlineMenuUnfold,
  Moon: FaMoon,
  Sun: FaSun,
  Logout: CgLogOut,
  Close: IoCloseSharp,
  ArrowTurnDown: FaArrowTurnDown,
  ArrowTurnUp: FaArrowTurnUp,
  GoArrowDown,
  ExclamationCircle: HiOutlineExclamationCircle,
  attention: BiErrorCircle,
  ImEnlarge,
  ImShrink,
};
export type IconsType = keyof typeof localIcons;
