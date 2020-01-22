<template>
    <v-overlay :value="overlay">
        <v-card class="createTask">
            <v-form>
                <v-container>
                    <v-card-title class="justify-center">Edit task</v-card-title>
                    <v-text-field id="taskname" label="Task name" filled shaped :value="name"></v-text-field>

                    <v-text-field id="taskdescription" label="Description" filled shaped
                                  :value="description"></v-text-field>
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-text-field v-model="date" label="End Date" readonly v-on="on"
                                          :value="endDate"></v-text-field>
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
                            <v-btn width="100%" color="#4f4f4f" @click="save">Save</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </v-overlay>
</template>

<script>
    export default {
        name: "EditTask",
        props: {
            name: String,
            enumTableName: String,
            description: String,
            subpartId: String,
            partId: String,
            endDate: String
        },
        data() {
            return {
                overlay: false,
                date: this.endDate,
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
            save: function () {
                let newName = document.getElementById("taskname").value;
                let newDescription = document.getElementById("taskdescription").value;
                let newItem = {
                    element: {
                        subpartid: this.subpartId,
                        subpartname: newName,
                        description: newDescription,
                        state: this.enumTableName,
                        enddate: this.date,
                        partid: this.partId
                    },
                    type: "task",
                    action: "update"
                };

                window.console.log(JSON.stringify(newItem));
                this.$parent.$parent.$parent.$parent.$parent.$parent.Websocket.send(JSON.stringify(newItem));
                this.overlay = !this.overlay;
            }
        }
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
