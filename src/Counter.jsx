import { useReducer } from "react";

function reducer(prevValue, action) {
    switch(action.type) {
        case 'add': return [...prevValue, action.value] // this mutates the array we can't do thuis
        case 'down':return prevValue - action.value 
        case 'reset': return action.value
    }
}

export default function Counter() {
  const [counter, dispatch] = useReducer(reducer, []);

  function addOne() {
    console.log(counter)
    dispatch({
        type: 'add',
        value: 1335
    });
  }

  function subOne(){
    dispatch({
        type: 'down',
        value: 1
    })
  }
  function reset(){
    dispatch({
        type: 'reset',
        value: 0
    })
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={addOne}>+</button>
      <button onClick={subOne}>-</button>
      <button onClick={reset}>reset</button>
    </>
  );
}
