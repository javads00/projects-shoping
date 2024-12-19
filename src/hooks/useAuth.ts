import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./useSelector";

export const useAuth = () => {
  const user = useAppSelector((state) => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.accessToken) {
      navigate("/login");
    }
  }, []);
};
