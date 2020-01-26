import ProjectService from '@/services/ProjectService.js';
import Vue from 'vue';

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
        ADD_PART(state, payload) {
            state.projects.forEach((project, index) => {
                if(project.projectid === payload.projectid) {
                    var subparts = []
                    payload.part["subparts"] = subparts
                    project.parts.push(payload.part);
                    Vue.set(state.projects, index, project);
                }
            })
        },
        ADD_SUBPART(state, payload) {
            state.projects.forEach((project, index) => {
                if(project.projectid === payload.projectid) {
                    project.parts.forEach((part) => {
                        if(part.partid === payload.subpart.partid) {
                            part.subparts.push(payload.subpart)
                            Vue.set(state.projects, index, project)
                        }
                    })
                }
            })
        },
        UPDATE_SUBPART(state, payload) {
            state.projects.forEach((project, index) => {
                if(project.projectid === payload.projectid) {
                    project.parts.forEach((part) => {
                        if(part.partid === payload.subpart.partid) {
                            if(part.subparts.filter(subpart => subpart.subpartid === payload.subpart.subpartid).length > 0)
                            {
                                let indexOf = part.subparts.map(function(e) { return e.subpartid; }).indexOf(payload.subpart.subpartid);
                                part.subparts.splice(indexOf, 1);
                            }
                            part.subparts.filter(subpart => subpart.subpartid !== payload.subpart.subpartid)
                            part.subparts.push(payload.subpart)
                            Vue.set(state.projects, index, project)
                        }
                    })

                }
            })
        },
        CREATE_CHAT(state, payload) {
            state.projects.forEach((project, index) => {
                if(project.projectid === payload.projectid) {
                    payload.chat["channels"] = []
                    project.chats.push(payload.chat)
                    Vue.set(state.projects, index, project);
                }
            })
        },
        ADD_CHANNEL(state, payload) {
            state.projects.forEach((project, index) => {
                if(project.projectid === payload.projectid) {
                    project.chats.forEach((chat) => {
                        if(chat.chatid === payload.channel.chatid) {
                            payload.channel["messages"] = []
                            chat.channels.push(payload.channel)
                            Vue.set(state.projects, index, project)
                        }
                    })
                }
            })
        },

        ADD_MESSAGE(state, payload) {
            state.projects.forEach((project, index) => {
                if(project.projectid === payload.projectid) {
                    project.chats.forEach((chat) => {
                        if(chat.chatid === payload.message.chatid) {
                            chat.channels.forEach((channel) => {
                                if(channel.channelid === payload.message.channelid)
                                {
                                    delete payload.message.chatid;
                                    channel.messages.push(payload.message);
                                    Vue.set(state.projects, index, project)
                                }
                            });
                        }
                    })
                }
            })
        }
    },
    actions: {
        fetchProjects({commit}, session) {
            commit("SET_LOADING", true);
            return ProjectService.getProjects(session)
                .then(projects => {
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
        addPartToProject({ commit }, payload) {
            commit("ADD_PART", {
                "projectid": payload.projectid,
                "part": payload.element
            });
        },
        addSubpartToPart({ commit }, payload) {
            commit("ADD_SUBPART", {
                "projectid": payload.projectid,
                "subpart": payload.element
            });
        },
        createChat({ commit }, payload) {
            commit("CREATE_CHAT", {
                "projectid": payload.projectid,
                "chat": payload.element
            });
        },
        addChannelToChat({ commit }, payload) {
            commit("ADD_CHANNEL", {
                "projectid": payload.projectid,
                "channel": payload.element
            });
        },
        updateSubpart({ commit }, payload) {
            commit("UPDATE_SUBPART", {
                "projectid": payload.projectid,
                "subpart": payload.element
            });
        },
        addMessage({ commit }, payload) {
            commit("ADD_MESSAGE", {
                "projectid": payload.projectid,
                "message": payload.element
            });
        },
    },
    getters: {
        projects: state => {
            return state.projects;
        },
        getProjectByName: (state) => (name) => {
            return state.projects.find(project => project.projectname === name)
        },
        getProjectIdByName: (state) => (name) => {
            return state.projects.find(project => project.projectname === name).projectid
        }
    }
};