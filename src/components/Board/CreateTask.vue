<template>
  <div>
    <v-card @click="addTask" color="grey">
      <v-layout justify-center="true" class="v-card-item">
        <v-card-actions>
          <v-card-title>{{ name }}</v-card-title>
        </v-card-actions>
      </v-layout>
    </v-card>

    <v-overlay :value="overlay">
      <v-card class="createTask">
        <v-form>
          <v-container>
            <v-card-title class="justify-center">New task</v-card-title>
            <v-text-field
              id="taskname"
              label="Task name"
              filled
              shaped
            ></v-text-field>

            <v-text-field
              id="taskdescription"
              label="Description"
              filled
              shaped
            ></v-text-field>
            <v-menu>
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="date"
                  label="End Date"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu2 = false"
                width="426"
                color="#424242"
                event-color="#424242"
              ></v-date-picker>
            </v-menu>

            <v-row>
              <v-col cols="6">
                <v-btn width="100%" color="#3b3b3b" @click="cancel">
                  Cancel
                </v-btn>
              </v-col>

              <v-col cols="6">
                <v-btn width="100%" color="#4f4f4f" @click="save">
                  Add
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: "CreateTask",
  props: {
    name: String,
    tableName: String
  },
  data() {
    return {
      overlay: false,
      date: new Date().toISOString().substr(0, 10),
      menu2: false
    };
  },
  methods: {
    addTask: function() {
      this.overlay = !this.overlay;
    },
    cancel: function() {
      this.overlay = !this.overlay;
    },
    save: function() {
      let name = document.getElementById("taskname").value;
      let description = document.getElementById("taskdescription").value;
      let partid = this.$parent.$parent.$parent.partId;
      let json = `{ "subpartid": null, "subpartname": "${name}", "description": "${description}", "state": "${this.tableName}", "enddate": "${this.date}", "partid": "${partid}" }`;
      // To Do
      // This will need fixing when the websocket gateway is up
      // When its up, create something with the apiService. DO NOT push it to itemArray but let the websocket send a message with the fully created subpart (WITH ID) to the client and handle it there.
      this.$parent.$parent.itemArray.push(JSON.parse(json));
      this.overlay = !this.overlay;
    }
  }
};
</script>

<style scoped>
.createTask {
  padding: 5%;
  width: 500px;
  height: auto;
  overflow: hidden;
}

>>> .v-text-field input {
  text-align: center;
}

.v-card-item {
  margin-top: 2%;

  transition: background-color 1s ease;
}

.v-card-item:hover {
  cursor: pointer;
  background-color: #5e5e5e;
}
</style>
