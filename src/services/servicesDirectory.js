// import axios from 'axios';
// import { jsonplaceholderApi } from '../api/jsonplaceholder';
import { directoryAPI } from '../api/directoryAPI';

// const API_URL = 'https://jsonplaceholder.typicode.com';
// const servicesDirectory = {
//     register: (data) => {
//         const config = {
//             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//         };
//         return axios.post(`${API_URL}/posts`, { ...data }, config)
//     }
// }



const fetchAllDirectories = async () => {
    const res = await directoryAPI.get('/directorioServicio')
    //const res = await jsonplaceholderApi.get('/posts')
    // .then(({ data, status, statusText }) => {
        
        //     console.log(data);
        //     return { ...data, status, statusText  };
        // }, ({ response: { status, statusText } }) => {
    //     if (status === 400) {
    //         return ({ status, statusText });
    //     }
    // });
    // console.log(res.data);
    return (res.data.data)
}

const fetchCreateDirectory = (data) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    // console.log("token",localStorage.getItem('token'));
    // return jsonplaceholderApi.post(`/posts`, { ...data }, config)
    return directoryAPI.post(`/directorioServicio`, { ...data }, config)
}

const fetchUpdateDirectory = (data, id = 1) => {
    // localStorage.setItem("token", "access_token")
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-type': 'application/json; charset=UTF-8',
        }
    };
    // return jsonplaceholderApi.put(`/posts/${id}`, { ...data })
    return directoryAPI.put(`/directorioServicio/${id}`, { ...data }, config)
}

const fetchDeleteDirectory = (id) => {
    // localStorage.setItem("token", "access_token")
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-type': 'application/json; charset=UTF-8',
        }
    };
    // return jsonplaceholderApi.put(`/posts/${id}`, { ...data })
    return directoryAPI.delete(`/directorioServicio/${id}`, config)
}

export { fetchAllDirectories, fetchCreateDirectory, fetchUpdateDirectory, fetchDeleteDirectory };