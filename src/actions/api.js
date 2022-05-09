import axios from 'axios';
import { API_HOST } from '../config';

console.log("API_HOST",API_HOST)

var api = axios.create({
    baseURL: API_HOST,
    responseType: 'json',
    responseEncoding: 'utf8',
});

export default api;