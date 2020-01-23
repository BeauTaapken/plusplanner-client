import WebsocketService from "./WebsocketService";

class WebSocketHandler {
    constructor() {
        this.websocket = new WebSocket("ws://" + WebsocketService.getWSAddress() + "/messages");
    }

    openConnection(token) {
        this.websocket.onopen = function () {
            this.send(token);
            window.console.log("opened");
        };

        this.websocket.onmessage = function (message) {
            window.console.log(message);
        }
    }

    sendJson(json){
        this.websocket.send(JSON.stringify(json));
    }

    closeConnection() {
        this.websocket.close();
    }
}
export default {
    newWebSocket() {
        return new WebSocketHandler();
    }
}