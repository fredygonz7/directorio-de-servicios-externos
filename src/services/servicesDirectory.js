import axios from 'axios';
import { jsonplaceholderApi } from '../api/jsonplaceholder';

const API_URL = 'https://jsonplaceholder.typicode.com';

const servicesDirectory = {
    register: (data) => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };
        return axios.post(`${API_URL}/posts`, { ...data }, config)
    }
}

const fetchAllResources = async () => {
    const res = await jsonplaceholderApi.get('/posts')
        // .then(({ data, status, statusText }) => {

        //     console.log(data);
        //     return { ...data, status, statusText  };
        // }, ({ response: { status, statusText } }) => {
        //     if (status === 400) {
        //         return ({ status, statusText });
        //     }
        // });
    // console.log(res);
    return ( res.data )
}

export { servicesDirectory, fetchAllResources };