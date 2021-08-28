import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

const servicesAuth = {
    login: (infoUsuario) => {
        return axios.post(`${API_URL}/posts`, { ...infoUsuario })
    },
    register: (usuario) => {
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // };

        return axios.post(`${API_URL}/auth/signup`, { ...usuario })
    }
}

export default servicesAuth
