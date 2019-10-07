<template>
    <div class="home">
        <ProjectList></ProjectList>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ProjectList from "../../components/ui/ProjectList";

    export default {
        name: 'home',
        components: {
            ProjectList
        }
    }
</script>
