import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../store/store";

export default function useCheckRoute() {
  const navigation = useNavigate();
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth.user);
  const checkRoute = () => {
    console.log({ user });
    if (location?.pathname?.includes("dashboard") && !user) {
      navigation("/");
    }
  };

  return { checkRoute };
}
