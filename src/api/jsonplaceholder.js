import axios from "axios";

export const jsonplaceholderApi = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com'

    baseURL: 'http://localhost:8000/api/v1/'
    
});