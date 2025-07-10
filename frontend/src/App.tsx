import { useSelector } from "react-redux";
import "./App.css";
import type { RootState } from "./store/store";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./store/counter/CounterSlice";
import Login from "./pages/auth/Login";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
