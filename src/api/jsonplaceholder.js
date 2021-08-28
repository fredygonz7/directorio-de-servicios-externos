import axios from "axios";

export const jsonplaceholderApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});