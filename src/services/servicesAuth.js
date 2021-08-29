// import axios from 'axios';
import { directoryAPI } from '../api/api/directoryAPI';

// const API_URL = 'http://localhost:8000/api/v1/auth';

// const servicesAuth = {
//     login: (infoUsuario) => {
//         return axios.post(`${API_URL}/login`, { ...infoUsuario })
//     },
//     register: (usuario) => {
//         // const config = {
//         //     headers: { Authorization: `Bearer ${token}` }
//         // };
//         return axios.post(`${API_URL}/auth/signup`, { ...usuario })
//     }
// }

const fetchAuthLogin = (data) => {
    return directoryAPI.post(`/auth/login`, { ...data })
}

/*
const fetchAuthRegister = (data) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    return directoryAPI.post(`/auth/register`, { ...data }, config)
}
*/

export { fetchAuthLogin }