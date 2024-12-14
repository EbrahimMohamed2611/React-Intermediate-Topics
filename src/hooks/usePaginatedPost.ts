import {useQuery} from "@tanstack/react-query";
import axios from "axios";


interface Post {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

interface PostQuery {
    page: number,
    pageSize: number
}

const usePaginatedPosts = (postQuery: PostQuery) => {
    console.log(postQuery)
    return useQuery<Post[], Error>({
        queryKey: [postQuery, 'posts'], // for caching key
        queryFn: () =>
            axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _start: postQuery.page * postQuery.pageSize,
                    _limit: postQuery.pageSize
                }
            })
                .then(response => response.data),
        // enabled: !userId,
        staleTime: 1000, // 1m
        keepPreviousData: true
    })
}

export default usePaginatedPosts;