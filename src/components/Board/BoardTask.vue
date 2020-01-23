<template>
    <v-list>
        <v-list-item dark class="list-item-background">
            <v-list-item-content>
                <v-list-item-title v-text="name"></v-list-item-title>
                <v-list-item-subtitle v-text="endDate"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
            <v-btn icon>
                <v-icon @click="editTask">mdi-circle-edit-outline</v-icon>
            </v-btn>
            </v-list-item-action>
        </v-list-item>

        <EditTask
                ref="editTask"
                v-bind:name="name"
                v-bind:end-date="endDate"
                v-bind:enum-table-name="enumTableName"
                v-bind:description="description"
                v-bind:part-id="partId"
                v-bind:subpart-id="subpartId"
                v-bind:project-id="projectId"
                draggable="true"
                ondragstart="event.preventDefault(); event.stopPropagation();"
        >
        </EditTask>
    </v-list>
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
            subpartId: String,
            partId: String,
            enumTableName: String,
            projectId: String
        },
        methods: {
            editTask: function () {
                this.$refs.editTask.overlay = true;
            }
        }
    };
</script>

<style scoped>
>>> .v-list-item {
    background-color: #72787d;
    border-radius: 4px;
}
</style>
