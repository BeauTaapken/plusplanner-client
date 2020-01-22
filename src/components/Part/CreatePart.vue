<template>
  <portal to="createComponentOverlayDest">
      <v-overlay 
      :value="overlay"
      :absolute="absolute"
      :opacity="opacity"
      :z-index="zIndex"
      class="custom-overlay">
      <v-card class="createComponent">
        <v-form>
          <v-container>
            <v-card-title class="justify-center">New part</v-card-title>
            <v-text-field id="part-name" label="Part name" filled shaped></v-text-field>

            <v-menu>
              <template v-slot:activator="{ on }">
                <v-text-field v-model="date" label="End Date" readonly v-on="on"></v-text-field>
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
                <v-btn width="100%" color="#3b3b3b" @click="cancel">Cancel</v-btn>
              </v-col>

              <v-col cols="6">
                <v-btn width="100%" color="#4f4f4f" @click="save">Create</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-overlay>
  </portal>
</template>

<script>
import { Portal } from 'portal-vue'

export default {
  name: "CreatePart",
  data() {
    return {
      overlay: false,
      absolute: true,
      opacity: 0.46,
      zIndex: 999,
      date: new Date().toISOString().substr(0, 10),
    };
  },
  components: {
    Portal
  },
  methods: {
    save: function() {
      let part_name = document.getElementById("part-name").value;
      let part_enddate = this.date;
      let comp = this;

      const uuidv1 = require('uuid/v1');
      const component = {
        partid: uuidv1(),
        projectid: comp.$parent.$parent.usedData.projectid,
        partname: part_name,
        enddate: part_enddate
      };
      window.console.log(component);
      this.overlay = !this.overlay;
    },
    cancel: function() {
      this.overlay = !this.overlay;
    }
  },
};
</script>

<style scoped>
.createComponent {
  padding: 5%;
  width: 500px;
  height: auto;
  overflow: hidden;
}
>>>.v-text-field input {
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