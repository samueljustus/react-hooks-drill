import { useReducer, useEffect } from "react";
import Button from "./Button.jsx";
export default function Counter() {
  const reduceCount = (state, action) => {
    switch (action.type) {
      case "adding": {
        return state + action.value;
      }
      case "subtracting": {
        return state - action.value;
      }
      case "reseting": {
        return action.value;
      }
      default:
        throw new Error("type not found");
    }
  };
  const [count, dispatch] = useReducer(reduceCount, 0);
  useEffect(() => {

  }, [count]);

  const addOne = () => {
    dispatch({
      type: "adding",
      value: 1,
    });
  };
  const subOne = () => {
    dispatch({
      type: "subtracting",
      value: 1,
    });
  };
  const reset = () => {
    dispatch({
      type: "reseting",
      value: 0,
    });
  };

  return (
    <>
      <h1>{count}</h1>
      <Button text="go up" onClick={addOne} />
      <Button text="go down" onClick={subOne} />
      <Button text="reset" onClick={reset} />
    </>
  );
}
