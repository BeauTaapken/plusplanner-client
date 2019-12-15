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
                session.set("fontysToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImhPWFBYUmtteU5kc1ViMFMtN2Vlc2xOUEI0OCIsImtpZCI6ImhPWFBYUmtteU5kc1ViMFMtN2Vlc2xOUEI0OCJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE1NzY0MTIyNjAsIm5iZiI6MTU3NjQwNTA2MCwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiNGUwMDE2ZWItMWVkZC00NGExLWJlODktODk4YTA0YTlkMWRhIiwiYXV0aF90aW1lIjoxNTc2NDA1MDU5LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6Ikk0MTMxNDNAZmhpY3QubmwiLCJuYW1lIjoiQXBwZWxkb29ybixSb3kgUi5QLiIsImVtYWlsIjoicm95LmFwcGVsZG9vcm5Ac3R1ZGVudC5mb250eXMubmwiLCJ1cm46bmwuZmhpY3Q6c2NoZWR1bGUiOiJjbGFzc3xBRFMzMSAvIFMzNiIsImZvbnR5c191cG4iOiI0MTMxNDNAc3R1ZGVudC5mb250eXMubmwiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.fg87z70_-_J_tA1y3OfdgiaWvLXKuuW6mMzLcgPKi83QB4ewLSPMdwbdcKt6smsj8OyjSwUJskY4WuXfyh-SjIo3PD1NJ7QupvDs0YHyH9i0vt1tVsPi9l-IWU_VtSSglDgjXrDurdhgr5hL54sFVLSTTdUAHBkv_HrjhQKu7o0BEEgEArznyI_lOgxnZQq8qSend2x7SadND3xgdnfY3GH4Cm-7dXeBmkeCywoukCEaDeX_EnrjtCkX0N1qLvwVyPih0mcXK_VtWvorgpO-i928TQpop6TtEjPnDzUr2cRCwg2Q1_EeXjgW_VWF9RBLI6P8ZklMznWFfFjbyQVisg");
                TokenService.getToken(session.get("fontysToken"))
                    .then(response => {
                        session.set("plusplannerToken", response.data);
                        router.push("/project");
                    }).catch(error => {
                        alert("We couldn't validate you with Fontys.");
                        window.console.log(error);
                    }
                );
            }
        },
        beforeCreate() {
            if (this.$session.exists()) {
                if (this.$session.get("plusplannerToken") != null) {
                    this.$router.push("/project");
                }
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