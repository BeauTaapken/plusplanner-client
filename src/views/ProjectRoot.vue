<template>
    <div>
        <div v-if="project.loading">
            <v-layout justify-center id="loading">
                <div>
                    <center><i id="loading-icon" :style="{color: iconColor}" :class="icon"></i></center>
                    <p id="loading-text">{{text}}</p>
                </div>
            </v-layout>
        </div>
        <div v-if="!project.loading">
            <ProjectList style="position: relative; float: left"></ProjectList>
            <router-view  :key="this.$route.fullPath"></router-view>

            <portal-target name="createProjectOverlayDest"/>
            <portal-target name="createComponentOverlayDest"/>
        </div>
    </div>
</template>

<script>
    import { PortalTarget } from "portal-vue";
    import ProjectList from "./ProjectList/ProjectList";
    import { mapState, mapActions } from "vuex";
    import WebSocketHandler from "../services/WebSocketHandler";

    export default {
        name: "ProjectRoot",
        components: {
            ProjectList,
            PortalTarget
        },
        data() {
            return {
                icon: "fas fa-spinner fa-spin",
                text: "Please wait while we are loading in your projects...",
                iconColor: "white"
            };
        },
        computed: mapState({
            project: state => state.project
        }),
        created() {
            let session = this.$session;
            let component = this;
            // eslint-disable-next-line no-unused-vars

            this.fetchProjects(session.get("plusplannerToken"))
                .then(() => {
                    component.$root.websocket = new WebSocketHandler.newWebSocket();
                    component.$root.websocket.openConnection(session.get("plusplannerToken"));
            }).catch(error => {
                window.console.log(error);
                component.icon = "fas fa-exclamation-triangle";
                component.iconColor = "#8b0000";
                component.text = "An error occured. Please try again. If this problem keeps occuring, contact us."
            })
        },
        methods: mapActions('project', ['fetchProjects'])
    };
</script>

<style>
    #loading {
        margin-top: 22%;
        align-content: center;
    }

    #loading-icon {
        font-size: 75px;
        -moz-transition: all 0.5s linear;
        -webkit-transition: all 0.5s linear;
        transition: all 0.5s linear;
    }

    #loading-text {
        text-align: center;
        font-size: 20px;
        margin-top: 5%;
    }
</style>
