import axios from 'axios'
import EurekaService from "./EurekaService";

let containerService = null;

onload = async () => await load();

async function load() {
    await EurekaService.getInstance("plus-planner-container-service").then((response) => {
        containerService = axios.create({
            baseURL: "https://" + response.data,
            withCredentials: false,
        });
    });
}


export default {
    async createComponent(token, component) {
        if(containerService == null)
        {
            await load();
        }

        containerService.post('containerservice/component/create/' + encodeURI(JSON.stringify(component)), {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        });
    }
}