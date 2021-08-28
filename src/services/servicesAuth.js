import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/auth';

const servicesAuth = {
    login: (infoUsuario) => {
        return axios.post(`${API_URL}/login`, { ...infoUsuario })
    },
    register: (usuario) => {
        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // };

        return axios.post(`${API_URL}/auth/signup`, { ...usuario })
    }
}

export default servicesAuth
