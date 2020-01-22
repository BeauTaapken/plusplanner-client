<template>

    <v-layout justify-center>
        <v-card-actions>
            <div class="loader">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Please wait while we are validating you</p>
            </div>
        </v-card-actions>
        <v-overlay :value="overlay">
            <v-layout justify-center>
                <v-card width="50%">
                    <v-card-title>An error occurred validating you</v-card-title>
                    <v-card-actions>
                        {{ text}}
                    </v-card-actions>
                    <v-card-actions>
                        You are being redirected in 5 seconds.
                    </v-card-actions>
                </v-card>
            </v-layout>
        </v-overlay>
    </v-layout>

</template>

<script>
    import FontysTokenService from "../../services/FontysTokenService";
    import TokenService from "../../services/TokenService";

    export default {
        name: "TokenAuthorization",
        data() {
            return {
                overlay: false,
                text: null
            }
        },
        methods: {
            login: async function () {
                let session = this.$session;
                let router = this.$router;
                let comp = this;

                await FontysTokenService.getToken(this.$route.query.code)
                    .then(response => {
                        let json = response.data;
                        session.set("fontysToken", json.access_token);
                    }).catch(error => {
                        window.console.log(error);
                        comp.text = "An error occurred while validating you with Fontys. Please re-authenticate with Fontys and try again. If this problem keeps occurring, please contact the developers.";
                        comp.overlay = true;
                        setTimeout(function () {
                            router.push("/logout");
                        }, 5000)
                    });
                if (!comp.overlay) {
                    setTimeout(function () {
                        TokenService.getToken(session.get("fontysToken"))
                            .then(response => {
                                session.set("plusplannerToken", response.data);
                                router.push("/project");
                            }).catch(error => {
                                window.console.log(error);
                                comp.text = "An error occurred while trying to get an access token. Please re-authenticate with Fontys and try again. If this problem keeps occurring, please contact the developers.";
                                comp.overlay = true;
                            setTimeout(function () {
                                router.push("/logout");
                            }, 5000)
                            }
                        );
                    }, 200);
                }

            }
        },
        created() {
            this.login();
        }
    }
</script>

<style scoped>
    >>>.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
        padding: 1%;
    }
    .loader i {
        font-size: 75px;
        text-align: center;
        margin-left: 38%;
    }

    .loader p {
        text-align: center;
        font-size: 20px;
        margin-top: 5%;
    }
</style>