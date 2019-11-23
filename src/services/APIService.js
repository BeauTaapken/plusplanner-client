import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:8083',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type':  'application/json'
    }
});

export default {
    getProjects(){
        return apiClient.get('/project/read/1')
    },
}