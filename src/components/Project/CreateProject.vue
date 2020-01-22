<template>
    <portal to="createProjectOverlayDest">
        <v-overlay
                :value="overlay"
                :absolute="absolute"
                :opacity="opacity"
                :z-index="zIndex"
                class="custom-overlay">
            <v-card class="createProject">
                <v-form>
                    <v-container>
                        <v-card-title class="justify-center">New project</v-card-title>
                        <v-text-field id="project-name" label="Project name" filled shaped></v-text-field>

                        <v-text-field id="project-description" label="Project description" filled shaped></v-text-field>
                        <v-menu>
                            <template v-slot:activator="{ on }">
                                <v-text-field v-model="date" label="End Date" readonly v-on="on"></v-text-field>
                            </template>
                            <v-date-picker
                                    v-model="date"
                                    @input="menu2 = false"
                                    width="426"
                                    color="#424242"
                                    event-color="#424242"
                            ></v-date-picker>
                        </v-menu>

                        <v-row>
                            <v-col cols="6">
                                <v-btn width="100%" color="#3b3b3b" @click="cancel">Cancel</v-btn>
                            </v-col>

                            <v-col cols="6">
                                <v-btn width="100%" color="#4f4f4f" @click="save">Create</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card>
        </v-overlay>
    </portal>
</template>

<script>
    import {Portal} from 'portal-vue'
    import APIService from '@/services/ProjectService'
    import TokenService from "../../services/TokenService";
    const uuidv1 = require('uuid/v1');
      
    export default {
        name: "CreateProject",
        data() {
            return {
                overlay: false,
                absolute: true,
                opacity: 0.46,
                zIndex: 999,
                date: new Date().toISOString().substr(0, 10),
            };
        },
        components: {
            Portal
        },
        methods: {
            save: function () {
                let project_id = uuidv1();
                let project_name = document.getElementById("project-name").value;
                let project_description = document.getElementById("project-description").value;
                let project_enddate = this.date;

                const uuidv1 = require('uuid/v1');
                const project = {
                    projectid: uuidv1(),
                    projectname: project_name,
                    description: project_description,
                    enddate: project_enddate
                };

                let session = this.$session;

                APIService
                    .createProject(session.get("plusplannerToken"), project)
                    .then(() => {
                        this.overlay = !this.overlay;
                    })
                    .catch(error => window.console.log(error.response));

                TokenService.getToken(session.get("fontysToken"))
                    .then(response => {
                        session.set("plusplannerToken", response.data);
                    }).catch(error => {
                        window.console.log(error);
                    }
                );
                window.location.reload();
            },
            cancel: function () {
                this.overlay = !this.overlay;
            }
        }
    };
</script>

<style scoped>


    .createProject {
        padding: 5%;
        width: 500px;
        height: auto;
        overflow: hidden;
    }

    >>> .v-text-field input {
        text-align: center;
    }

    .v-card-item {
        margin-top: 2%;
        transition: background-color 1s ease;
    }

    .v-card-item:hover {
        cursor: pointer;
        background-color: #5e5e5e;
    }
</style>
