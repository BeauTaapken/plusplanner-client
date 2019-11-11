<template>
    <v-list-item>
        <router-link style="color: white; text-decoration: none" :key="itemName" :to="{ name: componentType, params: { projectName: this.$route.params.projectName, componentName: componentName, contentName: itemName } }">
            <div class="nav-item">
                {{ itemName }}
            </div>
        </router-link>
    </v-list-item>
</template>

<script>
    export default {
        name: "SubMenuItem",
        props: {
            componentName: String,
            itemName: String,
            componentType: String
        },
    }
</script>

<style scoped>
    >>>.v-list-item {
        margin: 0;
        padding: 0;
        border-bottom: #1E2124 1px solid;
    }
    li {
        list-style-type: none;
        text-align: left;
        display: block;
    }

    .nav-item{
        margin: 0;
        font-size: 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    li:hover {
        background-color: #282b2f;
        cursor: pointer;
    }
</style>