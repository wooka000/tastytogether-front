import axios from 'axios';
const BASE_URL = 'http://34.22.80.41/api';

export default axios.create({
    baseURL: BASE_URL,
});
