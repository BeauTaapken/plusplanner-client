<template>
        <router-link style="color: white; text-decoration: none; display: block" :key="itemName" :to="{ name: componentType, params: { projectName: this.$route.params.projectName, componentName: componentName, contentName: itemName } }">
            <v-list-item>
                {{ itemName }}
            </v-list-item>
        </router-link>
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
        display: block;
        width: 100%;
    }

    >>>.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
        color: white !important;
    }
    .v-list-item:hover {
        background-color: #282b2f !important;
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