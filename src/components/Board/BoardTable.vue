<template>
  <v-col cols="4" class="board-column">
    <v-card color="#2E3136" class="table">
      <v-layout justify-center="true">
        <v-card-actions>
          <v-card-title>{{ tableName }}</v-card-title>
        </v-card-actions>
      </v-layout>
      <draggable :list="item in items" group="items">
        <BoardTask
          v-for="item in items"
          v-bind:key="item.subpartid"
          v-bind:name="item.subpartname"
          v-bind:end-date="item.endDate"
        />
      </draggable>
      <BoardTask v-bind:key="'Plus'" v-bind:name="'+'" />
    </v-card>
  </v-col>
</template>

<script>
import BoardTask from "./BoardTask";
import draggable from "vuedraggable";

export default {
  name: "BoardTable",
  components: {
    BoardTask,
    draggable
  },
  props: {
    tableName: String,
    items: Array
  }
};
</script>

<style scoped>
>>>.v-card__title {
  color: white;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.board-container {
  padding: 1px;
}

.board-column {
  text-align: center;
}
.table {
  padding: 20px;
  text-align: center;
}
</style>