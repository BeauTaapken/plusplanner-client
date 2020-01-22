<template>
    <div>
        <div v-if="!isLoaded">
            <v-layout justify-center id="loading">
                <div>
                    <center><i id="loading-icon" :style="{color: iconColor}" :class="icon"></i></center>
                    <p id="loading-text">{{text}}</p>
                </div>
            </v-layout>
        </div>
        <div v-if="isLoaded">
            <ProjectList style="position: relative; float: left"></ProjectList>
            <router-view  :key="this.$route.fullPath"></router-view>

            <portal-target name="createProjectOverlayDest"/>
            <portal-target name="createComponentOverlayDest"/>
        </div>
    </div>
</template>

<script>
    import apiService from "../services/ProjectService";
    import {PortalTarget} from 'portal-vue'
    import ProjectList from "./ProjectList/ProjectList";

    export default {
        name: "ProjectRoot",
        components: {
            ProjectList,
            PortalTarget
        },
        data() {
            return {
                projectData: null,
                isLoaded: false,
                icon: "fas fa-spinner fa-spin",
                text: "Please wait while we are loading in your projects...",
                iconColor: "white"
            };
        },
        created() {
            let session = this.$session;
            let component = this;
            apiService
                .getProjects(session.get("plusplannerToken"))
                .then(response => {
                    component.projectData = response.data;
                    component.isLoaded = true;
                })
                .catch(error => {
                    window.console.log("There was an error: " + error);
                    component.icon = "fas fa-exclamation-triangle";
                    component.iconColor = "#8b0000";
                    component.text = "An error occured. Please try again. If this problem keeps occuring, contact us."
                });
        }
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
