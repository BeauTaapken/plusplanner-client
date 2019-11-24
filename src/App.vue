<template>
    <v-app v-if="isLoaded">
        <ProjectList></ProjectList>
        <router-view :key="this.$route.fullPath"></router-view>
        <router-view :key="this.$route.params.contentName" name="content"/>
        <router-view :key="this.$route.params.contentName" name="chat"/>
    </v-app>
</template>

<script>
    import ProjectList from "./views/ProjectList/ProjectList";
    import apiService from "./services/APIService";

    export default {
        components: {ProjectList},
        data() {
            return {
                projectData: null,
                isLoaded: false
            };
        },
        created() {
            apiService.getProjects()
                .then(response => {
                    this.projectData = response.data;
                    this.isLoaded = true;
                })
                // eslint-disable-next-line no-console
                .catch(error => console.log("There was an error: " + error.response));
        }
    };
</script>

<style></style>
