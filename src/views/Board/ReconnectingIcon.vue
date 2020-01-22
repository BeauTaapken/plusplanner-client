<template>
    <div class="reconnect-icon">
        <center><i class="fas fa-spinner fa-spin"></i></center>
        <p>Reconnecting</p>
    </div>
</template>

<script>
    export default {
        name: "ReconnectingIcon"
    }
</script>

<style scoped>
.reconnect-icon {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>