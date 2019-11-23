<template>
        <v-card color="grey" >
            <v-layout justify-center="true" class="v-card-item">
                <v-card-actions>
                    <v-card-title>{{name}}</v-card-title>
                </v-card-actions>
            </v-layout>
        </v-card>
</template>

<script>


    export default {
        name: "BoardTask",
        props: {
            endDate: String,
            name: String
        },
    }
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
</style>