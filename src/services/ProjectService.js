import axios from 'axios'
import EurekaService from "./EurekaService";

var projectService = null;
EurekaService.getInstance("plus-planner-project-service").then((url) => {
    projectService = axios.create({
        baseURL: url.data,
        withCredentials: false,
    });
});

export default {
    getProjects(token) {
        if (projectService == null) {
            return setTimeout(function () {
                this.getProjects(token);
            }, 10);
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