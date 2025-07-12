import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <main className="bg-dark w-100 text-bg-light p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
