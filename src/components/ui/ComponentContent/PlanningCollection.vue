<template>
    <div>
        <PlanningItem
            v-for="table in tableNames"
            v-bind:key="table"
            v-bind:table-name="table"
            v-bind:items="findTableData(table)"
        />
    </div>
</template>

<script>

    import PlanningItem from "./PlanningItem";
    export default {
        name: "PlanningCollection",
        components: {PlanningItem},
        data() {
            return {
                tableNames: ['Backlog', 'This Sprint', 'Working on', 'Review', 'Done', 'On Hold'],
            }
        },
        methods: {
            findTableData: function(tablename) {
                let allData = this.$parent.usedData;
                let dataArray = [];
                for(let i = 0; i < allData[0]['planning'].length; i++)
                {
                    if(allData[0]['planning'][i]['state'] === tablename)
                    {
                        dataArray.push(allData[0]['planning'][i]);
                    }
                }
                return dataArray;
            }
        }

    }
</script>

<style scoped>

</style>