import WebsocketService from "./WebsocketService";

class WebSocketHandler {
    constructor() {
        this.webSocket = new WebSocket(WebsocketService.getWSAddress().replace("https", "ws") + "/messages");
    }

    openConnection(token) {
        this.webSocket.onopen = function () {
            const pay = {
                token: token
            };
            this.send(JSON.stringify(pay));
        };

        this.webSocket.onmessage = function (message) {
            window.console.log(message);
        }
    }

    sendJson(json){
        this.webSocket.send(JSON.stringify(json));
    }

    closeConnection() {
        this.webSocket.close();
    }
}
export default {
    newWebSocket() {
        return new WebSocketHandler();
    }
}