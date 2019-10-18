<template>
    <li>
        <h3>UI Schetsen</h3>
    </li>
</template>

<script>
    export default {
        name: "ComponentListItem"
    }
</script>

<style scoped>
    li {
        list-style-type: none;
        text-align: center;
        display: block;
    }

    li h3 {
        padding: 5%;
        margin: 0;
    }

    li:hover {
        background-color: #282b2f;
        cursor: pointer;
    }
</style>