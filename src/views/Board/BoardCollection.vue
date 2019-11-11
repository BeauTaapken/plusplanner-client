<template>
    <div class="component-content">
        <div class="text-header" v-text="this.$route.params.contentName"></div>
        <BoardTable
            v-for="table in tableNames"
            v-bind:key="table"
            v-bind:table-name="table"
            v-bind:items="findTableData(table)"
            />
    </div>
</template>

<script>
    import BoardTable from "../../components/Board/BoardTable.vue"
    export default {
        name: "BoardCollection",
        components: { BoardTable },
        beforeRouteLeave(to, from, next) {
            next();
        },
        data: function () {
            return {
                usedData: null,
                tableNames: ['Backlog', 'This Sprint', 'Working on', 'Review', 'Done', 'On Hold'],
                }
        },
        created() {
            this.load();
        },
        updated() {
            this.load();
        },
        methods: {
            load: function() {
                let json = this.$parent.$parent.projectData;

                let res = json.projects.filter(d => d.projectname === this.$route.params.projectName);
                let t = res[0]["components"].filter(d => d.componentname === this.$route.params.componentName);
                this.usedData = t[0]['componentitems'].filter(i => i.itemname === this.$route.params.contentName);
            },
            findTableData: function(tablename) {
                let selectedPartData = this.usedData;
                let dataArray = [];
                for(let i = 0; i < selectedPartData[0]['planning'].length; i++)
                {
                    if(selectedPartData[0]['planning'][i]['state'] === tablename)
                    {
                        dataArray.push(selectedPartData[0]['planning'][i]);
                    }
                }
                return dataArray;
            }
        }
    }
</script>

<style scoped>
    .component-content {
        float: left;
        height: 100vh;
        width: calc(83% + 2px);
        margin-left: calc(17% - 2px);
        background-color: #36393E;
    }

    .text-header {
        padding: 1%;
        border-bottom: #1E2124 1px solid;
    }
</style>