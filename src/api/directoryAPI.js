import axios from "axios";

export const directoryAPI = axios.create({
    baseURL: 'http://prueba.nualtec.com/api/api/v1/'
    // baseURL: 'http://localhost:8000/api/v1/'
});