import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";
import type { RootState } from "../store/store"; // Adjust the path if your store file is elsewhere

const IsLogin = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  console.log("🔐 token:", token);

  return token ? <Navigate to="/home" /> : <Outlet />;
};

export default IsLogin;
