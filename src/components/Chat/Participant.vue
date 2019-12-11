<template>
    <v-row class="participant">
        <v-col cols="2">
            <img class="img" src="https://cdn1.imggmi.com/uploads/2019/11/26/e3f2004d2c56466235564fe937b22be7-full.png"
                 width="50" height="50"/>
        </v-col>
        <v-col cols="10" class="user">
            <v-card-title class="username">{{ name }}</v-card-title>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "Participant",
        props: {
            id: Number,
            name: String,
            image: String
        }
    }
</script>

<style scoped>
    .participant {
        margin: auto;
    }
    .img {
        border-radius: 100px;
    }
</style>