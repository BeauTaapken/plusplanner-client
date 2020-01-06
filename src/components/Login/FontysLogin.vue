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
                session.set("fontysToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImhPWFBYUmtteU5kc1ViMFMtN2Vlc2xOUEI0OCIsImtpZCI6ImhPWFBYUmtteU5kc1ViMFMtN2Vlc2xOUEI0OCJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZoaWN0Lm5sIiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eS5maGljdC5ubC9yZXNvdXJjZXMiLCJleHAiOjE1NzgzMTgyODEsIm5iZiI6MTU3ODMxMTA4MSwiY2xpZW50X2lkIjoiYXBpLWNsaWVudCIsInVybjpubC5maGljdDp0cnVzdGVkX2NsaWVudCI6InRydWUiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJmaGljdCIsImZoaWN0X3BlcnNvbmFsIiwiZmhpY3RfbG9jYXRpb24iXSwic3ViIjoiNGUwMDE2ZWItMWVkZC00NGExLWJlODktODk4YTA0YTlkMWRhIiwiYXV0aF90aW1lIjoxNTc4MzExMDgwLCJpZHAiOiJmaGljdC1zc28iLCJyb2xlIjpbInVzZXIiLCJzdHVkZW50Il0sInVwbiI6Ikk0MTMxNDNAZmhpY3QubmwiLCJuYW1lIjoiQXBwZWxkb29ybixSb3kgUi5QLiIsImVtYWlsIjoicm95LmFwcGVsZG9vcm5Ac3R1ZGVudC5mb250eXMubmwiLCJ1cm46bmwuZmhpY3Q6c2NoZWR1bGUiOiJjbGFzc3xBRFMzMSAvIFMzNiIsImZvbnR5c191cG4iOiI0MTMxNDNAc3R1ZGVudC5mb250eXMubmwiLCJhbXIiOlsiZXh0ZXJuYWwiXX0.MFbV64udrDzjj0PzRREDlh4FKK9KDaFDzFHag2YvfZx0efInp8hJP0bMd5ZMBy9UZIYs2RRabZ_oSRg82_PVWmKEq1cr_0nJpuz3uO1_CcS1bLbbXWJhNZkY474-0Grpmf6PDKI12JIaYzIc6eK7WuyZWFEJ-A8Hq-gs4ivCZYLobSB9Nj1Valww1udBUi3wDtpFwDpjzB0MywxVPKmz3aptil8QGHzLnXIUFLLKV5uW3itIiEaXShBC8Am15sPFiaWRmElNHBEKuRxamDKfIlNArX8sUg7Yz25u94IWjVLb46FMUZThxVJrFDqCbHkX9CJmLGvgkMr9MvwmARmZqg");
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