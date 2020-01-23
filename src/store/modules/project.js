import ProjectService from '@/services/ProjectService.js';

export default {
    namespaced: true,
    state: {
        projects: [],
        error: null,
        loading: null,
        created: null,
        messages: []
    },
    mutations: {
        SET_PROJECTS(state, payload) {
            state.projects = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload;
        },
        SET_LOADING(state, payload) {
            state.loading = payload;
        },
        SET_CREATED(state, payload) {
            state.created = payload;
        },
        ADD_MESSAGE(state, payload) {
            state.messages = payload;
        }
    },
    actions: {
        fetchProjects({commit}, session) {
            commit("SET_LOADING", true);
            return ProjectService.getProjects(session)
                .then(projects => {
                    window.console.log(projects);
                    commit("SET_PROJECTS", projects.data);
                    commit("SET_LOADING", false);
                })
                .catch(error => {
                    commit("SET_ERROR", "Something went wrong! Please try again later.");
                    throw error;
            });
        },
        createProject({commit}, {token, project}) {
            ProjectService.createProject(token, project)
                .then(() => {
                    commit("SET_CREATED", true);
                })
                .catch(error => {
                    window.console.log(error);
                    commit("SET_CREATED", false);
                    commit("SET_ERROR", error);
                })
        },
        websocketMessageHandler({ commit }, message) {
            window.console.log(message);
            commit("ADD_MESSAGE", message);
        }
    },
    getters: {
        projects: state => {
            return state.projects;
        }
    }
};