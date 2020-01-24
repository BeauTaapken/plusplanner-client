<template>
        <v-list-item id="new-channel">
            <i style="color: grey" class="fas fa-plus mr-2"></i> New channel
        </v-list-item>
</template>

<script>
    export default {
        name: "AddChannel",
        props: {

        },
    }
</script>

<style scoped>
    >>>.v-list-item {
        margin: 0;
        padding: 0;
        display: block;
        width: 100%;
    }

   #new-channel {
        color: white !important;
       text-align: center;
       font-size: 15px;
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