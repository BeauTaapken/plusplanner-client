import ProjectService from '@/services/ProjectService.js';

export default {
    namespaced: true,
    state: {
        projects: [],
        error: null,
        loading: null
    },
    mutations: {
        SET_PROJECTS(state, payload) {
            state.projects = payload
        },
        SET_ERROR(state, payload) {
            state.error = payload
        },
        SET_LOADING(state, payload) {
            state.loading = payload
        }
    },
    actions: {
        fetchProjects({ commit }, session) {
            commit("SET_LOADING", true);
            return ProjectService.getProjects(session)
                .then(projects => {
                    window.console.log(projects)
                    commit("SET_PROJECTS", projects.data);
                    commit("SET_LOADING", false);
                })
                .catch(error => {
                    commit("SET_ERROR", "Something went wrong! Please try again later.");
                    window.console.log("There was an error: " + error);
                });
        }
    },
    getters: {
        projects: state => {
            return state.projects;
        }
    }
};