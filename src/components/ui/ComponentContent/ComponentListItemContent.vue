<template>
    <div class="component-content">
        <div class="text-header" v-text="this.$route.params.contentName"></div>
        <PlanningCollection
            v-for="item in usedData"
            v-bind:key="item.tablename"
            v-bind:items="item.planning"
            />
    </div>
</template>

<script>
    import PlanningCollection from "./PlanningCollection";
    export default {
        name: "ComponentListItemContent",
        components: {PlanningCollection},
        beforeRouteLeave(to, from, next) {
            this.$destroy();
            next();
        },
        data: function () {
            return {
                usedData: null
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
                let json = this.$parent.projectData;

                let res = json.projects.filter(d => d.projectname === this.$route.params.projectName);
                let t = res[0]["components"].filter(d => d.componentname === this.$route.params.componentName);
                this.usedData = t[0]['componentitems'].filter(i => i.itemname === this.$route.params.contentName);
            }
        }
    }
</script>

<style scoped>
    .component-content {
        float: left;
        height: 100vh;
        width: calc(83% + 2px);
        margin-left: -1px;
        background-color: #36393E;
    }

    .text-header {
        padding: 1%;
        border-bottom: #1E2124 1px solid;
    }
</style>