import { useReducer, useEffect } from "react";
export default function Form() {
  let initialFormValue = {
    name: "",
    email: "",
    age: "",
    animal: ''
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "valueChange": {
        return {
          ...state,
          [action.value.name]:action.value.value // i really need to understand what i did here
          
        };
      }
      default:
        throw new Error("type not found");
    }
  };

  const [formValue, dispatch] = useReducer(formReducer, initialFormValue);
  useEffect(() => {
    console.log(formValue);
  });

  // const handleName = (e) => {
  //   dispatch({
  //     type: "usersname",
  //     name: e.target.value,
  //   });
  // };
  // const handleEmail = (e) => {
  //   dispatch({
  //     type: "usersemail",
  //     email: e.target.value,
  //   });
  // };
  // const handleAge = (e) => {
  //   dispatch({
  //     type: "usersage",
  //     age: e.target.value,
  //   });
  // };

  const handleChange = (e) => {
    dispatch({
      type: "valueChange",
      value: {name: e.target.name, value: e.target.value}
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValue);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} onChange={handleChange}>
        <label htmlFor="text">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <label htmlFor="number">Age:</label>
        <input type="number" name="age" />
        <input type="text" name="animal" />
        <button type="submit">Submit</button>
      </form>
      <p>{JSON.stringify(formValue)}</p>
    </>
  );
}
