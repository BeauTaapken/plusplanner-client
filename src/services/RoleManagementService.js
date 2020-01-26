import axios from 'axios'
import EurekaService from "./EurekaService";

let rolemanagerService = null;

onload = async () => await load();

async function load() {
    await EurekaService.getInstance("plus-planner-role-management-service").then((response) => {
        rolemanagerService = axios.create({
            baseURL: "https://" + response.data,
            withCredentials: false,
        });
    });
}


export default {
    async fetchUsers(token) {
        if(rolemanagerService == null)
        {
            await load();
        }

        return rolemanagerService.get('user/read', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        });
    }
}