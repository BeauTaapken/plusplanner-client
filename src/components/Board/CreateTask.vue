<template>
    <div>
        <v-btn @click="addTask" small dark color="#7289DA" block depressed>
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>

        <v-overlay :value="overlay">
            <v-card class="createTask">
                <v-form ref="createNewTask">
                    <v-container>
                        <v-card-title class="justify-center">New task</v-card-title>
                        <v-text-field id="taskname" label="Task name" :rules="[rules.required]" filled shaped></v-text-field>

                        <v-text-field id="taskdescription" label="Description" :rules="[rules.required]" filled shaped></v-text-field>
                        <v-menu>
                            <template v-slot:activator="{ on }">
                                <v-text-field v-model="date" label="End Date" :rules="[rules.required]" readonly v-on="on"></v-text-field>
                            </template>
                            <v-date-picker
                                    :rules="[rules.required]"
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
                                <v-btn width="100%" color="#4f4f4f" @click="save">Add</v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-form>
            </v-card>
        </v-overlay>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    export default {
        name: "CreateTask",
        props: {
            name: String,
            enumTableName: String
        },
        data() {
            return {
                rules: {
                    required: value => !!value || 'Required.',
                },
                overlay: false,
                date: new Date().toISOString().substr(0, 10),
                menu2: false
            };
        },
        methods: {
            addTask: function () {
                this.overlay = !this.overlay;
            },
            cancel: function () {
                this.overlay = !this.overlay;
            },
            createUUID: function () {
                const uuidv1 = require('uuid/v1');
                return uuidv1();
            },
            save: function () {
                if(this.$refs.createNewTask.validate())
                {
                    let name = document.getElementById("taskname").value;
                    let description = document.getElementById("taskdescription").value;
                    let partid = this.$parent.$parent.$parent.partId;
                    let json = {
                        element: {
                            subpartid: this.createUUID(),
                            subpartname: name,
                            description: description,
                            state: this.enumTableName,
                            enddate: this.date,
                            partid: partid
                        },
                        projectid: this.getProjectIdByName(this.$route.params.projectName),
                        type: "subpart",
                        action: "create"
                    };
                    window.console.log(json);
                    this.$root.websocket.sendJson(json);
                    this.overlay = !this.overlay;
                }
            }
        },
        computed: mapGetters("project", ['getProjectIdByName']),
    };
</script>

<style scoped>
    .createTask {
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
