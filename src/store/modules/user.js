import RoleManagementService from '@/services/RoleManagementService.js';

export default {
    namespaced: true,
    state: {
        loading: null,
        error: null,
        users: [],
        picture: null
    },
    mutations: {
        SET_USERS(state, payload) {
            state.users = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload
        },
        SET_LOADING(state, payload) {
            state.loading = payload;
        },
        SET_IMAGE(state, payload) {
            state.picture = payload;
        },
    },
    actions: {
        fetchAllUsers({ commit }, session) {
            commit("SET_LOADING", true);
            RoleManagementService.fetchUsers(session)
                .then(users => {
                    window.console.log(users)
                    commit("SET_USERS", users.data)
                    commit("SET_LOADING", false);
                })
                .catch(error => {
                    commit("SET_ERROR", "Something went wrong! Please try again later.");
                    window.console.log(error)
                    commit("SET_LOADING", false);
                })
        },
        setImage({ commit }, picture) {
            commit("SET_IMAGE", picture);
        }
    },
    getters: {}
  };