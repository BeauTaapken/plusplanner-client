import RoleManagementService from '@/services/RoleManagementService.js';

export default {
    namespaced: true,
    state: {
        loading: null,
        error: null,
        users: []
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
    },
    actions: {
        fetchAllUsers({ commit }, session) {
            commit("SET_LOADING", true);
            RoleManagementService.fetchUsers(session)
                .then(users => {
                    commit("SET_USERS", users.data)
                    commit("SET_LOADING", false);
                })
                .catch(error => {
                    commit("SET_ERROR", "Something went wrong! Please try again later.");
                    window.console.log(error)
                    commit("SET_LOADING", false);
                })
        }
    },
    getters: {
        names: (state) => {
            return state.users.username
        }
    }
  };