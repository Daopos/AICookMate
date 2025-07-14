import { BookMarked, CookingPot, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div
      className={`d-flex flex-column justify-content-between p-4`}
      style={{ backgroundColor: "#1E293B", height: "100vh", color: "#F8FAFC" }} // dark bg, light text
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
        >
          <LogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
