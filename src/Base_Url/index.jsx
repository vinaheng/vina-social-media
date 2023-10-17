import axios from 'axios';
export const base_url = 'http://localhost:3000';
export const api = axios.create({
    baseURL: base_url,
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
});
