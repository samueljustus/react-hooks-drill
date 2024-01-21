import { useContext } from "react";
import { GoUpContext } from "./Parent";

export default function Child() {
    const dispatch = useContext(GoUpContext)

    const handleClick = () => {
        dispatch({
            type: 'Up',
            value: 1
        })
       
    }
  return <button onClick={handleClick}>Go Up</button>;
}
