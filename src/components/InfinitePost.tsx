import React from 'react';
import useInfinitePosts from "../hooks/useInfinitePosts";

const InfinitePosts = () => {
    const {data: postsData, isFetchingNextPage, isLoading, error, fetchNextPage} = useInfinitePosts({pageSize: 10})
    return (
        <div>
            <>
                <div>
                    <ul className="list-group ">
                        {postsData?.pages.map((posts, index) => (
                            <React.Fragment key={index}>
                                {posts?.map((post) => (
                                    <li key={post.id} className="list-group-item">{post.title}</li>))}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
                {/*consider 200 posts*/}
                <button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}
                        className="btn btn-primary ms-1 mt-3"> {isFetchingNextPage ? 'Loading....' : 'Load More'}
                </button>
            </>
        </div>
    );
};

export default InfinitePosts;
