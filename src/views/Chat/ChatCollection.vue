<template>
    <div class="component-content">
        <div class="text-header" v-text="this.$route.params.contentName"></div>
    </div>
</template>

<script>
    export default {
        name: "ChatCollection"
    }
</script>

<style scoped>
    .component-content {
        float: left;
        height: 100vh;
        width: calc(83% + 2px);
        margin-left: -1px;
        background-color: #36393E;
    }

    .text-header {
        padding: 1%;
        border-bottom: #1E2124 1px solid;
    }
</style>