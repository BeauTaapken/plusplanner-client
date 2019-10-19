<template>
    <div>
        <div class="component-header">
            <h2>{{ componentName }}</h2>
        </div>
        <ComponentListItem
        v-for="item in componentItem"
        v-bind:key="item"
        v-bind:item-name="item"
        />

    </div>
</template>

<script>
    import ComponentListItem from "./ComponentListItem";
    export default {
        name: "TestComp",
        components: {ComponentListItem},
        props: {
            componentName: String,
            componentItem: Object
        },
    }
</script>

<style scoped>
    .component-header {
        text-align: center;
        border-bottom: 1px solid #1E2124;
        border-top: 1px solid #1E2124;
    }
    ul{
        margin: 0;
        padding: 0;
    }

</style>