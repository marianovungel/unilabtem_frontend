import axios from 'axios';

const api = axios.create({
    baseURL: 'https://unilabtembackend.herokuapp.com',
});

export default api;