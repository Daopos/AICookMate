import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div
      className="d-flex"
      style={{ minHeight: "100vh", backgroundColor: "#D9EAFD" }}
    >
      <Sidebar />
      <main
        className="w-100 p-4"
        style={{ marginLeft: "250px", flex: 1, padding: "20px" }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
