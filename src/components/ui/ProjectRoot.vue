<template>
    <div>
        <ProjectList></ProjectList>
        <ProjectContent></ProjectContent>
        <ComponentListItemContent></ComponentListItemContent>
    </div>
</template>

<script>
    import ProjectList from "./ProjectList/ProjectList";
    import ProjectContent from "./ProjectContent/ProjectContent";
    import ComponentListItemContent from "./ComponentContent/ComponentListItemContent";
    import json from "./Projectfiles";

    export default {
        name: "ProjectRoot",
        components:{
            ProjectList,
            ProjectContent,
            ComponentListItemContent
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