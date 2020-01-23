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
            let json = JSON.parse(message.data);
            switch (json.type) {
                case "part":
                    switch (json.action) {
                        case "create":
                            //upload to project in store
                            window.console.log(json.element);
                            break;
                    }
                    break;
                case "message":
                    switch (json.action) {
                        case "create":
                            // upload to chat in project in store
                            window.console.log(json.element);
                            break;
                    }
                    break;
                case "subpart": {
                    switch (json.action) {
                        case "create":
                            // upload subparts from project
                            window.console.log(json.element);
                            break;
                    }
                    break;
                }
            }
        };

        this.websocket.onclose = function () {
            window.console.log("closed");
        };
    }

    sendJson(json) {
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