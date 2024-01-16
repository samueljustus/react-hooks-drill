import { useEffect, useState } from "react";
import Section from "./Section";

export default function Home() {
  const [home, setHome] = useState(0);
  useEffect(() => {
    console.log('home has rerendered')
  });
 

  return (
    <>
      <h1>Visit:{home}</h1>
      <button
        onClick={() => {
          setHome(home + 1);
        }}
      >
        up
      </button>
      <Section />
    </>
  );
}
