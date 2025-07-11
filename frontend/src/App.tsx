import "./App.css";
import Login from "./pages/auth/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/Home";
import ProtectedRoutes from "./util/ProtectedRoutes";
import IsLogin from "./util/IsLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<IsLogin />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
