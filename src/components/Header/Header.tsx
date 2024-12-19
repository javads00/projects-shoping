import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Icon } from "@/assets/index";
import { HeaderInterface } from "@/interfaces/index";
import { logOutUser } from "@/store/reducers/userReducer";
import { useAppDispatch } from "@/hooks/useDispatch";
export const Header: React.FC<HeaderInterface> = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOutUser(null));
    navigate("/Login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-10 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Link
            to="/wallet"
            className="flex items-center gap-2 text-white transition-transform duration-200 ease-in-out hover:scale-105"
          >
            <Icon iconType="Home" className="h-6 w-6" />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {user.accessToken && (
            <Icon
              iconType="Logout"
              className="h-8 w-8 cursor-pointer text-white transition-transform duration-200 ease-in-out hover:scale-110"
              onClick={handleLogout}
            />
          )}
          <Link
            to="/Login"
            className="rounded-full bg-white bg-opacity-20 px-4 py-2 text-sm font-medium text-white transition-transform duration-200 ease-in-out hover:scale-105"
          >
            ورود/ثبت‌نام
          </Link>
        </div>
      </div>
    </header>
  );
};
