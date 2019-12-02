<template>
    <v-card color="grey">
        <v-layout justify-center="true" class="v-card-item">
            <v-card-actions>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title style="color: white" class="headline mb-1">{{ name }}</v-list-item-title>
                        <v-list-item-subtitle >{{ endDate }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <EditTask
                        ref="editTask"
                        v-bind:name="name"
                        v-bind:end-date="endDate"
                        v-bind:table-name="tableName"
                        v-bind:description="description"
                        v-bind:part-id="partId"
                        v-bind:subpart-id="subpartId"
                        draggable="true"
                        ondragstart="event.preventDefault(); event.stopPropagation();"
                >
                </EditTask>
                <v-icon @click="editTask" class="edit-task">fas fa-edit</v-icon>
            </v-card-actions>
        </v-layout>
    </v-card>
</template>

<script>
    import EditTask from "./EditTask";

    export default {
        name: "BoardTask",
        components: {EditTask},
        props: {
            endDate: String,
            name: String,
            description: String,
            subpartId: Number,
            partId: Number,
            tableName: String
        },
        methods: {
            editTask: function () {
                this.$refs.editTask.overlay = true;
            }
        }
    };
</script>

<style scoped>
    .v-card-item {
        margin-top: 2%;
        transition: background-color 1s ease;
    }

    .v-card-item:hover {
        cursor: pointer;
        background-color: #5e5e5e;
    }

    .edit-task {
        position: absolute;
        right: 0;
        top: 0;
        margin-right: 10px;
        margin-top: 10px;
        font-size: 20px;
    }

    .edit-task:hover {
        color: grey;
    }
</style>
