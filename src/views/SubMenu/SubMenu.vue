<template>
  <div fixed class="project-nav">
    <v-list-item>
      <v-list-item-content>
        <div class="project-header">
          {{ projectName }}
        </div>
      </v-list-item-content>
      <v-list-item-action>
        <v-menu offset-y :dark="true" :min-width="220" bottom left>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon color="grey lighten-1">mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="addChannel">
              <v-list-item-title>Add component</v-list-item-title>
              <v-list-item-action>
                <v-icon color="grey lighten-1">mdi-note-plus</v-icon>
              </v-list-item-action>
            </v-list-item>
        </v-list>
        </v-menu>
      </v-list-item-action>

    </v-list-item>
  
    <SubMenuHeader
      v-for="data in this.usedData.components"
      v-bind:key="data.componentname"
      v-bind:component-name="data.componentname"
      v-bind:component-item="data.parts"
    />
    <SubMenuChatHeader
      v-for="data in this.usedData.chats"
      v-bind:key="data.chatid"
      v-bind:component-name="data.name"
      v-bind:component-item="data.channels"
    />
  </div>
</template>

<script>
import SubMenuHeader from "./SubMenuHeader";
import SubMenuChatHeader from "./SubMenuChatHeader";

export default {
  name: "SubMenu",
  components: { SubMenuChatHeader, SubMenuHeader },
  data: function() {
    return {
      usedData: null,
      projectName: this.$route.params.projectName
    };
  },
  created() {
    this.load();
  },
  updated() {
    this.load();
  },
  methods: {
    load: function() {
      let json = this.$parent.$parent.$parent.projectData;
      let res = json.projects.filter(
        d => d.projectname === this.$route.params.projectName
      );
      this.usedData = res[0];
    },
    addChannel: function() {

    }
  }
};
</script>

<style scoped>
>>>.v-list-group .v-list-item__title {
  color: white;
  height: auto;
}

>>>.v-list-group .v-icon {
  color: white;
}

>>>.theme--light.v-list {
  background-color: #2e3136;
}

>>>.v-list-item__content {
  color: white;
  padding: 0px;
}

.project-nav {
  background-color: #2e3136;
  height: 100vh !important;
  float: left !important;
  width: 250px;
}
.project-header {
  font-size: 23px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
