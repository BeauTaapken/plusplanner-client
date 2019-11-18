<template>
  <v-app>
    <ProjectList></ProjectList>
    <router-view :key="this.$route.fullPath"></router-view>
    <router-view :key="this.$route.params.contentName" name="content" />
    <router-view :key="this.$route.params.contentName" name="chat" />
  </v-app>
</template>

<script>
import ProjectList from "./views/ProjectList/ProjectList";
import json from "./components/Projectfiles";
export default {
  components: { ProjectList },
  data() {
    return {
      projectData: json
    };
  }
};
</script>

<style></style>
