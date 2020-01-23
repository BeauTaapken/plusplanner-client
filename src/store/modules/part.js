import ContainerService from '@/services/ContainerService.js';

export default {
    namespaced: true,
    state: {
        created: null,
        error: null
    },
    mutations: {
        SET_CREATED(state, payload) {
            state.created = payload
        },
        SET_ERROR(state, payload) {
            state.error = payload
        },
    },
    actions: {
        createPart({ commit }, part) {
            ContainerService.createPart(part)
                .then(() => {
                    commit("SET_CREATED", true);
                    window.console.log("Part succesfully created");
                })
                .catch(error => {
                    commit("SET_ERROR", error);
                    window.console.log("Error while creating part: " + error);
                })
        }
    },
    getters: {}
  };