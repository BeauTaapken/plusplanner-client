<template>
    <div>
        <ProjectList></ProjectList>
        <router-view></router-view>
        <router-view :key="this.$route.fullPath" name="content"/>
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