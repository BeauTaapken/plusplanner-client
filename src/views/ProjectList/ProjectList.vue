<template>
    <v-navigation-drawer
        v-model="primaryDrawer.model"
        :mini-variant="primaryDrawer.mini"
        :permanent="primaryDrawer.permanent"
        mini-variant-width="80"
        app
        color="#23272A"
        id="vnav"
    >
        <v-layout column fill-height>
            <ProjectListItem
                v-for="data in this.$parent.projectData.projects"
                v-bind:key="data.projectid"
                v-bind:project-name="data.projectname"
            />

            <v-spacer />

            <CreateProject ref="createProject"/>
            <div id="add-button" @click="createProject">
                <v-btn class="mx-2" fab dark color="#7289DA">
                <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </div>
        </v-layout>

  </v-navigation-drawer>
</template>

<script>
    import ProjectListItem from "./ProjectListItem";
    import CreateProject from "@/components/Project/CreateProject";

    export default {
        name: "ProjectList",
        components: { 
            ProjectListItem,
            CreateProject
        },
        data() {
            return {
                primaryDrawer: {
                    model: null,
                    mini: true,
                    permanent: true
                }
            };
        },
        methods: {
            createProject: function() {
                this.$refs.createProject.overlay = true;
            }
        }
    }
</script>

<style scoped>
    #add-button {
        margin: auto;
        margin-bottom: 10px;
    }
</style>