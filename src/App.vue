<template>
  <v-app>
    <ProjectList></ProjectList>
    <router-view></router-view>
    <router-view :key="this.$route.fullPath" name="content"/>
    <router-view :key="this.$route.fullPath" name="chat"/>
  </v-app>
</template>

<script>

  import ProjectList from "./views/ProjectList/ProjectList";
  import json from "./components/Projectfiles";
  export default {
    components: {ProjectList},
    data(){
      return{
        projectData: json,
      }
    }
  }
</script>

<style>
  body {
    background-color: #36393E;
  }
</style>
