<template>
    <div class="table">
        <h1>{{ tableName }}</h1>
        <ul>
            <draggable :list="item in items" group="items">
                <BoardTask
                    v-for="item in items"
                    v-bind:key="item.subpartid"
                    v-bind:name="item.subpartname"
                    v-bind:end-date="item.endDate"
                />
            </draggable>
        </ul>
    </div>
</template>

<script>
    import BoardTask from "./BoardTask";
    import draggable from 'vuedraggable';

    export default {
        name: "BoardTable",
        components: {
            BoardTask,
            draggable
        },
        props: {
            tableName: String,
            items: Array
        }
    }
</script>

<style scoped>
    .table {
        display: inline-block;
        margin-top: 2%;
        width: 25%;
        background-color: darkgray;
        border-radius: 20px;
        margin-left: 2%;
        position: relative;
    }

    .table h1 {
        text-align: center;
        padding: 1%;
        border-bottom: 1px solid white;
    }
    ul {
        padding: 0px;
    }
</style>