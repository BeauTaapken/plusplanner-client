<template>
    <div v-if="!this.project.loading">
        <div class="component-content">
            <div class="text-header"><i class="fab fa-trello mr-2"></i> {{this.$route.params.partName}}</div>
            <v-row class="board-content">
                <BoardTable ref="child"
                            v-for="table in tableNames"
                            v-bind:key="table.tableName"
                            v-bind:table-name="table.tableName"
                            v-bind:enum-table-name="table.enumName"
                            v-bind:items="findTableData(table.enumName)"
                            v-bind:project-id="projectid"
                />
            </v-row>
        </div>
    </div>
</template>

<script>
    import BoardTable from "../../components/Board/BoardTable.vue";
    import { mapState } from "vuex"

    export default {
        name: "BoardCollection",
        components: {BoardTable},
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
                projectid: null
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
                let json = this.project.projects;
                let res = json.filter(d => d.projectname === this.$route.params.projectName);
                this.projectid = res[0].projectid;
                let t = res[0]["parts"].filter(d => d.partname === this.$route.params.partName);
                this.usedData = t[0];
                this.partId = this.usedData.partid;
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
        computed: mapState({
            project: state => state.project
        }),
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