<template>
  <portal to="addUserOverlayDest">
      <v-overlay 
      :value="overlay"
      :absolute="absolute"
      :opacity="opacity"
      :z-index="zIndex"
      class="custom-overlay">
      <v-card class="addUser">
        <v-form>
          <v-container>
            <v-card-title class="justify-center">Add a new user</v-card-title>

            <v-autocomplete
                v-model="model"
                :loading="loading"
                :items="filteredUsers"
                item-text="username"
                item-value="userid"
                dense
                chips
                outlined
                small-chips
                deletable-chips
                label="Search users"
                multiple
            ></v-autocomplete>

            <v-row>
              <v-col cols="6">
                <v-btn width="100%" color="#3b3b3b" @click="cancel">Cancel</v-btn>
              </v-col>

              <v-col cols="6">
                <v-btn width="100%" color="#4f4f4f" @click="save">Add</v-btn>
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
import { mapState, mapGetters } from 'vuex'

export default {
  name: "AddUser",
  data() {
    return {
      overlay: false,
      absolute: true,
      opacity: 0.46,
      zIndex: 999,
      model: null
    };
  },
  created() {
    let session = this.$session;
    this.$store.dispatch("user/fetchAllUsers", session.get("plusplannerToken"))
  },
  computed: {
      ...mapGetters("project", ["getProjectIdByName"]),
      ...mapState("user", ["users", "loading"]),
      filteredUsers() {
        let token = this.$session.get("plusplannerToken");
        let parts = token.split('.');
        let payload = JSON.parse(atob(parts[1]));
        return this.users.filter(e => e.userid !== payload.uid);
      }
  },
  components: {
    Portal
  },
  methods: {
    save: function() {
        this.model.forEach(user => {
            const uuidv1 = require('uuid/v1');
            const component = {
                element: {
                    roleid: uuidv1(),
                    projectid: this.getProjectIdByName(this.$route.params.projectName),
                    userid: user,
                    role: "GUEST"
                },
                projectid: this.getProjectIdByName(this.$route.params.projectName),
                type: "role",
                action: "create"
            };
            this.$root.websocket.sendJson(component);
        });
      this.overlay = !this.overlay;
    },
    cancel: function() {
        this.model = null
        this.overlay = !this.overlay;
    }
  },
};
</script>

<style scoped>
.addUser {
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