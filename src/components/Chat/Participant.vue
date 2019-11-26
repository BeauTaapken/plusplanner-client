<template>
    <div>
        <v-row>
            <v-col cols="6" class="user">
                <v-card-title class="username">{{ name }}</v-card-title>
            </v-col>
            <v-col cols="6">
                <img class="img" src="https://cdn1.imggmi.com/uploads/2019/11/26/e3f2004d2c56466235564fe937b22be7-full.png" width="50" height="50"/>
            </v-col>
        </v-row>
    </div>
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
.username {
    text-align: right;
}

    .img {
        border-radius: 100px;
    }
</style>