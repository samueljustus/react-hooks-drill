import { useRef, useEffect, useState } from "react";
export default function Guess() {
  const ref = useRef(null);
  const inputRef = useRef("");
  const [message, setMessage] = useState("");
  function handleGuess() {
    parseInt(inputRef.current.value) === ref.current
      ? setMessage("You win")
      : inputRef.current.value < ref.current
      ? setMessage("You guessed Low")
      : setMessage("You guessed High");
  }

  useEffect(() => {
    let randNum = Math.floor(Math.random() * 10);
    ref.current = randNum;
    console.log(ref.current);
  }, []);

  

  return (
    <>
      <input type="number" ref={inputRef} />
      <button onClick={handleGuess}>Guess</button>
      <p>{message}</p>
    </>
  );
}
