import { useState, useRef } from "react";
export default function Form() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);
  const formRef = useRef(null)
  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let name = nameRef.current.value
    let email = emailRef.current.value
    let age = ageRef.current.value
    let formData = new FormData(formRef.current)
    console.log(formData)
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} ref={formRef} >
        <label htmlFor="text">Name:</label>
        <input type="text" ref={nameRef} />
        <label htmlFor="email">Email:</label>
        <input type="email" ref={emailRef} />
        <label htmlFor="number">Age:</label>
        <input type="number" ref={ageRef} />
        <button type="submit">Submit</button>
      </form>
      <p>{result}</p>
    </>
  );
}
