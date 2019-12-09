import axios from 'axios'
import EurekaService from "./EurekaService";

let projectService = null;

onload = async () => await load();

async function load() {
    await EurekaService.getInstance("plus-planner-project-service").then((response) => {
        projectService = axios.create({
            baseURL: response.data,
            withCredentials: false,
        });
    });
}


export default {
    async getProjects(token) {
        if(projectService == null)
        {
            await load();
        }
        return projectService.get('project/read', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        });
    }
}