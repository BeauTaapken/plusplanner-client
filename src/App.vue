<template>
  <v-app>
    <ProjectList v-if="isLoaded"></ProjectList>
    <router-view :key="this.$route.fullPath"></router-view>
    <router-view :key="this.$route.params.contentName" name="content" />
    <router-view :key="this.$route.params.contentName" name="chat" />
  </v-app>
</template>

<script>
import ProjectList from "./views/ProjectList/ProjectList";
import json from "./components/Projectfiles";
import apiService from "./services/APIService";

export default {
  components: { ProjectList },
  data() {
    return {
      projectData: json,
      isLoaded: false
    };
  },
  created() {
    apiService.getProjects()
    // eslint-disable-next-line no-console
            .then(response => {
              this.projectData = response.data
              this.isLoaded = true;
            })
            // eslint-disable-next-line no-console
                    .catch(error => console.log("There was an error: " + error.response));
  }
};
</script>

<style></style>
