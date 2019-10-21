<template>
    <div class="home">
        <ProjectRoot></ProjectRoot>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ProjectRoot from "../../components/ui/ProjectRoot";

    export default {
        name: 'home',
        components: {
            ProjectRoot
        },
    }
</script>

<style lang="scss">
    .home {
        height: 100%;
        display: flex;
    }
</style>