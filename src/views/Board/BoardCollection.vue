<template>
    <div v-if="this.$parent.$parent.isLoaded">
        <div class="component-content">
            <div class="text-header" v-text="this.$route.params.partName"></div>
            <v-row class="board-content">
                <BoardTable ref="child"
                            v-for="table in tableNames"
                            v-bind:key="table.tableName"
                            v-bind:table-name="table.tableName"
                            v-bind:enum-table-name="table.enumName"
                            v-bind:items="findTableData(table.enumName)"
                />
            </v-row>
        </div>
        <div ref="editTask">

        </div>
        <ReconnectingIcon v-if="!connected"/>
    </div>
</template>

<script>
    import BoardTable from "../../components/Board/BoardTable.vue";
    import apiService from "../../services/ProjectService";
    import webSocketService from "../../services/WebsocketService";
    import ReconnectingIcon from "./ReconnectingIcon";

    export default {
        name: "BoardCollection",
        components: {ReconnectingIcon, BoardTable},
        data: function () {
            return {
                usedData: null,
                tableNames: [{tableName: "Backlog", enumName: "BACKLOG"}, {
                    tableName: "This Sprint",
                    enumName: "THIS_SPRINT"
                }, {tableName: "Working On", enumName: "WORKING_ON"}, {
                    tableName: "Review",
                    enumName: "REVIEW"
                }, {tableName: "Done", enumName: "DONE"}, {tableName: "On Hold", enumName: "ON_HOLD"}],
                partId: null,
                Websocket: null,
                projectid: null,
                connected: false
            }
        },
        created() {
            this.load();
            this.connect();
        },
        updated() {
            this.load();
        },
        methods: {
            connect: function () {
                if (this.$router.currentRoute.name === "board") {
                    let url = webSocketService.getWSAddress();
                    url = url.replace("https", "ws");
                    this.Websocket = new WebSocket(url + "/messages");
                    let comp = this;
                    comp.Websocket.onopen = function () {
                        const pay = {
                            interest: comp.projectid,
                            token: comp.$session.get("plusplannerToken")
                        };
                        comp.Websocket.send(JSON.stringify(pay));
                    };

                    comp.Websocket.onmessage = function (message) {
                        let json = JSON.parse(message.data);
                        switch (json.type) {
                            case "task":
                                switch (json.action) {
                                    case "create":
                                        // eslint-disable-next-line no-case-declarations
                                        let table = comp.getChildTable(json.element.state);
                                        table.itemArray.push(json.element);
                                        break;
                                    case "update":
                                        // eslint-disable-next-line no-case-declarations
                                        let oldTable = comp.getOldChildTable(json.element.subpartid);
                                        // eslint-disable-next-line no-case-declarations
                                        let index = oldTable.itemArray.findIndex(
                                            x => (x.subpartid === json.element.subpartid));
                                        window.console.log(index);
                                        oldTable.itemArray.splice(index, 1);
                                        // eslint-disable-next-line no-case-declarations
                                        let newTable = comp.getChildTable(json.element.state);
                                        newTable.itemArray.push(json.element);
                                        break;
                                }
                                break;
                        }
                    };

                    comp.Websocket.onerror = function (error) {
                        window.console.log(error);
                    };

                    comp.Websocket.onclose = function () {
                        comp.connected = false;
                        if (comp.Websocket.readyState === 3) {
                            setTimeout(function () {
                                window.console.log("Reconnecting");
                                comp.connect();
                            }, 10000);
                        }
                    }
                }
            },
            getChildTable: function (state) {
                let tables = this.$refs.child;
                for (let i = 0; i < tables.length; i++) {
                    if (tables[i].enumTableName === state) {
                        return tables[i];
                    }
                }
            },
            getOldChildTable: function (subpartid) {
                let tables = this.$refs.child;

                for (let i = 0; i < tables.length; i++) {
                    for (let j = 0; j < tables[i].itemArray.length; j++) {
                        let json = tables[i].itemArray[j];
                        if (json.subpartid === subpartid) {
                            return tables[i];
                        }
                    }
                }
            },
            load: function () {
                let json = this.$parent.$parent.projectData;
                let res = json.filter(d => d.projectname === this.$route.params.projectName);
                this.projectid = res[0].projectid;
                let t = res[0]["parts"].filter(d => d.partname === this.$route.params.partName);
                this.usedData = t[0];
                this.partId = this.usedData['partid'];
            },
            findTableData: function (tablename) {
                let selectedPartData = this.usedData;
                let dataArray = [];
                for (let i = 0; i < selectedPartData.subparts.length; i++) {
                    if (selectedPartData.subparts[i].state === tablename) {
                        dataArray.push(selectedPartData.subparts[i]);
                    }
                }
                return dataArray;
            }
        },
        beforeDestroy() {
            this.Websocket.close();
            let session = this.$session;
            apiService.getProjects(session.get("plusplannerToken"))
                .then(response => {
                    this.$parent.$parent.projectData = response.data;
                })
                .catch(error => window.console.log("There was an error: " + error.response));
        },
    }
</script>

<style scoped>
    .component-content {
        position: absolute;
        right: 0;
        top: 0;
        height: 100vh;
        width: calc(100% - 330px);
        background-color: #36393E;
        overflow-x: scroll;
        white-space: nowrap;
    }

    .board-content {
        margin-left: 1%;
        margin-right: 1%;
    }

    .text-header {
        padding: 1%;
        border-bottom: #1E2124 1px solid;
    }
</style>