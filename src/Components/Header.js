import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../Redux/Actions";

const Header = ({posts}) => {
    const [toggle, settoggle] = useState(false);
    const [value, setvalue] = useState('');
    const [id, setid] = useState('');

    const dispatch = useDispatch();

    const updateById = () => {
        dispatch(updateData(id, value))
        settoggle(false)
    }

    const function1 = (e) => {
        posts.map((post) => post.id == e.target.value && setvalue(post.title))
        settoggle(true)
        setid(e.target.value);
    }

    return ( 
        <>
        {!toggle?
        <select onChange = {function1}>
            {posts?.map((post)=>
            <option value={post.id}>
                    {post.title}
            </option>
            )}
        </select>
        : 
        <>
            <input value={value} onChange={(e)=>setvalue(e.target.value)}/>
            <button onClick={()=> updateById()}>update</button>
            <button onClick={()=>settoggle(false)}>cancel</button>
        </>
        }
        </>
     );
}
 
export default Header;