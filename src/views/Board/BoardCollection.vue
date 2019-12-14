<template>
    <div v-if="this.$parent.$parent.isLoaded">
        <div class="component-content">
            <div class="text-header" v-text="this.$route.params.contentName"></div>
            <v-row class="board-content">
                <BoardTable
                        v-for="table in tableNames"
                        v-bind:key="table"
                        v-bind:table-name="table"
                        v-bind:items="findTableData(table)"
                />
            </v-row>
        </div>
        <div ref="editTask">

        </div>
    </div>
</template>

<script>
    import BoardTable from "../../components/Board/BoardTable.vue";
    import apiService from "../../services/ProjectService";
    import webSocketService from "../../services/WebsocketService";

    export default {
        name: "BoardCollection",
        components: {BoardTable},
        data: function () {
            return {
                usedData: null,
                tableNames: ['Backlog', 'This Sprint', 'Working on', 'Review', 'Done', 'On Hold'],
                partId: null,
                Websocket: null,
                projectid: null
            }
        },
        created() {
            this.load();
            let url = webSocketService.getWSAddress();
            url = url.replace("http", "ws");
            this.Websocket = new WebSocket(url + "/messages");

            let comp = this;

            comp.Websocket.onopen = function() {
                comp.Websocket.send(comp.projectid + "\n" + comp.$session.get("plusplannerToken"))
            };

        },
        updated() {
            this.load();
        },
        methods: {
            load: function () {
                let json = this.$parent.$parent.projectData;
                let res = json.projects.filter(d => d.projectname === this.$route.params.projectName);
                this.projectid = res[0].projectid;
                let t = res[0]["components"].filter(d => d.componentname === this.$route.params.componentName);
                this.usedData = t[0]['parts'].filter(i => i.partname === this.$route.params.contentName);
                this.partId = this.usedData[0]['partid'];
            },
            findTableData: function (tablename) {
                let selectedPartData = this.usedData;
                let dataArray = [];
                for (let i = 0; i < selectedPartData[0]['subparts'].length; i++) {
                    if (selectedPartData[0]['subparts'][i]['state'] === tablename) {
                        dataArray.push(selectedPartData[0]['subparts'][i]);
                    }
                }
                return dataArray;
            }
        },
        beforeDestroy() {
            let session = this.$session;
            apiService.getProjects(session.get("plusplannerToken"))
                .then(response => {
                    this.$parent.$parent.projectData = response.data;
                })
                // eslint-disable-next-line no-console
                .catch(error => console.log("There was an error: " + error.response));
        },
    }
</script>

<style scoped>
    .component-content {
        float: left;
        height: 100vh;
        width: calc(83% + 2px);
        margin-left: calc(17% - 2px);
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