<template>
  <div v-if="isLoaded">
    <ProjectList></ProjectList>
    <router-view :key="this.$route.fullPath"></router-view>
    <portal-target name="destination">
    </portal-target>
  </div>
</template>

<script>
  import apiService from "../services/APIService";
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
      apiService
              .getProjects()
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
