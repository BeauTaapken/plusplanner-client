<template>
  <div class="component-content">
    <div class="text-header" v-text="this.contentName"></div>
  </div>
</template>

<script>
export default {
  name: "ChatCollection",
  data: function() {
    return {
      contentName: this.$route.params.contentName
    };
  }
};
</script>

<style scoped>
.component-content {
  float: left;
  height: 100vh;
  width: calc(83% + 2px);
  background-color: #36393e;
}

.text-header {
  padding: 1%;
  border-bottom: #1e2124 1px solid;
}
</style>