import {useInfiniteQuery} from "@tanstack/react-query";
import axios from "axios";


interface Post {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

interface PostQuery {
    pageSize: number
}

const useInfinitePosts = (postQuery: PostQuery) => {

    return useInfiniteQuery<Post[], Error>({
        queryKey: ['posts', postQuery],
        queryFn: ({pageParam = 0}) => // pageParam will calculate from the getNextPageParam function
            axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _start: pageParam * postQuery.pageSize,
                    _limit: postQuery.pageSize
                }
            })
                .then(response => response.data),
        // enabled: !userId,
        staleTime: 1000, // 1m
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? allPages.length + 1 : undefined; // this value will set to the paramPage in queryFn
        }
    })
}


export default useInfinitePosts;