import WebsocketService from "./WebsocketService";

class WebSocketHandler {
    constructor() {
        this.websocket = new WebSocket(WebsocketService.getWSAddress().replace("https", "ws") + "/messages");
    }

    openConnection(token) {
        this.websocket.onopen = function () {
            const pay = {
                token: token
            };
            this.send(JSON.stringify(pay));
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