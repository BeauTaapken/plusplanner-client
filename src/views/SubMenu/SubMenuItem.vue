<template>
        <router-link style="color: white; text-decoration: none; display: block" :key="itemName" :to="{ name: 'board', params: { contentName: itemName } }">
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
        },
    }
</script>

<style scoped>
    >>>.v-list-item {
        margin: 0;
        padding: 5% 0 5% 6%;
        width: 100%;
        border-top: #1E2124 1px solid;
        font-size: 20px;
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