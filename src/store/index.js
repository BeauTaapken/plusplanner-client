import Vue from 'vue'
import Vuex from 'vuex'
import project from "@/store/modules/project.js";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { project }
})
