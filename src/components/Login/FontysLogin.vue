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
                session.set("fontysToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImhPWFBYUmtteU5kc1ViMFMtN2Vlc2xOUEI0OCIsImtpZCI6ImhPWFBYUmtteU5kc1ViMFMtN2Vlc2xOUEI0OCJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE1NzY0NDUwNjYsIm5iZiI6MTU3NjQzNzg2NiwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiYzFlMTBhYjktMjQ0NS00ZjBhLWFkZDUtNzU1OWFkODc3ODE1IiwiYXV0aF90aW1lIjoxNTc2NDM3ODY1LCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6Ikk0MTE5NDZAZmhpY3QubmwiLCJuYW1lIjoiTXVpanRqZW5zLFZpbmNlbnQgVi4iLCJlbWFpbCI6InYubXVpanRqZW5zQHN0dWRlbnQuZm9udHlzLm5sIiwidXJuOm5sLmZoaWN0OnNjaGVkdWxlIjoiY2xhc3N8SUNTMzcgLyBTMzYiLCJmb250eXNfdXBuIjoiNDExOTQ2QHN0dWRlbnQuZm9udHlzLm5sIiwiYW1yIjpbImV4dGVybmFsIl19.TnlKKJpz_5UpYcHV27hF0Uco7OWsedkLBZSiO46pfuZvPKVlo-ZtzRuJ_UI9YsRQmsnvRGSKjWjHxa3r73Y8WmQghf_IMxeUy9rZcRsjRs_s_vvmI3ou-6vwWwZhEJ-mpfbvOvzUGuux4vcZVomeogOq3FQDlA4b-fB8Vdn7U8UJJu-7Y089uIZIGaFlJjn_VrlH0S8vOJT5E_jmhG9GzN_Z-tPZQRgOc_CfAWoLUZPjojdUD_j86FfZuVW94xiYHXcyRGe-ihmj8eHV_96IG4LbMGLNqaySF5t_Zkq3fYWLgE77JBn4HcoTpaRDSurslqaQUeH96b7twdA3WwiFbA");
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