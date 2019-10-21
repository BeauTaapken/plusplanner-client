<template>
        <li>
            {{name}}
        </li>
</template>

<script>
    export default {
        name: "PlanningItemContent",
        props: {
            endDate: String,
            name: String
        }
    }
</script>

<style scoped>

    li {
        text-align: center;
        text-decoration: none;
        list-style-type: none;
        padding: 3%;
        background-color: #36393E;
        width: 75%;
        margin-left: 12.5%;
        margin-right: 12.5%;
        border-radius: 10px;
        margin-bottom: 1%;
    }
</style>