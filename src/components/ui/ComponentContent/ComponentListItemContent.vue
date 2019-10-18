<template>
    <div class="component-content">
        <div class="content">Content</div>
    </div>
</template>

<script>
    export default {
        name: "ComponentListItemContent"
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
.content {
    text-align: center;
    margin-top: 25%;
    font-size: 50px;
}
</style>