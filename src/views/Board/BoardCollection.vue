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
    import apiService from "../../services/APIService";

    export default {
        name: "BoardCollection",
        components: {BoardTable},
        data: function () {
            return {
                usedData: null,
                tableNames: ['Backlog', 'This Sprint', 'Working on', 'Review', 'Done', 'On Hold'],
                partId: null
            }
        },
        created() {
            this.load();
        },
        updated() {
            this.load();
        },
        methods: {
            load: function () {
                let json = this.$parent.$parent.projectData;
                let res = json.projects.filter(d => d.projectname === this.$route.params.projectName);
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
            apiService.getProjects()
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
  height: 100vh;
  background-color: #36393e;
  /* overflow-x: scroll;
  white-space: nowrap; */
}

.board-content {
  padding: 20px;
}

.text-header {
  padding: 1%;
  border-bottom: #1e2124 1px solid;
}
</style>