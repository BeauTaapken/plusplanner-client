<template>
    <div>
        <PlanningItem
            v-for="item in items"
            v-bind:key="item.tablename"
            v-bind:table-name="item.tablename"
            v-bind:items="item.items"
            />
    </div>
</template>

<script>
    import PlanningItem from "./PlanningItem";
    export default {
        name: "PlanningCollection",
        components: {PlanningItem},
        props: {
            items: Object
        },
    }
</script>

<style scoped>

</style>