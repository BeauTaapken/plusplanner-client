<template>
    <v-navigation-drawer fixed height="100vh" width="4%" color="#1E2124" class="project-list">
            <ul>
                <ProjectListItem
                v-for="data in this.$parent.$parent.projectData.projects"
                v-bind:key="data.projectid"
                v-bind:project-name="data.projectname"
                />
            </ul>
    </v-navigation-drawer>
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
        float: left !important;
        padding: 0;
    }

    .project-list ul {
        padding: 0;
    }
</style>