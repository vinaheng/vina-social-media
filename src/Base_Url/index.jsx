import axios from 'axios';
export const base_url = 'https://backendwe.onrender.com';
// export const api = axios.create(
//     {
//     baseURL: base_url,
//     headers: {
//         Authorization: 'Bearer ' + localStorage.getItem('token'),
//     },
// });
const token = localStorage.getItem('token');
export const api = axios.create({
    baseURL: base_url,
    headers: {
        Authorization: 'Bearer ' + token,
    },
});
