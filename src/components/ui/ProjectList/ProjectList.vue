<template>
    <div class="container">
        <div class="project-list">
            <ul>
                <ProjectListItem
                v-for="data in this.$parent.projectData"
                v-bind:key="data.projectname"
                v-bind:project-name="data.projectname"
                />

            </ul>
        </div>
    </div>
</template>

<script>
    import ProjectListItem from "./ProjectListItem";
    export default {
        name: "ProjectList",
        components: {ProjectListItem},
    }
</script>

<style scoped>

    .project-list {
        float: left;
        width: 4%;
        height: 100vh;
        background-color: #1E2124;
        padding: 0;
    }

    .project-list ul {
        padding: 0;
    }
</style>