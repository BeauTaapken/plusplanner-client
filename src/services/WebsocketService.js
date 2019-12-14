import EurekaService from "./EurekaService";

var websocketService = null;
EurekaService.getInstance("plus-planner-websocketserver").then((url) => {
    websocketService = url.data;
});

export default {
    getWSAddress() {
        if (websocketService == null) {
            setTimeout(this.getWSAddress(), 10)
        }
        return websocketService;
    }
}