<template>
        <button v-on:click="signin" class="loginBtn loginBtn--fontys">
            Login with Fontys
        </button>
</template>
<script>
    import TokenService from "../../services/TokenService";

    export default {
        name: "FontysLogin",
        methods: {
            signin: function () {
                let session = this.$session;
                let router = this.$router;
                session.start();
                session.set("fontysToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImhPWFBYUmtteU5kc1ViMFMtN2Vlc2xOUEI0OCIsImtpZCI6ImhPWFBYUmtteU5kc1ViMFMtN2Vlc2xOUEI0OCJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE1NzU5MDM3NjIsIm5iZiI6MTU3NTg5NjU2MiwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiYzFlMTBhYjktMjQ0NS00ZjBhLWFkZDUtNzU1OWFkODc3ODE1IiwiYXV0aF90aW1lIjoxNTc1ODk2NTYyLCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6Ikk0MTE5NDZAZmhpY3QubmwiLCJuYW1lIjoiTXVpanRqZW5zLFZpbmNlbnQgVi4iLCJlbWFpbCI6InYubXVpanRqZW5zQHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8SUNTMzcgLyBTMzYiLCJmb250eXNfdXBuIjoiNDExOTQ2QHN0dWRlbnQuZm9udHlzLm5sIiwiYW1yIjpbImV4dGVybmFsIl19.Do_A7bYD3iVLkUuPdmtomJXlDve9u4iH_DYJnrf4KC2dpSPEFYKBt_yaKxbJnDvrONkldCSEvXYIyVk4FvOFcm9nxD_yELGzOrcrqqjWGLNt1-gP4SJryzhZnOKmywYUypHBKm4xFfOgBHglcnuWo_d-PJRLN7k7s9ys1WHAdpJNPLh__xBzEj7AQBWQRVIe1VteJYYkXLeQaqCL_wDa1gipS6VXZdLBrBhlN1fUGJiyZzlcw58jOyY9Wpmk1xq6aHUCZROiU8dCDEJBRxWEGboCxTd4EWxSjwug3lpdXg_QqUI5Npe5cM2owZYjXgH2QtxXneH78aEGeIZSwjTKow");
                TokenService.getToken("xxxx", function (resp) {
                    session.set("plusplannerToken", resp);
                    router.push("/project");
                });
            }
        },
        beforeCreate() {
            if(this.$session.exists())
            {
                this.$router.push("/project");
            }
        }
    }
</script>

<style scoped>
    .loginBtn {
        box-sizing: border-box;
        position: relative;
        margin: 0.2em;
        padding: 0 15px 0 46px;
        border: none;
        text-align: left;
        line-height: 34px;
        white-space: nowrap;
        border-radius: 0.2em;
        font-size: 16px;
        color: #FFF;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    .loginBtn:before {
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 34px;
        height: 100%;
    }

    .loginBtn:focus {
        outline: none;
    }

    .loginBtn:active {
        box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
    }

    .loginBtn--fontys {
        background-color: #673366;
        background-image: linear-gradient(#673366, #5c2d5b);
        text-shadow: 0 -1px 0 #354C8C;
    }

    .loginBtn--fontys:before {
        border-right: #4d254c 1px solid;
        background: url('../../assets/fontys-logo.png') 6px 6px no-repeat;
    }

    .loginBtn--fontys:hover,
    .loginBtn--fontys:focus {
        background-color: #673366;
        background-image: linear-gradient(#673366, #5c2d5b);
    }
</style>