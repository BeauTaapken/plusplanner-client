<template>
        <v-card color="grey" class="v-card-item">
            <v-layout justify-center="true">
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
        }
    }
</script>

<style scoped>
    .v-card-item {
        margin-top: 2%;
    }
</style>