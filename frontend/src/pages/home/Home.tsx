import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#D9EAFD", minHeight: "100vh" }}>
      {isMobile ? <Header /> : <Sidebar />}
      <main
        className="p-4"
        style={{
          marginLeft: isMobile ? 0 : "250px",
          paddingTop: isMobile ? "110px" : "20px", // 56px header + ~50px nav
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
