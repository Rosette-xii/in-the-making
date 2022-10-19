import axios from 'axios'

const instance = axios.create({
    baseURL: "https://computer.bkhole.app/",
    headers: { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' },
    timeout: 20000
});

export default instance