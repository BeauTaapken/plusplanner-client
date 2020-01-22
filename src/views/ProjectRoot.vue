<template>
    <div>
        <div v-if="!isLoaded">
            <v-layout justify-center id="loading">
                <div>
                    <i id="loading-icon" class="fas fa-spinner fa-spin"></i>
                    <p id="loading-text">Please wait while we are loading in your projects.</p>
                </div>
            </v-layout>
        </div>
        <div v-if="isLoaded">
            <ProjectList></ProjectList>
            <router-view :key="this.$route.fullPath"></router-view>

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
                isLoaded: false
            };
        },
        created() {
            let session = this.$session;
            let component = this;
            setTimeout(function () {
                apiService
                    .getProjects(session.get("plusplannerToken"))
                    .then(response => {
                        component.projectData = response.data;
                        component.isLoaded = true;
                    })
                    .catch(error => window.console.log("There was an error: " + error));
            }, 5000)
        }
    };
</script>

<style>
  #loading {
    margin-top: 22%;
  }

    #loading-icon {
        font-size: 75px;
        margin-left: 41%;
    }

  #loading-text {
    text-align: center;
    font-size: 20px;
    margin-top: 5%;
  }
</style>
