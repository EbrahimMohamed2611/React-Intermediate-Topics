import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

class APIClient<T> {

    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    public getAll = ()=> {
        // debugger;
        return axiosInstance.get<T[]>(this.endpoint)
            .then(response => response.data);
    }

    public post = (data: T)=> {
        return axiosInstance.post(this.endpoint, data)
            .then(res => res.data);
    }

    // public getAll = () => {
    //     // debugger;
    //     return axiosInstance.get<T[]>(this.endpoint)
    //         .then(response => response.data);
    // }
    //
    // public post = (data: T) => {
    //     return axiosInstance.post(this.endpoint, data)
    //         .then(res => res.data);
    // }

}

export default APIClient;