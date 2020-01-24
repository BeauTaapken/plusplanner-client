<template>
    <v-tooltip top>
        <template v-slot:activator="{ on }">
            <v-btn class="mx-2" small fab dark color="#8b0000" id="logout-button" v-on="on" v-on:click="logout">
                <v-icon small dark>fas fa-sign-out-alt</v-icon>
            </v-btn>
        </template>
        <span>Logout</span>
    </v-tooltip>
</template>

<script>
    export default {
        name: "LogoutButton",
        methods: {
            logout: function() {
                this.$router.push("/logout");
            }
        }
    }
</script>

<style scoped>
#logout-button {
    position: absolute;
    bottom: 7px;
    right: 2px;
}
</style>