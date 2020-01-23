<template>
    <v-navigation-drawer
        v-model="primaryDrawer.model"
        :mini-variant="primaryDrawer.mini"
        :permanent="primaryDrawer.permanent"
        mini-variant-width="80"
        app
        fixed
        color="#23272A"
        id="vnav"
    >
        <v-layout column fill-height>
                <ProjectListItem
                    v-for="data in project.projects"
                    v-bind:key="data.projectid"
                    v-bind:projectname="data.projectname"
                />

            <v-spacer />

            <CreateProject ref="createProject"/>
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <div id="add-button" @click="createProject">
                        <v-btn class="mx-2" fab dark color="#7289DA" v-on="on">
                        <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </div>
                </template>
                <span>Add project</span>
            </v-tooltip>
        </v-layout>

  </v-navigation-drawer>
</template>

<script>
    import ProjectListItem from "./ProjectListItem";
    import CreateProject from "@/components/Project/CreateProject";
    import { mapState } from "vuex"
    
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
        computed: mapState({
            project: state => state.project
        }),
        methods: {
            createProject: function() {
                this.$refs.createProject.overlay = true;
            }
        }
    }
</script>

<style scoped>
    #add-button {
        margin: auto auto 10px;
    }
</style>