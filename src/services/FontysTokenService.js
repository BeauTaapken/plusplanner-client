import axios from 'axios'
import qs from 'qs'


export default {
    getToken(providedCode) {
        let credentials = "i411946-plusplanne" + ":" + "h2WDaPrz5kfECP4Me5cMyPVAUmrrgyGD";
        const data = qs.stringify({
            grant_type: 'authorization_code',
            code: providedCode,
            redirect_uri: 'http://localhost:8080',
            client_id: 'i411946-plusplanne',
            client_secret: 'h2WDaPrz5kfECP4Me5cMyPVAUmrrgyGD'
        });

        const headers = {
            baseURL: 'https://identity.fhict.nl',
            withCredentials: false,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: "Basic " + btoa(credentials),
            },
        };

        return axios.post(`connect/token`, data, headers);
    }
}
