import { useEffect, useState } from "react";

export default function Pokemon() {
  const [image, setImage] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/mankey");
        let Mankey = await response.json();
        let imageUrl = Mankey.sprites.other["official-artwork"].front_default;
        setImage(imageUrl);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Mankey</h1>
      <img src={image} alt="" />
    </>
  );
}


// can i use an api instead of building y own backend