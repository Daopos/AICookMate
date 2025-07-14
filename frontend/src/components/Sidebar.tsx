import { BookMarked, CookingPot, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Sidebar.module.css";
import { useDispatch } from "react-redux";
import { clearToken } from "../store/auth/tokenSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearToken());

    navigate("/login");
  };

  return (
    <div
      className={`d-flex flex-column justify-content-between p-4`}
      style={{
        backgroundColor: "#1E293B",
        height: "100vh",
        width: "250px", // Or your desired fixed width
        color: "#F8FAFC",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <div>
        <div className="mb-4">
          <h3 className={`logo text-white`}>AICookMate</h3>
        </div>

        <div className="d-flex flex-column gap-3">
          <Link
            className={`d-flex align-items-center gap-2 fs-5 text-white ${style.navItem}`}
            to={"/recipe"}
          >
            <CookingPot />
            Recipe
          </Link>
          <Link
            className={`d-flex align-items-center gap-2 fs-5 text-white ${style.navItem}`}
            to={"/saved"}
          >
            <BookMarked />
            Saved
          </Link>
        </div>
      </div>

      <div>
        <button
          className={`btn btn-outline-light d-flex align-items-center gap-2 w-100`}
          onClick={handleLogout}
        >
          <LogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
