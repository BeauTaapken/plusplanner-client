<template>
  <div>
    <div class="component-content">
      <div class="text-header" v-text="this.$route.params.contentName"></div>
      <v-row class="board-content">
        <BoardTable
          v-for="table in tableNames"
          v-bind:key="table"
          v-bind:table-name="table"
          v-bind:items="findTableData(table)"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import BoardTable from "../../components/Board/BoardTable.vue";
export default {
  name: "BoardCollection",
  components: { BoardTable },
  beforeRouteLeave(to, from, next) {
    next();
  },
  data: function() {
    return {
      usedData: null,
      tableNames: [
        "Backlog",
        "This Sprint",
        "Working on",
        "Review",
        "Done",
        "On Hold"
      ],
      items: Array
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
      let t = res[0]["components"].filter(
        d => d.componentname === this.$route.params.componentName
      );
      this.usedData = t[0]["componentitems"].filter(
        i => i.itemname === this.$route.params.contentName
      );
    },
    findTableData: function(tablename) {
      let selectedPartData = this.usedData;
      let dataArray = [];
      for (let i = 0; i < selectedPartData[0]["planning"].length; i++) {
        if (selectedPartData[0]["planning"][i]["state"] === tablename) {
          dataArray.push(selectedPartData[0]["planning"][i]);
        }
      }
      return dataArray;
    }
  }
};
</script>

<style scoped>
.component-content {
  height: 100vh;
  background-color: #36393e;
  /* overflow-x: scroll;
  white-space: nowrap; */
}

.board-content {
  padding: 20px;
}

.text-header {
  padding: 1%;
  border-bottom: #1e2124 1px solid;
}
</style>