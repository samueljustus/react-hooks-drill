// const isPhoneStore = true;
// const isPhoneAvailable = false;

// function processMessage() {
//   return new Promise((resolve, reject) => {
//     if (!isPhoneStore) {
//       reject({
//         name: "wrong store",
//         message: "sorry this is a food store",
//       });
//     } else if (!isPhoneAvailable) {
//       reject({
//         name: "out of stock",
//         message: "sorry x phone is out of stock",
//       });
//     } else {
//       resolve({
//         name: "ok",
//         message: "your phone is availble for sales",
//       });
//     }
//   });
// }

// processMessage()
//     .then(response => (console.log(response)))
//     .catch(error => (console.log(error)))

//     const theCall = fetch('http://www.google.com')
//     console.log(theCall) // this returns a promise

// const p2 = Promise.resolve('200')
// const p3 = Promise.resolve('finished')
// const p1 = Promise.reject('error from p1')

// Promise.all([p1, p2, p3])
//     .then(response => (console.log(response)))
//     .catch(response => (console.log(response)))

// fetch("http something smethmf")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error))

// instead of this you use await which waits for the promise to be resolved or rejected

// text mr K

// async function runResponse() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const jsonObject = response.json();
//     console.log(jsonObject);
//   } catch (error) {
//     console.log(error);
//   }
// }
// runResponse()
  //   const response = await fetch('something')
  //   const jsonObject = await response.json()
  //   console.log(jsonObject)
  // IIFE immidiately invocked function expression

//   async function () {}
// )();

// const runProcess = async () => {
//     try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/todos/1"
//         );
//         const jsonObject = response.json();
//         console.log(jsonObject);
//       } catch (error) {
//         console.log(error);
//       }
// }

// runProcess()

let data = {
  name: "John Smith",
  age: 30,
  hobbies: ["Programming", "Video Games"]
};

// {name:"John Smith",age:30,hobbies:["Programming","Video Games"]}
let miny = JSON.stringify(data);
console.log(miny)

// The 4 parameter signifys 4 spaces. You can also use "\t".
/* {
 *     name: "John Smith",
 *     age: 30,
 *     ...
 */
let pretty = JSON.stringify(data, null, 4);
console.log(pretty)