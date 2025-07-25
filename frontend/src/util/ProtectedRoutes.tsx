import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";
import type { RootState } from "../store/store"; // Adjust the path if your store file is elsewhere

const ProtectedRoutes = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  console.log("🔐 ProtectedRoutes token:", token);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
