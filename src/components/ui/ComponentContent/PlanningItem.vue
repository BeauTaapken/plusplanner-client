<template>
    <div class="table">
        <h1>{{ tableName }}</h1>
        <ul>
            <PlanningItemContent
                v-for="item in items"
                v-bind:key="item.subpartid"
                v-bind:name="item.subpartname"
                v-bind:end-date="item.endDate"
        />
        </ul>

    </div>
</template>

<script>
    import PlanningItemContent from "./PlanningItemContent";
    export default {
        name: "PlanningItem",
        components: {PlanningItemContent},
        props: {
            tableName: String,
            items: Array
        }
    }
</script>

<style scoped>
    .table {
        float: left;
        margin-top: 2%;
        height: auto;
        width: 25%;
        background-color: darkgray;
        border-radius: 20px;
        margin-left: 2%;
        overflow: hidden;
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