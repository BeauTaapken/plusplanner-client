<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon>
    </v-app-bar>

    <ProjectList :primaryDrawer="primaryDrawer"></ProjectList>
    <v-content>
      <v-container fluid id="v_container" class="d-flex">
        <router-view :key="this.$route.fullPath"></router-view>
        <router-view :key="this.$route.params.contentName" name="content" />
        <router-view :key="this.$route.params.contentName" name="chat" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ProjectList from "./views/ProjectList/ProjectList";
import json from "./components/Projectfiles";
export default {
  components: { ProjectList },
  data() {
    return {
      projectData: json,
      primaryDrawer: {
        model: null,
        type: "default (no property)",
        clipped: false,
        floating: true,
        mini: true,
        permanent: true
      }
    };
  },

  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style>
#v_container {
  padding: 0;
}

.v-content__wrap {
  justify-content: start !important;
}
</style>
