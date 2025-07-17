// src/components/Header.tsx
import { Menu, X, CookingPot, BookMarked, LogOut } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearToken } from "../store/auth/tokenSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearToken());
    navigate("/login");
  };

  return (
    <>
      <header
        className="d-flex justify-content-between align-items-center px-4 py-3"
        style={{
          backgroundColor: "#1E293B",
          color: "#F8FAFC",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <h4 className="m-0">AICookMate</h4>
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-outline-light"
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <div
        style={{
          position: "fixed",
          top: "60px",
          left: 0,
          width: "100%",
          backgroundColor: "#334155",
          color: "#F8FAFC",
          display: open ? "block" : "none",
          zIndex: 999,
        }}
      >
        <div className="d-flex flex-column p-3 gap-3">
          <NavLink
            to="/recipe"
            className="text-white text-decoration-none d-flex align-items-center gap-2 fs-5"
            onClick={() => setOpen(false)}
          >
            <CookingPot /> Recipe
          </NavLink>
          <NavLink
            to="/saved"
            className="text-white text-decoration-none d-flex align-items-center gap-2 fs-5"
            onClick={() => setOpen(false)}
          >
            <BookMarked /> Saved
          </NavLink>
          <button
            className="btn btn-outline-light d-flex align-items-center gap-2"
            onClick={() => {
              handleLogout();
              setOpen(false);
            }}
          >
            <LogOut /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
