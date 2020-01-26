<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "Logout",
        beforeCreate() {
            let id_token = this.$session.get("fontysIDToken");
            this.$session.destroy();
            window.location = `https://identity.fhict.nl/connect/endsession?id_token_hint=${id_token}&post_logout_redirect_uri=http://localhost:8080`
        }
    }
</script>

<style scoped>

</style>