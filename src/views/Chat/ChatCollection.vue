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
                contentName: this.$route.params.contentName,
            }
        },
    }
</script>

<style scoped>
    .component-content {
        float: left;
        min-height: 100vh;
        max-height: 100vh;
        width: calc(83% + 2px);
        margin-left: calc(17% - 2px);
        background-color: #36393E;
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