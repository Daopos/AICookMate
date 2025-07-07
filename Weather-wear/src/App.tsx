import { useSelector } from "react-redux";
import "./App.css";
import type { RootState } from "./store/store";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./store/counter/CounterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const add = (): void => {
    dispatch(increment());
  };

  const sub = (): void => {
    dispatch(decrement());
  };
  return (
    <>
      <h1>Hello World</h1>
      <h1>{count}</h1>

      <button onClick={add}>increment</button>
      <button onClick={sub}>decerement</button>
    </>
  );
}

export default App;
