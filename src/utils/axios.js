import axios from 'axios';
const BASE_URL = 'http://localhost:8080'; // 개발용 서버
// const BASE_URL = 'http://34.22.80.41/api'; // 배포용 서버

export default axios.create({
    baseURL: BASE_URL,
});
