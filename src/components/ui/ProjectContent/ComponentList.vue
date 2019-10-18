<template>
    <div>
        <div class="component-header">
            <h2>Front-End</h2>
        </div>
        <ul>
            <ComponentListItem></ComponentListItem>
        </ul>
    </div>
</template>

<script>
    import ComponentListItem from "./ComponentListItem";
    export default {
        name: "ComponentList",
        components: {ComponentListItem}
    }
</script>

<style scoped>
    .component-header {
        text-align: center;
        border-bottom: 1px solid #1E2124;
    }
    ul{
        margin: 0;
        padding: 0;
    }

</style>