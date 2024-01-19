import { useRef } from "react";

export default function Input() {
    let ref = useRef(null)
    
    function handleClick() {
        ref.current.focus()
    }
    
  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
}
