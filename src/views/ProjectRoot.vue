<template>
  <div v-if="isLoaded">
    <ProjectList></ProjectList>
    <router-view :key="this.$route.fullPath"></router-view>

    <portal-target name="createProjectOverlayDest" />
    <portal-target name="createComponentOverlayDest" />
    <!-- <portal-target name="destination">
    </portal-target> -->
  </div>
</template>

<script>
  import apiService from "../services/ProjectService";
  import { PortalTarget } from 'portal-vue'
  import ProjectList from "./ProjectList/ProjectList";

  export default {
    name: "ProjectRoot",
    components: {
      ProjectList,
      PortalTarget
    },
    data() {
      return {
        projectData: null,
        isLoaded: false
      };
    },
    created() {
      let session = this.$session;
      apiService
              .getProjects(session.get("plusplannerToken"))
              .then(response => {
                this.projectData = response.data;
                this.isLoaded = true;
              })
              .catch(error => window.console.log("There was an error: " + error.response));
    }
  };
</script>

<style></style>
