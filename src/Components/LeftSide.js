import { useDispatch, useSelector } from "react-redux";
import { retrieveData } from "../Redux/Actions";

const LeftSide = ({posts}) => {

const singlePost = useSelector((state) =>  state?.allApis?.post?.data) 
const dispatch = useDispatch();

const function1 = (e) =>{
    dispatch(retrieveData(e.target.value));
}
    return ( 
        <>
        <select onChange = {function1}>
            {posts?.map((post)=>
            <option value={post.id}>
                    {post.title}
            </option>
            )}
        </select>
        {singlePost ? 
        <div>
            <br/>
            {JSON.stringify(singlePost)}
        </div> : null
        }
        </>
     );
}
 
export default LeftSide;