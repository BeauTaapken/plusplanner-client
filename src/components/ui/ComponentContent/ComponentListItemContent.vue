<template>
    <div class="component-content">
        <div class="content" v-text="this.usedData"></div>
    </div>
</template>

<script>
    export default {
        name: "ComponentListItemContent",
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
                this.usedData = res[0];
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
.content {
    text-align: center;
    margin-top: 25%;
    font-size: 50px;
}
</style>