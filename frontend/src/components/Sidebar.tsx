import { BookMarked, CookingPot, House } from "lucide-react";
import { Link } from "react-router-dom";

import style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className=" p-5" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="p-4">
        <h3 className={`logo`}>AICookMate</h3>
      </div>
      <div className="d-flex flex-column align-items-center gap-4 mt-4">
        <Link
          className={`d-flex align-items-center gap-2 fs-5 ${style.navItem}`}
          to={"/home"}
        >
          <House />
          Home
        </Link>
        <Link
          className={`d-flex align-items-center gap-2 fs-5 ${style.navItem}`}
          to={"/recipe"}
        >
          <CookingPot />
          Recipe
        </Link>
        <Link
          className={`d-flex align-items-center gap-2 fs-5 ${style.navItem}`}
          to={"/saved"}
        >
          <BookMarked />
          Saved
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
