<template>
    <div id="holder">
        <p>{{username}}</p>
        <img id="image"/>
    </div>
</template>

<script>

    export default {
        name: "UserSettingsHolder",
        data() {
            return {
                username: null
            }
        },
        created() {
            this.getProfilePicture();
            let token = this.$session.get("plusplannerToken");
            let parts = token.split('.');
            let payload = JSON.parse(atob(parts[1]));
            this.username = payload.unm;
        },
        methods: {
            getImage: function () {
                let token = this.$session.get("plusplannerToken");
                let parts = token.split('.');
                let payload = JSON.parse(atob(parts[1]));
                return payload.pfp;
            },
            getProfilePicture: function () {
                let comp = this;
                let data;
                fetch(comp.getImage() + "?width=150px&height=150px", {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + comp.$session.get("fontysToken")
                    }
                }).then(response => {
                    response.blob().then(blobResponse => {
                        data = blobResponse;
                        const urlCreator = window.URL || window.webkitURL;
                        document.getElementById('image').src = urlCreator.createObjectURL(data);
                    })
                });
            }
        }
    }
</script>

<style scoped>
    #holder {
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #1E2124;
        height: 10vh;
        min-height: 10vh;
        z-index: 100;
    }

    #holder p{
        margin-top: 35px;
        text-align: center;
    }

    #image {
        border-radius: 200px;
        position: absolute;
        bottom: 75%;
        width: 150px;
        height: 150px;
        left: 50px;
    }
</style>