import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Redux/Actions";

const Main = () => {
    const [value, setvalue] = useState("");
    const dispatch = useDispatch();

    const myFunction = (e) => {
        e.preventDefault()
        dispatch(addData(Math.floor(Math.random()*100),  value))
        setvalue("")
    }
    return ( 
        <form onSubmit={myFunction}>
            <input id="myInput" value={value} onChange={(e)=> setvalue(e.target.value)}/>
            <button type="submit" id="myInput">submit</button>
        </form>
     );
}
 
export default Main;