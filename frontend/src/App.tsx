import { useSelector } from "react-redux";
import "./App.css";
import type { RootState } from "./store/store";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./store/counter/CounterSlice";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
