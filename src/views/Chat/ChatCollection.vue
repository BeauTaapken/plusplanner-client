<template>
    <div class="component-content">
            <div class="text-header" v-text="this.contentName"></div>
            <v-row style="margin-left: 2px">
                <v-col cols="10" class="col-chat">
                    <MessageContent>

                    </MessageContent>
                </v-col>
                <v-col cols="2" class="col-chat">
                    <ChatParticipants></ChatParticipants>
                </v-col>
            </v-row>
        </div>
</template>

<script>

    import ChatParticipants from "../../components/Chat/ChatParticipants";
    import MessageContent from "../../components/Chat/MessageContent";
    export default {
        name: "ChatCollection",
        components: {MessageContent, ChatParticipants},
        data: function () {
            return {
                contentName: this.$route.params.chat,
            }
        },
    }
</script>

<style scoped>
    .component-content {
        position: absolute;
        right: 0;
        top: 0;
        height: 100vh;
        width: calc(100% - 330px);
        background-color: #36393E;
        white-space: nowrap;
    }

    .text-header {
        min-height: 5vh;
        padding: 1vh;
        border-bottom: #1E2124 1px solid;
    }

    .col-chat {
        border-right: #1E2124 1px solid;
        position: relative;
        height: 95vh;
        padding: 0px;
    }
</style>