import WebsocketService from "./WebsocketService";
import Store from '../store/index.js'
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
                            Store.dispatch("project/addPartToProject", json);
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
                case "chat":
                    switch (json.action) {
                        case "create":
                            window.console.log(json);
                            //upload to project in store
                            Store.dispatch("project/createChat", json);
                            break;
                    }
                    break;
                case "channel":
                    switch (json.action) {
                        case "create":
                            window.console.log(json);
                            //upload to project in store
                            Store.dispatch("project/addChannelToChat", json);
                            break;
                    }
                    break;
                case "role":
                    switch (json.action) {
                        case "create":
                            window.console.log(json);
                            //upload to project in store
                            window.console.log('success')
                            break;
                    }
                    break;
                case "subpart": {
                    switch (json.action) {
                        case "create":
                            window.console.log(json.element);
                            // upload subparts from project
                            Store.dispatch("project/addSubpartToPart", json);
                            break;
                        case "update":

                            window.console.log(json.element);
                            // upload subparts from project
                            Store.dispatch("project/updateSubpart", json);
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
        window.console.log(JSON.stringify(json));
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