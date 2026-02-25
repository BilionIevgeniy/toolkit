import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/slices/api/apiSlice";

function App() {
  const count = useSelector(({ apiReducer: { count } }) => count);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(increment(2));
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
