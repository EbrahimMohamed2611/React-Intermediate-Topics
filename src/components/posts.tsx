import React, {useState} from 'react';
import usePost from "../hooks/usePost";

const Posts = () => {
    const [userId, setUserId] = useState<number>();
    const {data: posts, isLoading, error} = usePost(userId);
    if (error) return <div className="alert alert-danger">{error.message}</div>
    if (isLoading) return <p>Loading....</p>
    return (
        <>
            <select className="form-select mb-3"
                    onChange={(event) => setUserId(parseInt(event.target.value))}>
                <option value=""></option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </select>
            <div>
                <ul className="list-group ">
                    {posts?.map((post) => (<li key={post.id} className="list-group-item">{post.title}</li>))}
                </ul>
            </div>
        </>
    );
};

export default Posts;
