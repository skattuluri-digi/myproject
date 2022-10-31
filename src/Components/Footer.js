import { useDispatch } from "react-redux";
import { deleteData } from "../Redux/Actions";

const Footer = ({posts}) => {
const dispatch = useDispatch()
const function1 = (e) => {
    dispatch(deleteData(e.target.value))
}

return ( 
    <div>
        <select onChange = {function1}>
        {posts?.map((post)=>
        <option value={post.id}>
                {post.title}
        </option>
        )}
    </select>
    </div>
    );
}
 
export default Footer;