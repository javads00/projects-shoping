import { Image } from "../Image";
import { NavLink } from "react-router-dom";
import { FaPhoneFlip } from "react-icons/fa6";

import { IconsType } from "../../assets/index";
import { Icon } from "../../assets/index";

interface QuickAccessInterface {
  title: string;
  route: string;
  icon?: IconsType;
}

const quickAccessItems: Array<QuickAccessInterface> = [
  {
    title: "خانه",
    route: "/",
    icon: "Home",
  },
  {
    title: "شروع کار",
    route: "/",
    icon: "ArrowTurnUp",
  },
];

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden rounded-t-3xl mt-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-6 py-8">
      <div className="grid h-full w-full grid-cols-1 gap-8 md:grid-cols-3">
        {/* !Col-1 */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo.jpg"
            alt="logo"
            className="h-40 w-40 object-contain"
          />
          <span className="inline-block text-sm text-white">
            سامانه جامع خرید انلاین
          </span>
          <div className="flex cursor-pointer items-center gap-3 rounded-xl bg-white/10 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-white/20">
            <FaPhoneFlip className="h-8 w-8" />
            <span>تماس با ما</span>
          </div>
        </div>
        {/* !Col-2 */}
        <div className="flex flex-col gap-6 text-white">
          <h3 className="text-2xl font-bold">دسترسی سریع</h3>
          <ul className="flex flex-col gap-3">
            {quickAccessItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.route}
                  className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-white/20"
                >
                  {item.icon && <Icon iconType={item.icon} />}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* !Col-3 */}
        <div className="flex flex-col gap-6 text-white">
          <h3 className="text-2xl font-bold">با ما همراه باشید</h3>
          <div className="flex items-center gap-5">
            {["Download", "AboutUs", "Book", "ArrowTurnDown"].map(
              (iconType, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 p-2 text-white transition-all duration-200 ease-in-out hover:bg-white/20"
                >
                  <Icon iconType={iconType as IconsType} className="h-8 w-8" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div className="mt-8 w-full text-center">
        <p className="text-sm text-white">
          &#169; تمامی حقوق این وبسایت متعلق به شخص میباشد
        </p>
      </div>
    </footer>
  );
};
