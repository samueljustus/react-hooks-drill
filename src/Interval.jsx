import { useEffect, useState } from "react";

export default function Interval() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>counter:{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        up
      </button>
    </>
  );
}
