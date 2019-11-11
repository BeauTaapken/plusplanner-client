<template>
    <v-col cols="4" class="board-column">
        <v-card color="#2E3136" class="table" >
            <v-card-actions>
                <v-card-title>{{ tableName }}</v-card-title>
            </v-card-actions>

            <BoardTask
                    v-for="item in items"
                    v-bind:key="item.subpartid"
                    v-bind:name="item.subpartname"
                    v-bind:end-date="item.endDate"
            />
        </v-card>
    </v-col>
</template>

<script>
    import BoardTask from "./BoardTask";
    export default {
        name: "BoardTable",
        components: {BoardTask},
        props: {
            tableName: String,
            items: Array
        }
    }
</script>

<style scoped>
    >>>.v-card__title {
        color: white;
    }

    .board-container {
        padding: 1px;
    }

    .board-column {
        text-align: center;
    }
    .table {
        padding: 20px;
        text-align: center;
    }
</style>