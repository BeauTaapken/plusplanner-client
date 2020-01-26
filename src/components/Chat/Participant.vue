<template>
    <v-row class="participant">
        <v-col cols="2">
            <img class="img" :src="picture"
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
            id: String,
            name: String,
            image: String
        },
        data() {
            return {
                picture: null
            }
        },
        methods: {
            getProfilePicture: function() {
                let comp = this;
                let session = this.$session;
                let data;
                fetch(comp.image + "?width=50px&height=50px", {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + session.get("fontysToken")
                    }
                }).then(response => {
                    response.blob().then(blobResponse => {
                        data = blobResponse;
                        const urlCreator = window.URL || window.webkitURL;
                        comp.picture = urlCreator.createObjectURL(data);
                    })
                });
            }
        },
        created() {
            this.getProfilePicture();
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