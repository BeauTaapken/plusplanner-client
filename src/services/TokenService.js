import axios from 'axios'
import EurekaService from "./EurekaService";

var tokenService = null;
EurekaService.getInstance("plus-planner-token-service").then((url) => {
    tokenService = axios.create({
        baseURL: url.data,
        withCredentials: false
    });
});

export default {
    getToken(FToken, setToken) {
        if(tokenService == null){
            setTimeout(this.getToken(FToken, setToken), 10)
        }
        tokenService.get('token/gettoken/' + FToken).then(response => {
            setToken(response.data)
        });
    }
}