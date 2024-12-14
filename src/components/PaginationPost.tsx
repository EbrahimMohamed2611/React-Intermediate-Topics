import React, {useState} from 'react';
import usePaginatedPosts from "../hooks/usePaginatedPost";

const PaginatedPosts = () => {
    const pageSize = 10; // this should change in the backend first
    const [page, setPage] = useState(0);
    const {data: posts, isLoading, error} = usePaginatedPosts({page, pageSize});
    if (error) return <div className="alert alert-danger">{error.message}</div>
    if (isLoading) return <p>Loading....</p>
    return (
        <>
            <div>
                <ul className="list-group ">
                    {posts?.map((post) => (<li key={post.id} className="list-group-item">{post.title}</li>))}
                </ul>
            </div>
            <button disabled={page === 0} onClick={() => setPage(page - 1)} className="btn btn-primary ms-1 mt-3">Previous
            </button>
            {/*consider 200 posts*/}
            <button disabled={page === 9} onClick={() => setPage(page + 1)} className="btn btn-primary ms-1 mt-3">Next</button>
        </>
    );
};

export default PaginatedPosts;
