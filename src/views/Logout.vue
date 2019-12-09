<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "Logout",
        beforeCreate() {
            this.$session.destroy();
            this.$router.push("/login");
        }
    }
</script>

<style scoped>

</style>