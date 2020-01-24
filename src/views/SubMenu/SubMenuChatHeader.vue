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

            <v-list-item id="new-channel" v-on:click="addChannel">
                <i style="color: grey" class="fas fa-plus mr-2"></i> New channel
            </v-list-item>
        </v-list-group>

        <CreateChannel ref="createChannel" v-bind:chatId="chatId"/>
    </div>
</template>

<script>
    import SubMenuChatItem from "./SubMenuChatItem";
    import CreateChannel from '@/components/Chat/Channel/CreateChannel.vue';

    export default {
        name: "SubMenuChatHeader",
        components: {SubMenuChatItem, CreateChannel},
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
            addChannel: function() {
                this.$refs.createChannel.overlay = true;
            }
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

    #new-channel {
        color: white !important;
        text-align: center;
        font-size: 15px;
    }
</style>