import { createContext, useReducer } from "react";
import Child from "./Child.jsx";

const countReducer = (state, action) => {
    switch(action.type) {
        case 'Up': {
            return state + action.value;
        }
        default:
            throw new Error(`${action.type}: type not found`)
    }
};

const GoUpContext = createContext();

export default function Parent() {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <>
    <GoUpContext.Provider value={dispatch}>
    <h1>Counter:{count}</h1>
      <Child />
    </GoUpContext.Provider>
    </>
  );
}

export {GoUpContext}