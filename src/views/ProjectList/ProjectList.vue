<template>
  <v-navigation-drawer
    v-model="primaryDrawer.model"
    :clipped="primaryDrawer.clipped"
    :floating="primaryDrawer.floating"
    :mini-variant="primaryDrawer.mini"
    :permanent="primaryDrawer.permanent"
    app
    id="vnav"
  >
    <ProjectListItem
      v-for="data in this.$parent.$parent.projectData.projects"
      v-bind:key="data.projectid"
      v-bind:project-name="data.projectname"
    />
  </v-navigation-drawer>
  <!-- <v-navigation-drawer fixed height="100vh" width="4%" color="#1E2124" class="project-list">

  </v-navigation-drawer>-->
</template>

<script>
import ProjectListItem from "./ProjectListItem";
export default {
  name: "ProjectList",
  components: { ProjectListItem },

  props: {
    primaryDrawer: Array,
    drawer: null,
    drawerRight: null,
    right: Boolean,
    left: Boolean
  }
};
</script>

<style>
#vnav {
  background-color: #23272a;
}
</style>