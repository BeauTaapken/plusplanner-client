<template>
    <div class="message-content" id="chat">
        <ChatMessage v-for="data in getMessages"
                     v-bind:key="data.messageid"
                     v-bind:message-id="data.messageid"
                     v-bind:channel-id="data.channelid"
                     v-bind:message-content="data.content"
                     v-bind:send-date="data.senddate"
                     v-bind:user-id="data.userid"
                     v-bind:sender="0 === data.userid"
        ></ChatMessage>
        <ChatMessageInput></ChatMessageInput>
    </div>
</template>

<script>
    import ChatMessage from "./ChatMessage";
    import ChatMessageInput from "./ChatMessageInput";

    export default {
        name: "MessageContent",
        components: {ChatMessageInput, ChatMessage},
        data() {
            return {

            }
        },
        computed: {
            getMessages() {
                return this.$parent.usedData.messages;
            },
            getChannelId() {
                return this.$parent.usedData.channelid;
            },
            getProjectId() {
                return this.$parent.projectId;
            }
        }
    }
</script>

<style scoped>
.message-content {
    max-height: 85vh;
    overflow-y:scroll;
}
</style>