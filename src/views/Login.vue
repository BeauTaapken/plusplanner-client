<template>
    <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
            <v-card width="auto" style="margin: auto;" color="#2E3136" min-width="30%">
                <v-layout justify-center="true">
                    <v-card-actions>
                        <v-card-title>Login</v-card-title>
                    </v-card-actions>
                </v-layout>
                <v-card-actions>
                    <fontys-login class="auth-button">

                    </fontys-login>
                </v-card-actions>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    import FontysLogin from "../components/Login/FontysLogin";
    export default {
        name: "Login",
        components: {FontysLogin}
    }
</script>

<style scoped>
    >>>.v-card__title{
        color: white;
        text-align: center;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
.auth-button {
    margin: auto auto 2%;
}
</style>