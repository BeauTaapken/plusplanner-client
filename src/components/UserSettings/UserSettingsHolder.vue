<template>
    <div id="holder">
        <p>{{username}}</p>
        <img :src="picture" id="image"/>
        <LogoutButton/>
    </div>
</template>

<script>

    import PictureHolder from "../../services/PictureHolder";
    import LogoutButton from "../Login/LogoutButton";

    export default {
        name: "UserSettingsHolder",
        components: {LogoutButton},
        data() {
            return {
                username: null,
                picture: null,
                loadingImage: true,
            }
        },
        created() {
            let token = this.$session.get("plusplannerToken");
            let parts = token.split('.');
            let payload = JSON.parse(atob(parts[1]));
            this.username = payload.unm;
            if(this.picture === null)
            {
                this.picture = PictureHolder.getPicture(this.$session.get("fontysToken"), payload.pfp);
            }
        },
    }
</script>

<style scoped>
    #holder {
        background-color: #2e3136;
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #1E2124;
        height: 10vh;
        min-height: 10vh;
        z-index: 100;

        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
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