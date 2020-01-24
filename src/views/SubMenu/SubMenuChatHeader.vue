<template>
    <div>
        <v-list-group :value="open">
            <template v-slot:activator>
                <v-list-item-title>{{ chatName }}</v-list-item-title>
            </template>
            <SubMenuChatItem
                    v-for="item in channels"
                    v-bind:key="item.channelid"
                    v-bind:channel-name="item.name"
                    v-bind:chat-name="chatName"
            />
            <AddChannel/>
        </v-list-group>


    </div>
</template>

<script>
    import SubMenuChatItem from "./SubMenuChatItem";
    import AddChannel from "../../components/Channel/AddChannel";
    export default {
        name: "SubMenuChatHeader",
        components: {AddChannel, SubMenuChatItem},
        props: {
            chatName: String,
            channels: Array,
            chatId: String
        },
        data() {
            return {
                open: false
            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped>
    >>>.v-list-group__header {
        border-bottom: #1E2124 1px solid;
        border-top: #1E2124 1px solid;
    }

    >>>.v-list-item {
        margin: 0;
        padding: 20px;
    }
    >>>.v-list-group .v-list-item__title {
        color: white;
        font-size: 20px;
    }

    >>>.v-list-item .v-icon {
        color: white;
    }
    .component-header {
        padding-left: 5%;
        padding-right: 5%;
        text-align: left;
        border-bottom: 1px solid #1E2124;
        border-top: 1px solid #1E2124;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        height: auto;
        overflow: hidden;
        transition: background-color 1s ease;
    }

    .drop-content {
        display: none;
        height: auto;
    }

    .component-header:hover {
        cursor: pointer;
        background-color: #282b2f;
    }

    ul{
        margin: 0;
        padding: 0;
    }

    .drop-text {
        float: left;
        width: 90%;
    }
    .drop-icon {
        float: left;
        width: 10%;
    }

    .drop-header {
        float: left;
    }

</style>