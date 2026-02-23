import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/slices/api/apiSlice";

function App() {
  const { count } = useSelector(({ apiReducer }) => apiReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
