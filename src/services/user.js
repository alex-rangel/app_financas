import axios from 'axios';

//crie um url base para a api
const Userapi = axios.create({
    baseURL: 'http://192.168.1.10:3333',
});

export default Userapi;

