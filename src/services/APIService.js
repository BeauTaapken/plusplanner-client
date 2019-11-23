import axios from 'axios'

const projectAPIClient = axios.create({
    baseURL: 'http://localhost:8083',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type':  'application/json'
    }
});

const subpartAPIClient = axios.create({
    baseURL: 'http://localhost:8081',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type':  'application/json'
    }
});

export default {
    getProjects(){
        return projectAPIClient.get('/project/read/1')
    },

    updateSubPart(object)
    {
        return subpartAPIClient.post('/subpart/update/' + encodeURI(JSON.stringify(object)));
    },

    createSubPart(object)
    {
        return subpartAPIClient.post('/subpart/create/' + encodeURI(JSON.stringify(object)));
    }
}