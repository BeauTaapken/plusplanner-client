<template>
    <div class="project-list">
        <ProjectListItem></ProjectListItem>
        <ProjectListItem></ProjectListItem>
    </div>
</template>

<script>
    import ProjectListItem from "./ProjectListItem";
    export default {
        name: "ProjectList",
        components: {ProjectListItem}
    }
</script>

<style scoped>

</style>