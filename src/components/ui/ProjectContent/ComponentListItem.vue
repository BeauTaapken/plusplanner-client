<template>
    <li>
        <router-link style="color: white; text-decoration: none" :to="{ name: 'content', params: {projectName: this.$route.params.projectName, contentName: itemName } }">
            <div class="nav-item">
                {{ itemName }}
            </div>
        </router-link>
    </li>
</template>

<script>
    export default {
        name: "ComponentListItem",
        props: {
            itemName: String
        },
    }
</script>

<style scoped>
    li {
        list-style-type: none;
        text-align: center;
        display: block;
    }

    .nav-item{
        padding: 5%;
        margin: 0;
        font-size: 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    li:hover {
        background-color: #282b2f;
        cursor: pointer;
    }
</style>