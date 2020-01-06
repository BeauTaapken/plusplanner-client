import axios from 'axios'
import EurekaService from "./EurekaService";

var tokenService = null;
EurekaService.getInstance("plus-planner-token-service").then((url) => {
    tokenService = axios.create({
        baseURL: "https://" + url.data,
        withCredentials: false
    });
});

export default {
    getToken(FToken) {
        if (tokenService == null) {
            setTimeout(this.getToken(FToken), 10)
        }
         return tokenService.get('token/gettoken', {
            headers: {
                FToken: FToken
            }
        })
    }
}