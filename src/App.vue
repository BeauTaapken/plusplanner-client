<template>
  <div id="app">
      <ProjectList></ProjectList>
      <router-view></router-view>
      <router-view :key="this.$route.fullPath" name="content"/>
  </div>
</template>

<style lang="scss">
  html, body
  {
    height: 100%;
    font-size: 16px;
    font-family: "Roboto";
    background-color: #36393E;
  }
</style>

<script>
    import ProjectList from "./components/ui/ProjectList/ProjectList";
    import json from "./components/ui/Projectfiles";
    export default {
        components: {ProjectList},
        data(){
            return{
                projectData: json,
            }
        }
    }
</script>