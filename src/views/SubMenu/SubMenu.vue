<template>
    <div class="project-nav">
        <div class="project-header" role="button">
            <h1>{{ this.$route.params.projectName }}</h1>
            <i class="fas fa-angle-down"></i>
        </div>
        <SubMenuHeader
                v-for="data in this.usedData.components"
                v-bind:key="data.componentname"
                v-bind:component-name="data.componentname"
                v-bind:component-item="data.componentitems"
                v-bind:component-type="'content'"
        />
        <SubMenuHeader
                v-for="data in this.usedData.chat"
                v-bind:key="data.componentname"
                v-bind:component-name="'Chat'"
                v-bind:component-item="data.textchannels"
                v-bind:component-type="'chat'"
        />


    </div>
</template>

<script>
    import SubMenuHeader from "./SubMenuHeader";
    export default {
        name: "SubMenu",
        components: { SubMenuHeader},
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
                this.usedData = res[0];
            }
        }
    }
</script>

<style scoped>
    .project-nav {
        background-color: #2E3136;
        height: 100vh;
        width: 13%;
        float: left;
        margin-left: -1px;
    }
    .project-header {
        transition: background-color 1s ease;
        overflow: hidden;
        height: auto;
        padding: 5%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .project-header h1 {
        font-size: 35px;
        color: white;
        width: 75%;
        float: left;
        margin-top: 5%;
    }
    .project-header i {
        color: white;
        width: 20%;
        font-size: 35px;
        float: left;
        margin-top: 5%;
        margin-left: 5%;
        text-align: center;
    }
    .project-header:hover {
        background-color: #282b2f;
        cursor: pointer;
    }
</style>