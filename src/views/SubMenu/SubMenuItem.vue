<template>
        <router-link style="color: white; text-decoration: none; display: block" :key="partName" :to="{ name: 'board', params: { partName: partName } }">
            <v-list-item>
                {{ partName }}
            </v-list-item>
        </router-link>
</template>

<script>
    export default {
        name: "SubMenuItem",
        props: {
            partName: String
        },
    }
</script>

<style scoped>
    >>>.v-list-item {
        margin: 0;
        padding: 0;
        display: block;
        width: 100%;
        border-top: #1E2124 solid 1px;
    }

    >>>.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){
        color: white !important;
        font-size: 20px;
    }
    .v-list-item:hover {
        background-color: #282b2f !important;
    }
    li {
        list-style-type: none;
        text-align: left;
        display: block;
    }

    >>>.v-list-item {
        padding: 20px;
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