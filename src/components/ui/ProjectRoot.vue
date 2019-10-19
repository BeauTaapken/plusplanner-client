<template>
    <div>
        <ProjectList></ProjectList>
        <router-view></router-view>
    </div>
</template>

<script>
    import ProjectList from "./ProjectList/ProjectList";
    import json from "./Projectfiles";

    export default {
        name: "ProjectRoot",
        components:{
            ProjectList,
        },
        data(){
            return{
                projectData: json,
            }
        }
    }
</script>

<style scoped>

</style>