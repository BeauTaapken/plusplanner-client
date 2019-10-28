<template>
  <div id="app">
      <ProjectList></ProjectList>
      <router-view></router-view>
      <router-view :key="this.$route.fullPath" name="content"/>
  </div>
</template>

<style>
#app {
}
</style>

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