import { useState, useRef } from "react";
export default function Form() {
  const formRef = useRef(null);
  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let message = "";
    let formData = new FormData(formRef.current);
    for (const [key, value] of formData) {
      message += `${key}: ${value}`;
    }
    setResult(message)
    
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="text">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <label htmlFor="number">Age:</label>
        <input type="number" name="age" />
        <button type="submit">Submit</button>
      </form>
      <p>{result}</p>
    </>
  );
}
