import axios from 'axios'

// var tokenService = null;

const projectAPIClient = axios.create({
    baseURL: 'http://localhost:8083',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type':  'application/json'
    }
});

// const eurekaServer = axios.create({
//     baseURL: 'http://localhost:8101/server-instances/',
//     withCredentials: false
// });
//
// this.getInstance("token-service").then((url) => {
//     tokenService = axios.create({
//         baseURL: url.data,
//         withCredentials: false
//     });
// });

const subpartAPIClient = axios.create({
    baseURL: 'http://localhost:8081',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type':  'application/json'
    }
});

export default {
    getProjects() {
        return projectAPIClient.get('/project/read/1')
    },

    fontysLogin() {
        return null;
    },

    // getInstance(instanceName) {
    //     return eurekaServer.get("getinstance/" + instanceName);
    // },
    //
    // getToken(GToken, setToken) {
    //     if(tokenService == null){
    //         setTimeout(this.getToken(GToken, setToken), 10)
    //     }
    //     tokenService.get('token/token/' + GToken).then(response => {
    //         setToken(response.data)
    //     });
    // },


    updateSubPart(object) {
        return subpartAPIClient.post('/subpart/update/' + encodeURI(JSON.stringify(object)));
    },

    createSubPart(object) {
        return subpartAPIClient.post('/subpart/create/' + encodeURI(JSON.stringify(object)));
    }
}