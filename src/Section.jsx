import { useEffect, useState } from "react";

export default function Section() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("section has rerendered");
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(interval)
  });

  return (
    <>
      <h2>time on page: {timer}s</h2>
    </>
  );
}
