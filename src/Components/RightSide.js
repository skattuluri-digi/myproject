const RightSide = ({posts}) => {
    return ( 
        <div>
            {posts?.map((post)=>
            <ul>
                <li>
                    {post.title}
                </li>
            </ul>
            
            )}
        </div>
     );
}
 
export default RightSide;