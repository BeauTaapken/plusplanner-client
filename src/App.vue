<template>
  <div id="app">
      <ProjectRoot></ProjectRoot>
  </div>
</template>

<style lang="scss">
  html, body
  {
    height: 100%;
    background: $brand-color;
    font-size: 16px;
    font-family: "Roboto";
  }
</style>

<script>
    import ProjectRoot from "./components/ui/ProjectRoot";
    export default {
        components: {ProjectRoot}
    }
</script>

<style>
    body {
        background-color: #36393E;
    }
</style>