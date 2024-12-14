import {useQuery} from "@tanstack/react-query";
import axios from "axios";


interface Post {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

const usePost = (userId: number | undefined) => {
    return useQuery<Post[], Error>({
        // users/1/posts
        queryKey: userId ? ['users', userId, 'posts'] : ['posts'], // for caching key
        queryFn: () =>
            axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: userId ? {userId} : {} // Include userId only if it's defined
            })
                .then(response => response.data),
        // enabled: !userId,
        staleTime: 1000 // 1m
        // staleTime: 1 * 60 * 1000 // 1m
    })
}

export default usePost;