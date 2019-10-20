<template>
    <div class="component-content">
        <div class="top-header" v-text="this.$route.params.contentName"></div>
        <PlaningItem
            v-for="item in usedData"
            v-bind:key="item.itemname"
            v-bind:items="item.planning"
            />
    </div>
</template>

<script>
    import PlaningItem from "./PlaningItem";
    export default {
        name: "ComponentListItemContent",
        components: {PlaningItem},
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
                let json = this.$parent.projectData ;

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

    .top-header {
        border-bottom: #1E2124 1px solid;
        padding: 1%;
    }
</style>